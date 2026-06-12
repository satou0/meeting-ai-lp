import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, M_PLUS_1, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const body = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = M_PLUS_1({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://meeting-ai-lp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MeetingAI | 会議の議事録・タスク抽出をAIで自動化",
    template: "%s | MeetingAI",
  },
  description:
    "MeetingAIはZoom・Google Meet・Teamsの会議を自動で文字起こしし、AIが要約・タスク抽出・議事録作成まで行うSaaSです。議事録作成の時間を80%削減。無料トライアル実施中。",
  keywords: [
    "議事録 自動作成",
    "AI 文字起こし",
    "会議 要約",
    "タスク抽出",
    "Zoom 議事録",
    "Google Meet 文字起こし",
    "Teams 議事録",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "MeetingAI",
    title: "MeetingAI | 会議の議事録・タスク抽出をAIで自動化",
    description:
      "Zoom・Google Meet・Teamsの会議をAIが文字起こし・要約・タスク抽出。議事録作成の時間を80%削減します。",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetingAI | 会議の議事録・タスク抽出をAIで自動化",
    description:
      "会議をAIが文字起こし・要約・タスク抽出。議事録作成の時間を80%削減。",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "MeetingAI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Zoom・Google Meet・Teamsの会議を自動で文字起こしし、AIが要約・タスク抽出・議事録作成を行うサービス。",
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "対応している会議ツールは何ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zoom、Google Meet、Microsoft Teamsに対応しています。",
          },
        },
        {
          "@type": "Question",
          name: "無料トライアルに料金は発生しますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "14日間の無料トライアル中は料金が発生せず、クレジットカードの登録も不要です。",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${body.variable} ${display.variable} ${mono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
