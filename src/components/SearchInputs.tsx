"use client";

import React from 'react';

type Props = {
  province: string;
  city: string;
  clothingType: string;
  setProvince: (v: string) => void;
  setCity: (v: string) => void;
  setClothingType: (v: string) => void;
};

/**
 * SearchInputs
 * Controlled input row for province / city and clothing type dropdown.
 */
export default function SearchInputs({ province, city, clothingType, setProvince, setCity, setClothingType }: Props) {
  const clothingOptions = [
    "All",
    "General Clothing",
    "Outerwear",
    "Hats",
    "Bags",
    "Shoes",
    "Accessories",
    "Formalwear",
    "Sleepwear",
  ];

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="text"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
        placeholder="Enter Canadian province"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/4 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/4 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
      <select
        value={clothingType}
        onChange={(e) => setClothingType(e.target.value)}
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/4 px-4 py-2 rounded border border-gray-300"
      >
        {clothingOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
