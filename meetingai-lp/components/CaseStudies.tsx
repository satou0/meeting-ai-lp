import Reveal from "./Reveal";

const cases = [
  {
    company: "株式会社ノースリンク",
    industry: "ITコンサルティング / 従業員120名",
    quote:
      "週40件の顧客会議の議事録工数が月80時間からほぼゼロに。コンサルタントが提案準備に使える時間が明確に増えました。",
    person: "PMO室長",
    metrics: [
      { value: "月80時間", label: "議事録工数を削減" },
      { value: "1.4倍", label: "提案資料の作成数" },
    ],
  },
  {
    company: "ハルタ製作所株式会社",
    industry: "製造業 / 従業員300名",
    quote:
      "拠点間の定例会議でタスクの認識ずれが頻発していましたが、自動抽出されたタスクリストが共通言語になり、手戻りが激減しました。",
    person: "生産管理部 部長",
    metrics: [
      { value: "-92%", label: "タスク漏れ起因の手戻り" },
      { value: "翌日→数分", label: "議事録の共有リードタイム" },
    ],
  },
  {
    company: "株式会社セイルワークス",
    industry: "SaaS営業支援 / 従業員45名",
    quote:
      "商談直後に要約がSlackへ届くので、マネージャーが全商談を当日中にレビューできるように。受注率の改善に直結しています。",
    person: "セールスマネージャー",
    metrics: [
      { value: "+18%", label: "商談の受注率" },
      { value: "100%", label: "商談記録のCRM反映率" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="section">
      <Reveal>
        <p className="eyebrow">
          <span aria-hidden>00:42</span> 導入実績
        </p>
        <h2 className="heading">業種を問わず、成果が出ています。</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.company} delay={i * 120}>
            <article className="card flex h-full flex-col">
              <header>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{c.company}</h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{c.industry}</p>
              </header>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                「{c.quote}」
              </blockquote>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">— {c.person}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5 dark:border-ink-line">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="order-2 text-xs text-slate-500 dark:text-slate-400">{m.label}</dt>
                    <dd className="font-display text-xl font-extrabold text-voice">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
