"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Explicit header height, shared with the backdrop/skirt below so they
// always stay in sync - editing this one value resizes all three.
const HEADER_HEIGHT = "h-[5.28rem] sm:h-[5.96rem]";

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
      {/* Solid backdrop, sized to exactly match the header's own box - full
          coverage behind the logo/nav, no fading in that zone at all. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 ${HEADER_HEIGHT} bg-black transition-opacity duration-500 ${
          scrolled ? "opacity-80" : "opacity-0"
        }`}
      />
      {/* Fade skirt, starts exactly where the header ends and tapers to
          transparent on its own - decoupled from the header's box, so it
          has room to ease out smoothly instead of a hard cutoff. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-[5.28rem] z-40 h-[4.5rem] bg-header-scrim transition-opacity duration-500 sm:top-[5.96rem] ${
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
