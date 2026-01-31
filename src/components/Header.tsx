"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HeaderMenu from "./HeaderMenu";
import logoSrc from "../img/maplelinelogo.png";

export default function Header() {
  const themeContext = useContext(ThemeContext);

  const headerBg = "rgba(240, 220, 200, 0.95)";
  const textColor = "text-black";

  return (
    <header className="shadow-md" style={{ backgroundColor: headerBg }}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <HeaderMenu />
          <nav className="hidden sm:flex gap-3">
            <Link href="/" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
              Home
            </Link>
            <Link href="/about" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
              About
            </Link>
            <Link href="/contact" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
              Contact Us
            </Link>
            <Link href="/our-mission" className={`px-4 py-2 bg-white/20 font-medium rounded hover:bg-white/30 transition-colors ${textColor}`}>
              Our Mission
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Image src={logoSrc} alt="MapleLine logo" width={56} height={56} className="rounded" />
        </div>
      </div>
    </header>
  );
}
