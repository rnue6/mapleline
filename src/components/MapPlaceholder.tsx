"use client";

/**
 * MapPlaceholder
 * A simple placeholder container where Leaflet (or another map library)
 * can mount later. Kept as a separate component to keep page layout clean.
 */
export default function MapPlaceholder() {
  return (
    <div
      id="map"
      aria-label="Map placeholder"
      className="w-full h-96 rounded shadow-md bg-gray-200 dark:bg-gray-800"
    />
  );
}
