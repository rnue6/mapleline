"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.isDark ?? false;

  const handleContact = () => {
    alert("Contact clicked!");
  };

  const headerBg =  "rgba(240, 220, 200, 0.95)";
  const textColor = "text-black";

  return (
    <header
      className="shadow-md"
      style={{ backgroundColor: headerBg }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <HeaderMenu />
        <nav className="flex gap-3">
          <Link href="/" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
            Home
          </Link>
          <Link href="/about" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
            About
          </Link>
          <button onClick={handleContact} className={`px-4 py-2 bg-white/10 font-medium rounded hover:bg-white/20 transition-colors ${textColor}`}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
