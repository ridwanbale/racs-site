import { ImageResponse } from "next/og";

export const alt =
  "RACS — Risk-aware coordination for autonomous systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: 72,
          border: "1px solid #d9e2ec",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 64,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#0f766e",
              }}
            >
              RACS
            </div>
            <div
              style={{
                marginTop: 26,
                maxWidth: 700,
                fontSize: 64,
                lineHeight: 1.08,
                fontWeight: 700,
              }}
            >
              Risk-aware coordination for autonomous systems
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 26,
                color: "#475569",
              }}
            >
              Risk-Aware Coordination System
            </div>
          </div>

          <div
            style={{
              width: 310,
              height: 310,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #b8c4d0",
              background: "#ffffff",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 54,
                top: 84,
                width: 42,
                height: 42,
                border: "3px solid #334155",
                borderRadius: 42,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 70,
                top: 212,
                width: 42,
                height: 42,
                border: "3px solid #334155",
                borderRadius: 42,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 208,
                top: 148,
                width: 54,
                height: 54,
                border: "4px solid #0f766e",
                borderRadius: 54,
                background: "#ccfbf1",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 96,
                top: 105,
                width: 126,
                height: 2,
                background: "#0f766e",
                transform: "rotate(20deg)",
                transformOrigin: "left center",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 104,
                top: 221,
                width: 120,
                height: 2,
                background: "#0f766e",
                transform: "rotate(-28deg)",
                transformOrigin: "left center",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 126,
                top: 150,
                padding: "8px 12px",
                border: "1px solid #0f766e",
                background: "#ffffff",
                color: "#0f766e",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              RiskSignal
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
