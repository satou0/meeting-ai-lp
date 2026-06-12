import Reveal from "./Reveal";

const faqs = [
  {
    q: "対応している会議ツールは何ですか？",
    a: "Zoom、Google Meet、Microsoft Teamsに対応しています。カレンダーと連携すると、MeetingAIが予定された会議に自動で参加します。",
  },
  {
    q: "無料トライアルに料金は発生しますか？",
    a: "発生しません。14日間すべての機能を無料で利用でき、クレジットカードの登録も不要です。期間終了後に自動課金されることはありません。",
  },
  {
    q: "日本語の文字起こし精度はどの程度ですか？",
    a: "一般的なビジネス会議で高い精度を実現しており、辞書登録によって社名・製品名・専門用語の認識精度をさらに高められます。",
  },
  {
    q: "セキュリティ対策はどうなっていますか？",
    a: "通信・保存データはすべて暗号化され、会議データはお客様の組織のみがアクセスできます。Businessプランでは SSO・監査ログ・データ保持ポリシーの設定にも対応します。",
  },
  {
    q: "Slack以外のツールとも連携できますか？",
    a: "Businessプランでは API を提供しており、Notion・各種CRM・社内システムなどへの連携を構築できます。標準連携も順次拡充しています。",
  },
  {
    q: "導入までにどのくらい時間がかかりますか？",
    a: "アカウント作成からカレンダー連携まで約1分です。当日の会議からすぐに利用を開始できます。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section">
      <Reveal>
        <p className="eyebrow">
          <span aria-hidden>00:55</span> FAQ
        </p>
        <h2 className="heading">よくある質問</h2>
      </Reveal>

      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <details className="group card !p-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-slate-900 marker:hidden dark:text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-45"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
