export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <a href="#hero" className="font-display text-xl font-extrabold uppercase tracking-wide">
        Tarsius
      </a>
      <nav className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-light/70">
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
