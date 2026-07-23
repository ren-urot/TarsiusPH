type StripeDividerProps = {
  className?: string;
};

// Bottom-to-top paint order: each layer's offset peeks out as a thin sliver
// beyond the edge of the layer stacked on top of it, producing the stepped
// diagonal bevel between the hero's dark panel and its photo.
const LAYERS = [
  { offset: 123, fill: "#e2b640" },
  { offset: 97, fill: "#c38428" },
  { offset: 71, fill: "#d83f10" },
  { offset: 46, fill: "#8f120e" },
  { offset: 23, fill: "#360f0d" },
  { offset: 0, fill: "#000000" },
];

const SHAPE = "M1040 1026L598 0H0V1026H1040Z";

export default function StripeDivider({ className }: StripeDividerProps) {
  return (
    <svg
      viewBox="0 0 1163 1026"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {LAYERS.map(({ offset, fill }) => (
        <path key={offset} d={SHAPE} fill={fill} transform={`translate(${offset}, 0)`} />
      ))}
    </svg>
  );
}
