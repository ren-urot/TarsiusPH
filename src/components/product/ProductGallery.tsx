"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PaddleMark from "@/components/PaddleMark";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

function Frame({ src, alt, priority, sizes }: { src?: string; alt: string; priority?: boolean; sizes: string }) {
  const [broken, setBroken] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The <img> is server-rendered, so on a fast failure (e.g. a 404 to
  // localhost) the browser can finish loading it before React hydrates
  // and attaches onError — the native error event fires too early to be
  // caught. Checking `complete && naturalWidth === 0` right after mount
  // catches that case; onError below still covers failures after hydration.
  // (Frame is remounted via `key={src}` in the parent when src changes,
  // so `broken` always starts fresh for a new image.)
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setBroken(true);
    }
  }, []);

  if (!src || broken) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-graphite">
        <PaddleMark className="h-2/3 w-2/3 opacity-70" />
      </div>
    );
  }

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      onError={() => setBroken(true)}
    />
  );
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const shots = images.length > 0 ? images : [undefined];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-graphite bg-carbon">
        <Frame
          key={shots[active] ?? active}
          src={shots[active]}
          alt={`${productName}, view ${active + 1}`}
          priority
          sizes="(max-width: 1024px) 100vw, 544px"
        />
      </div>

      {shots.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {shots.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-colors ${
                active === i ? "border-gold" : "border-graphite hover:border-victory/50"
              }`}
              aria-label={`Show view ${i + 1}`}
              aria-pressed={active === i}
            >
              <Frame src={src} alt={`${productName} thumbnail ${i + 1}`} sizes="140px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
