"use client";

import React, { useRef, useEffect } from 'react';

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
  const provinceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleProvinceChange = (v: string) => {
    if (provinceTimeoutRef.current) clearTimeout(provinceTimeoutRef.current);
    provinceTimeoutRef.current = setTimeout(() => setProvince(v), 300);
  };

  const handleCityChange = (v: string) => {
    if (cityTimeoutRef.current) clearTimeout(cityTimeoutRef.current);
    cityTimeoutRef.current = setTimeout(() => setCity(v), 300);
  };

  useEffect(() => {
    return () => {
      if (provinceTimeoutRef.current) clearTimeout(provinceTimeoutRef.current);
      if (cityTimeoutRef.current) clearTimeout(cityTimeoutRef.current);
    };
  }, []);
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
        defaultValue={province}
        onChange={(e) => handleProvinceChange(e.target.value)}
        placeholder="Enter Canadian province"
        style={{ backgroundColor: '#faf8f5', color: '#333333' }}
        className="w-full sm:w-1/4 px-4 py-2 rounded border border-gray-300 placeholder-gray-500"
      />
      <input
        type="text"
        defaultValue={city}
        onChange={(e) => handleCityChange(e.target.value)}
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
