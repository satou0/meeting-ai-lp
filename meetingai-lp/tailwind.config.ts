import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ベース
        ink: {
          DEFAULT: "#0B1220", // ダーク背景
          card: "#121B30", // ダークカード
          line: "#1E2A45", // ダーク罫線
        },
        paper: "#F7F9FC", // ライト背景
        // セマンティックアクセント（文字起こしUIの色をLP全体で再利用）
        voice: {
          DEFAULT: "#6D5DF6", // AI・要約 = バイオレット
          soft: "#EDEBFE",
        },
        speaker: {
          DEFAULT: "#0EA5C6", // 発話・文字起こし = シアン
          soft: "#E0F6FB",
        },
        task: {
          DEFAULT: "#0E9F6E", // タスク = グリーン
          soft: "#E3F5EE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "caret-blink": "caret-blink 1s steps(1) infinite",
        wave: "wave 1.1s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 12px 32px -12px rgba(11,18,32,0.12)",
        "card-dark": "0 1px 0 rgba(255,255,255,0.04) inset, 0 16px 40px -16px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
