"use client";

import { useEffect, useRef } from "react";
import stores from "../lib/stores";
import "../lib/leaflet/dist/leaflet.css";

type Props = {
  province: string;
  city: string;
  clothingType: string;
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

export default function MapPlaceholder({ province, city, clothingType }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<any>(null);
  const LRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      // dynamic import of bundled leaflet
      const mod = await import("../lib/leaflet/dist/leaflet-src.esm.js");
      // Leaflet exports as default or module itself
      const L = (mod && (mod as any).default) || mod;
      LRef.current = L;

      if (cancelled) return;

      if (!leafletMapRef.current && mapRef.current) {
        leafletMapRef.current = L.map(mapRef.current, {
          center: [56.1304, -106.3468], // Canada center
          zoom: 4,
          maxBounds: [[42, -141], [83.5, -52]], // Canada boundaries
          maxBoundsViscosity: 1.0,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(leafletMapRef.current);

        markersRef.current = L.layerGroup().addTo(leafletMapRef.current);

        // Show all stores initially filtered by clothing type (case-insensitive match)
        const normalizedClothing = (clothingType || "").toLowerCase();
        const filteredStores = normalizedClothing === "all" || !normalizedClothing
          ? stores
          : stores.filter((s) => s.clothingTypes.map((t) => t.toLowerCase()).includes(normalizedClothing));

        const customIcon = L.icon({
          iconUrl: "/mapleline_logo_icon.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
          shadowUrl: null,
        });
        
        // Apply border styling to icons when they're created
        markersRef.current.on('layeradd', function(e) {
          if (e.layer instanceof L.Marker) {
            const img = e.layer._icon;
            if (img) {
              img.style.filter = 'drop-shadow(0 0 0 2px black)';
              img.style.borderRadius = '50%';
            }
          }
        });

        filteredStores.forEach((s) => {
          const popup = `<div class="store-popup">
            <strong>${s.name}</strong><br/>
            <span>${s.address}</span><br/>
            <span>${s.phone}</span><br/>
            <span>Rating: ${s.rating} ⭐</span><br/>
            <span style="font-size: 0.9em; color: #666;">
              ${s.clothingTypes.join(", ")}
            </span><br/>
            <span style="font-style: italic; color: #b86633; font-size: 0.95em; margin-top: 5px; display: block;">
              ${s.tagline}
            </span>
          </div>`;
          
          L.marker([s.lat, s.lng], { icon: customIcon }).addTo(markersRef.current).bindPopup(popup);
        });
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

  // react to location inputs and clothing type filter
  useEffect(() => {
    if (!LRef.current || !markersRef.current || !leafletMapRef.current) return;

    let cancelled = false;

    const updateMarkers = async () => {
      if (cancelled) return;

      const L = LRef.current;

      // clear markers
      markersRef.current.clearLayers();

      // Filter stores by clothing type (case-insensitive)
      const normalizedClothing = (clothingType || "").toLowerCase();
      const filteredStores = normalizedClothing === "all" || !normalizedClothing
        ? stores
        : stores.filter((s) => s.clothingTypes.map((t) => t.toLowerCase()).includes(normalizedClothing));

      const customIcon = L.icon({
        iconUrl: "/mapleline_logo_icon.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        shadowUrl: null,
      });

      // Search if either province or city is filled
      const hasLocationFilters = Boolean(province.trim() || city.trim());

      if (!hasLocationFilters) {
        // Show all stores filtered by clothing type if location fields are empty
        filteredStores.forEach((s) => {
          const popup = `<div class="store-popup">
            <strong>${s.name}</strong><br/>
            <span>${s.address}</span><br/>
            <span>${s.phone}</span><br/>
            <span>Rating: ${s.rating} ⭐</span><br/>
            <span style="font-size: 0.9em; color: #666;">
              ${s.clothingTypes.join(", ")}
            </span><br/>
            <span style="font-style: italic; color: #b86633; font-size: 0.95em; margin-top: 5px; display: block;">
              ${s.tagline}
            </span>
          </div>`;
          
          L.marker([s.lat, s.lng], { icon: customIcon }).addTo(markersRef.current).bindPopup(popup);
        });
        return;
      }

      const queryParts: string[] = [];
      if (city) queryParts.push(city);
      if (province) queryParts.push(province);
      queryParts.push("Canada");
      const query = queryParts.filter(Boolean).join(" ").trim();

      // Apply border styling to newly added markers
      const applyIconStyle = function() {
        const markers = markersRef.current.getLayers();
        markers.forEach((marker: any) => {
          if (marker._icon) {
            marker._icon.style.filter = 'drop-shadow(0 0 0 2px black)';
            marker._icon.style.borderRadius = '50%';
          }
        });
      };
      
      setTimeout(applyIconStyle, 10);

      if (query && query !== "Canada") {
        try {
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
          const res = await fetch(url);
          const data = await res.json();
          if (cancelled) return;

          if (data && data.length > 0) {
            const top = data[0];
            const lat = parseFloat(top.lat);
            const lon = parseFloat(top.lon);
            leafletMapRef.current.setView([lat, lon], 13);

            // show nearby stores (within 15 km)
            const nearby = filteredStores.filter((s) => getDistanceKm(lat, lon, s.lat, s.lng) <= 15);
            
            nearby.forEach((s) => {
              const popup = `<div class="store-popup">
                <strong>${s.name}</strong><br/>
                <span>${s.address}</span><br/>
                <span>${s.phone}</span><br/>
                <span>Rating: ${s.rating} ⭐</span><br/>
                <span style="font-size: 0.9em; color: #666;">
                  ${s.clothingTypes.join(", ")}
                </span><br/>
                <span style="font-style: italic; color: #b86633; font-size: 0.95em; margin-top: 5px; display: block;">
                  ${s.tagline}
                </span>
              </div>`;
              
              L.marker([s.lat, s.lng], { icon: customIcon }).addTo(markersRef.current).bindPopup(popup);
            });
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        // Show all filtered stores if no location search
        filteredStores.forEach((s) => {
          const popup = `<div class="store-popup">
            <strong>${s.name}</strong><br/>
            <span>${s.address}</span><br/>
            <span>${s.phone}</span><br/>
            <span>Rating: ${s.rating} ⭐</span><br/>
            <span style="font-size: 0.9em; color: #666;">
              ${s.clothingTypes.join(", ")}
            </span><br/>
            <span style="font-style: italic; color: #b86633; font-size: 0.95em; margin-top: 5px; display: block;">
              ${s.tagline}
            </span>
          </div>`;
          
          L.marker([s.lat, s.lng], { icon: customIcon }).addTo(markersRef.current).bindPopup(popup);
        });
      }
    };

    // Run update immediately (no debounce) so dropdown changes reflect instantly
    updateMarkers();

    return () => {
      cancelled = true;
    };
  }, [city, province, clothingType]);

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
