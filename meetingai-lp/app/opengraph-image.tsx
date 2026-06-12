import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MeetingAI - 会議の議事録・タスク抽出をAIで自動化";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1220 0%, #1A2440 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 36,
            color: "#8B7DF8",
            fontWeight: 700,
          }}
        >
          ● MeetingAI
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          会議が終わった瞬間、
          <br />
          議事録もタスクも、できている。
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#9FB0CC" }}>
          Zoom / Google Meet / Teams 対応のAI議事録サービス
        </div>
      </div>
    ),
    { ...size }
  );
}
