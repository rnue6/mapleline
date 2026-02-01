"use client";

import { useEffect, useRef } from "react";
import stores from "../lib/stores";
import "../lib/leaflet/dist/leaflet.css";

type Props = {
  province: string;
  city: string;
  postalCode: string;
};

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function MapPlaceholder({ province, city, postalCode }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      // dynamic import of bundled leaflet
      const mod = await import("../lib/leaflet/dist/leaflet-src.esm.js");
      // Leaflet exports as default or module itself
      const L = (mod && (mod as any).default) || mod;

      if (cancelled) return;

      if (!leafletMapRef.current && mapRef.current) {
        leafletMapRef.current = L.map(mapRef.current, {
          center: [56.1304, -106.3468], // Canada center
          zoom: 4,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(leafletMapRef.current);

        markersRef.current = L.layerGroup().addTo(leafletMapRef.current);
      }
    }

    setup();

    return () => {
      cancelled = true;
      if (leafletMapRef.current) {
        try {
          leafletMapRef.current.remove();
        } catch (e) {}
        leafletMapRef.current = null;
      }
    };
  }, []);

  // react to location inputs and re-center / add markers
  useEffect(() => {
    let cancelled = false;
    let timeout = 0 as unknown as number;

    const queryParts: string[] = [];
    if (city) queryParts.push(city);
    if (province) queryParts.push(province);
    if (postalCode) queryParts.push(postalCode);
    queryParts.push("Canada");
    const query = queryParts.filter(Boolean).join(" ").trim();

    const doSearch = async () => {
      if (!query) return;
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
        const res = await fetch(url);
        const data = await res.json();
        if (cancelled) return;

        if (data && data.length > 0 && leafletMapRef.current) {
          const top = data[0];
          const lat = parseFloat(top.lat);
          const lon = parseFloat(top.lon);
          leafletMapRef.current.setView([lat, lon], 13);

          // clear markers
          if (markersRef.current) markersRef.current.clearLayers();

          // add search location marker
          const mod = await import("../lib/leaflet/dist/leaflet-src.esm.js");
          const L = (mod && (mod as any).default) || mod;
          L.marker([lat, lon]).addTo(markersRef.current).bindPopup("Search location");

          // show nearby stores (within 15 km)
          const nearby = stores.filter((s) => getDistanceKm(lat, lon, s.lat, s.lng) <= 15);
          nearby.forEach((s) => {
            const popup = `<strong>${s.name}</strong><br/>${s.address}<br/>${s.phone}<br/>Rating: ${s.rating}`;
            L.marker([s.lat, s.lng]).addTo(markersRef.current).bindPopup(popup);
          });
        }
      } catch (e) {
        // ignore errors for now
        console.error(e);
      }
    };

    // debounce a bit for typing
    timeout = window.setTimeout(doSearch, 700);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [city, province, postalCode]);

  return (
    <div
      id="map"
      ref={mapRef}
      aria-label="Map"
      className="w-full h-96 rounded shadow-md bg-gray-200 dark:bg-gray-800"
      style={{ minHeight: 360 }}
    />
  );
}
