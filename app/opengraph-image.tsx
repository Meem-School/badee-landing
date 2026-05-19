import { ImageResponse } from "next/og";

export const alt = "بديع | Badee Program — مبدعون بلا حدود";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at top, #1c3aa8 0%, #050d29 60%, #020616 100%)",
          color: "white",
          fontFamily: "system-ui",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: 32,
            background: "linear-gradient(135deg, #4a6cf7, #22d3ee)",
            marginBottom: 30,
            fontSize: 96,
            fontWeight: 900,
            color: "white",
            boxShadow: "0 30px 60px rgba(74,108,247,0.5)",
          }}
        >
          B
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#22d3ee",
            letterSpacing: 8,
            marginBottom: 16,
            fontWeight: 700,
          }}
        >
          BADEE PROGRAM
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.1,
            background:
              "linear-gradient(90deg, #22d3ee 0%, #4a6cf7 50%, #facc15 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          Creators Without Limits
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a3aed0",
            maxWidth: 900,
          }}
        >
          AI program for teens — 12 to 18
        </div>
      </div>
    ),
    size,
  );
}
