type StripeDividerProps = {
  className?: string;
};

// Exact shapes and paint order from the client-provided bg.svg export:
// a wide black panel plus five contiguous (non-overlapping) diagonal
// color bands running left to right.
const LAYERS = [
  { points: "695,0 669,0 1111,1026 1137,1026", fill: "#c38428" },
  { points: "721,0 695,0 1137,1026 1163,1026", fill: "#e2b640" },
  { points: "668.94,0 642.94,0 1084.94,1026 1110.94,1026", fill: "#d83f10" },
  { points: "642.88,0 616.88,0 1058.88,1026 1084.88,1026", fill: "#8f120e" },
  { points: "0,0 0,1026 1033,1026 591,0", fill: "#000000" },
  { points: "617,0 591,0 1033,1026 1059,1026", fill: "#360f0d" },
];

export default function StripeDivider({ className }: StripeDividerProps) {
  return (
    <svg
      viewBox="0 0 1163 1026"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {LAYERS.map(({ points, fill }, i) => (
        <polygon key={i} points={points} fill={fill} />
      ))}
    </svg>
  );
}
