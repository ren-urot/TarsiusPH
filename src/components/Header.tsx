"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/95 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <a href="#hero" aria-label="Tarsius home" className="relative">
        <Image src="/hero/tarsius-logo.svg" alt="Tarsius" width={1612} height={1054} className="h-[5.1rem] w-auto sm:h-[5.95rem]" priority />
      </a>
      <nav className="relative flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white sm:text-sm">
        <a href="#about" className="transition-colors hover:text-gold">
          About
        </a>
        <a href="#nfc" className="transition-colors hover:text-gold">
          NFC Tech
        </a>
      </nav>
    </header>
  );
}
