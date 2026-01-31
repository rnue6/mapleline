'use client';

import { useState } from 'react';
import Header from '../components/Header';
import MapPlaceholder from '../components/MapPlaceholder';
import SearchInputs from '../components/SearchInputs';

/**
 * HomePage
 * - Renders the header
 * - Shows a map placeholder (Leaflet mounts here later)
 * - Renders three centered inputs for province / city / postal code
 *
 * Components are split into small files under `src/components` for clarity.
 */
export default function HomePage() {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // (no unused example handlers)

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-6" style={{ color: '#b86633' }}>
            <span>MapleLine</span>
          </h1>

          {/* Map placeholder component - Leaflet will mount into #map */}
          <MapPlaceholder province={province} city={city} postalCode={postalCode} />

          {/* Inputs are controlled and extracted into a component */}
          <SearchInputs
            province={province}
            city={city}
            postalCode={postalCode}
            setProvince={setProvince}
            setCity={setCity}
            setPostalCode={setPostalCode}
          />

        </div>
      </main>
    </div>
  );
}
