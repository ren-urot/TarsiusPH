import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          background: "#121212",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f5c65a",
            marginBottom: 28,
          }}
        >
          Tap. Verify. Play.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 190,
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(90deg, #8e1b13 0%, #d3321f 28%, #f25a1f 52%, #c9962c 76%, #f5c65a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          TARSIUS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(245,245,245,0.8)",
            marginTop: 32,
            maxWidth: 820,
          }}
        >
          Paddles engineered for competitive speed, sealed with an NFC chip so every swing is provably yours.
        </div>
      </div>
    ),
    { ...size }
  );
}
