import Reveal from "./Reveal";

const plans = [
  {
    name: "Free",
    price: "¥0",
    unit: "/ 月",
    description: "個人でまず試したい方に",
    features: ["月5回までの会議に対応", "自動文字起こし", "AI要約（基本）", "履歴保存30日"],
    cta: "無料で始める",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "¥1,480",
    unit: "/ ユーザー / 月",
    description: "チームの会議をすべて任せたい方に",
    features: [
      "会議回数 無制限",
      "自動文字起こし（話者識別つき）",
      "AI要約 + タスク抽出",
      "Slack連携",
      "履歴保存 無制限",
    ],
    cta: "14日間 無料で試す",
    highlighted: true,
  },
  {
    name: "Business",
    price: "¥2,980",
    unit: "/ ユーザー / 月",
    description: "全社導入・セキュリティ要件のある企業に",
    features: [
      "Standardの全機能",
      "SSO / SAML対応",
      "監査ログ・権限管理",
      "API・CRM連携",
      "専任サポート",
    ],
    cta: "営業に相談する",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-slate-200 bg-white dark:border-ink-line dark:bg-ink-card/40">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden>00:50</span> 料金プラン
          </p>
          <h2 className="heading">チームの規模に合わせて、シンプルに。</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            すべてのプランで14日間の無料トライアルが利用できます。
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`card relative h-full ${
                  plan.highlighted ? "border-voice ring-2 ring-voice dark:border-voice" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-voice px-3 py-1 font-mono text-[11px] font-medium text-white">
                    人気プラン
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
                <p className="mt-5">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-1 font-mono text-xs text-slate-500 dark:text-slate-400">{plan.unit}</span>
                </p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg className="mt-0.5 shrink-0 text-task" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`${plan.highlighted ? "btn-primary" : "btn-secondary"} mt-8 w-full !text-sm`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
