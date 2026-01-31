"use client";

import React from 'react';

type Props = {
  province: string;
  city: string;
  postalCode: string;
  setProvince: (v: string) => void;
  setCity: (v: string) => void;
  setPostalCode: (v: string) => void;
};

/**
 * SearchInputs
 * Controlled input row for province / city / postal code.
 * Separated into its own component to keep the page file focused
 * on layout and state wiring.
 */
export default function SearchInputs({ province, city, postalCode, setProvince, setCity, setPostalCode }: Props) {
  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="text"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        placeholder="Enter Canadian province"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/3 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/3 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
      <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        placeholder="Enter postal code"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/3 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
    </div>
  );
}
