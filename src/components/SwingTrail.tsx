type SwingTrailProps = {
  className?: string;
  id?: string;
};

/**
 * The brand's signature mark: the arc a paddle traces mid-swing.
 * Reused across the hero, section dividers, and the NFC scan animation
 * so the same gesture reads consistently everywhere.
 */
export default function SwingTrail({ className, id = "swing" }: SwingTrailProps) {
  const gradientId = `${id}-gradient`;

  return (
    <svg
      viewBox="0 0 1200 400"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8e1b13" />
          <stop offset="28%" stopColor="#d3321f" />
          <stop offset="52%" stopColor="#f25a1f" />
          <stop offset="76%" stopColor="#c9962c" />
          <stop offset="100%" stopColor="#f5c65a" />
        </linearGradient>
      </defs>
      <path
        d="M-40 340C220 340 260 60 520 60C780 60 800 260 1060 260C1180 260 1220 180 1260 140"
        stroke={`url(#${gradientId})`}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
