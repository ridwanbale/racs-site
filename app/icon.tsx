import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1120",
          color: "#ccfbf1",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "Arial, Helvetica, sans-serif",
          border: "5px solid #0f766e",
        }}
      >
        R
      </div>
    ),
    size,
  );
}
