# MeetingAI ランディングページ

Zoom・Google Meet・Teamsの会議をAIが文字起こし・要約・タスク抽出する架空SaaS「MeetingAI」のLP。

## 技術スタック

- Next.js 14（App Router）
- TypeScript
- Tailwind CSS 3
- next-themes（ダークモード）
- next/og（OGP画像の動的生成）

## ディレクトリ構成

```
meetingai-lp/
├── app/
│   ├── layout.tsx            # メタデータ（SEO/OGP）・フォント・テーマ・JSON-LD
│   ├── page.tsx              # セクション組み立て
│   ├── opengraph-image.tsx   # OGP画像（next/ogで動的生成）
│   └── globals.css           # ベーススタイル・共通クラス・reduced-motion対応
├── components/
│   ├── Header.tsx            # 固定ヘッダー・モバイルメニュー
│   ├── ThemeToggle.tsx       # ダーク/ライト切り替え
│   ├── Reveal.tsx            # IntersectionObserverによるスクロールアニメーション
│   ├── Hero.tsx              # ファーストビュー
│   ├── TranscriptDemo.tsx    # シグネチャ要素：ライブ文字起こしデモ
│   ├── Problems.tsx          # 課題提起
│   ├── Features.tsx          # サービス紹介（4機能）
│   ├── Benefits.tsx          # 利用メリット（数値）
│   ├── CaseStudies.tsx       # 導入実績（架空3社）
│   ├── Pricing.tsx           # 料金プラン（Free/Standard/Business）
│   ├── Faq.tsx               # FAQ（detailsアコーディオン）
│   ├── CtaForm.tsx           # 無料トライアル登録フォーム
│   └── Footer.tsx
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## セットアップ

```bash
npm install
npm run dev
# http://localhost:3000
```

## 本番ビルド

```bash
npm run build
npm run start
```

## デプロイ手順（Vercel 推奨）

1. リポジトリをGitHubへpush
2. https://vercel.com で「Add New Project」→ リポジトリを選択
3. Framework Preset は自動で Next.js が選択される。設定変更不要でDeploy
4. デプロイ後、`app/layout.tsx` の `siteUrl` を本番ドメインに変更して再デプロイ
   （canonical / OGPのURLが正しくなる）

### その他のホスティング

- Cloudflare Pages / AWS Amplify: Next.js プリセットでそのまま動作
- セルフホスト: `npm run build && npm run start` をNode 18+環境で実行

## 実装メモ

- **フォーム送信**: `CtaForm.tsx` はデモとして擬似送信。実運用では `/api/trial`
  などのRoute Handlerを作成し、`fetch` のコメントアウトを差し替える
- **OGP画像**: `app/opengraph-image.tsx` がビルド時に1200x630のPNGを生成
- **アクセシビリティ**: キーボードフォーカスリング、`prefers-reduced-motion`
  尊重、セマンティックHTML（details/summary、dl、blockquote）対応済み
