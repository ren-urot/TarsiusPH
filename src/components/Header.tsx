"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Explicit header height - the logo/nav's own box, left alone.
const HEADER_HEIGHT = "h-[5.28rem] sm:h-[5.96rem]";
// Backdrop is now shorter than the header on purpose (65% of it), so it
// only covers the top portion - the skirt starts where the backdrop
// itself ends, not where the header ends.
const BACKDROP_HEIGHT = "h-[3.432rem] sm:h-[3.874rem]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Solid backdrop - shorter than the header on purpose, covers only
          the top portion. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 ${BACKDROP_HEIGHT} bg-black transition-opacity duration-500 ${
          scrolled ? "opacity-80" : "opacity-0"
        }`}
      />
      {/* Fade skirt, starts exactly where the backdrop ends (not the
          header) and tapers to transparent on its own. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-[3.432rem] z-40 h-[4.5rem] bg-header-scrim transition-opacity duration-500 sm:top-[3.874rem] ${
          scrolled ? "opacity-80" : "opacity-0"
        }`}
      />
      <header className={`fixed inset-x-0 top-0 z-50 flex ${HEADER_HEIGHT} items-center justify-between px-6 sm:px-10 lg:px-16`}>
        <a href="#hero" aria-label="Tarsius home">
          <Image src="/hero/tarsius-logo.svg" alt="Tarsius" width={1612} height={1054} className="h-[5.1rem] w-auto sm:h-[5.95rem]" priority />
        </a>
        <nav className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white sm:text-sm">
          <a href="#about" className="transition-colors hover:text-gold">
            About
          </a>
          <a href="#nfc" className="transition-colors hover:text-gold">
            NFC Tech
          </a>
        </nav>
      </header>
    </>
  );
}
