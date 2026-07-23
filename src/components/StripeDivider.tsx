type StripeDividerProps = {
  className?: string;
};

// Exact path data and paint order from the Figma export: six diagonal
// panels sharing one edge, each shifted right and stacked so a thin sliver
// of every color (gold through black) shows between the one above it.
const LAYERS = [
  { d: "M1161 1026L719 0H121V1026H1161Z", fill: "#e2b640" },
  { d: "M1135 1026L693 0H95V1026H1135Z", fill: "#c38428" },
  { d: "M1109 1026L667 0H69V1026H1109Z", fill: "#d83f10" },
  { d: "M1084 1026L642 0H44V1026H1084Z", fill: "#8f120e" },
  { d: "M1061 1026L619 0H21V1026H1061Z", fill: "#360f0d" },
  { d: "M1038 1026L596 0H-2V1026H1038Z", fill: "#000000" },
];

export default function StripeDivider({ className }: StripeDividerProps) {
  return (
    <svg
      viewBox="0 0 1920 1026"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      // Translucent so a hint of the photo shows through every panel
      // (stripes included) instead of flat, fully opaque color.
      fillOpacity={0.8}
    >
      {LAYERS.map(({ d, fill }) => (
        <path key={fill} d={d} fill={fill} />
      ))}
    </svg>
  );
}
