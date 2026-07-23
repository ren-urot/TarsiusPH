type SealProps = {
  className?: string;
  label?: string;
};

/**
 * The authenticity seal: the visual promise that ties the brand mark to
 * the NFC verification story. Appears in the hero corner, the NFC section,
 * and (stamped literally) on every verified product page.
 */
export default function Seal({ className, label = "AUTHENTIC" }: SealProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="seal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9962c" />
          <stop offset="100%" stopColor="#f5c65a" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#seal-gradient)" strokeWidth="2" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="url(#seal-gradient)" strokeWidth="1" strokeDasharray="2 4" />
      <text
        x="60"
        y="42"
        textAnchor="middle"
        fontSize="7.5"
        letterSpacing="2"
        fill="url(#seal-gradient)"
        className="font-mono"
      >
        TARSIUS
      </text>
      <path
        d="M42 60l12 12 24-26"
        fill="none"
        stroke="url(#seal-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fontSize="6.5"
        letterSpacing="2.5"
        fill="url(#seal-gradient)"
        className="font-mono"
      >
        {label}
      </text>
    </svg>
  );
}
