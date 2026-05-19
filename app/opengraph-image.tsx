import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "بديع — مبدعون بلا حدود";
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
            fontSize: 36,
            color: "#22d3ee",
            letterSpacing: 4,
            marginBottom: 20,
          }}
        >
          BADEE PROGRAM
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            lineHeight: 1,
            background:
              "linear-gradient(90deg, #22d3ee 0%, #4a6cf7 50%, #facc15 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          بديع
        </div>
        <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 30 }}>
          مبدعون بلا حدود
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a3aed0",
            maxWidth: 900,
          }}
        >
          برنامج تعليم الذكاء الاصطناعي للمراهقين 12–18 سنة
        </div>
      </div>
    ),
    size,
  );
}
