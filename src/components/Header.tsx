import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
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
  );
}
