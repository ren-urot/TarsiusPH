type PaddleMarkProps = {
  className?: string;
};

/**
 * Abstract paddle silhouette used in the hero and NFC section:
 * a vector mark rather than stock photography, so it stays crisp,
 * on-brand, and animatable.
 */
export default function PaddleMark({ className }: PaddleMarkProps) {
  return (
    <svg viewBox="0 0 320 520" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="paddle-face" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#8e1b13" />
          <stop offset="35%" stopColor="#d3321f" />
          <stop offset="65%" stopColor="#f25a1f" />
          <stop offset="100%" stopColor="#c9962c" />
        </linearGradient>
        <linearGradient id="paddle-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paddle-handle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
      </defs>

      <rect x="140" y="360" width="40" height="150" rx="18" fill="url(#paddle-handle)" />
      <rect x="152" y="500" width="16" height="16" rx="4" fill="#c9962c" />

      <path
        d="M160 8C246 8 300 78 300 190C300 306 246 388 160 388C74 388 20 306 20 190C20 78 74 8 160 8Z"
        fill="url(#paddle-face)"
      />
      <path
        d="M160 8C246 8 300 78 300 190C300 306 246 388 160 388C74 388 20 306 20 190C20 78 74 8 160 8Z"
        fill="url(#paddle-sheen)"
      />
      <path
        d="M160 8C246 8 300 78 300 190C300 306 246 388 160 388C74 388 20 306 20 190C20 78 74 8 160 8Z"
        stroke="#f5c65a"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
    </svg>
  );
}
