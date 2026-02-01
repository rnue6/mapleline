'use client';

import { useState } from 'react';
import Header from '../components/Header';
import MapPlaceholder from '../components/MapPlaceholder';
import SearchInputs from '../components/SearchInputs';

/**
 * HomePage
 * - Renders the header
 * - Shows a map with store markers filtered by clothing type
 * - Renders inputs for province / city and dropdown for clothing type
 *
 * Components are split into small files under `src/components` for clarity.
 */
export default function HomePage() {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [clothingType, setClothingType] = useState('All');

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="flex min-h-[calc(100vh-80px)] items-start justify-center px-6 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl font-bold text-center mb-6" style={{ color: '#b86633' }}>
            <span>
              <span style={{ fontFamily: "AstonScript, serif" }}>M</span>aple
              <span style={{ fontFamily: "AstonScript, serif" }}>L</span>ine
            </span>
          </h1>

          <p className="text-center text-lg mb-6" style={{ color: '#6b4b3a', fontFamily: 'CaviarDreams' }}>
            Discover better fashion choices & support trusted Canadian businesses.
          </p>

          <p className="text-center text-m mb-6" style={{ color: '#6b4b3a', fontFamily: 'CaviarDreams' }}>
            Type in your location and desired clothing category to find local, verified & sustainable stores.
          </p>

          {/* Map placeholder component - Leaflet will mount into #map */}
          <MapPlaceholder province={province} city={city} clothingType={clothingType} />

          {/* Inputs for province / city and clothing filter dropdown */}
          <SearchInputs
            province={province}
            city={city}
            clothingType={clothingType}
            setProvince={setProvince}
            setCity={setCity}
            setClothingType={setClothingType}
          />

        </div>
      </main>
    </div>
  );
}
