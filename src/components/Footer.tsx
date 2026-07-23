import Image from "next/image";

const socials = [
  { label: "Instagram", href: "https://instagram.com/tarsius.ph" },
  { label: "TikTok", href: "https://tiktok.com/@tarsius.ph" },
  { label: "YouTube", href: "https://youtube.com/@tarsius.ph" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-graphite bg-carbon px-6 pt-16 pb-8 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-signature" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 sm:flex-row sm:justify-between">
        <div>
          <Image src="/hero/tarsius-logo.svg" alt="Tarsius" width={1612} height={1054} className="h-[4.675rem] w-auto" />
          <p className="mt-3 max-w-xs text-sm text-light/60">
            Premium pickleball paddles, engineered in the Philippines and sealed
            with an NFC authenticity chip in every one.
          </p>
        </div>

        <div className="flex flex-col gap-1 font-mono text-sm text-light/70">
          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Contact</span>
          <a href="mailto:tarsius.ph@gmail.com" className="w-fit transition-colors hover:text-victory">
            tarsius.ph@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-1 font-mono text-sm text-light/70">
          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">Follow</span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-fit transition-colors hover:text-victory"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl border-t border-graphite pt-6 text-center text-xs text-light/45">
        <span>© {new Date().getFullYear()} Tarsius. All rights reserved.</span>
      </div>
    </footer>
  );
}
