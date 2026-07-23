type BallMarkProps = {
  className?: string;
};

const HOLES = [
  [50, 14], [72, 22], [86, 40], [90, 62], [82, 82], [64, 92],
  [42, 90], [22, 78], [12, 58], [14, 36], [28, 18], [50, 50],
  [66, 62], [36, 66], [58, 34],
];

export default function BallMark({ className }: BallMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ball-shade" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="70%" stopColor="#f5c65a" />
          <stop offset="100%" stopColor="#c9962c" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#ball-shade)" />
      {HOLES.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill="#8e1b13" fillOpacity="0.35" />
      ))}
    </svg>
  );
}
