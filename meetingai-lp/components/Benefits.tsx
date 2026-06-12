import Reveal from "./Reveal";

const benefits = [
  {
    stat: "80%",
    label: "議事録作成の時間を削減",
    body: "1時間の会議につき約45分かかっていた議事録作成が、確認だけの数分に。週10件の会議なら、毎週ほぼ1営業日が戻ってきます。",
    color: "text-voice",
  },
  {
    stat: "0件",
    label: "タスク漏れを防止",
    body: "決定事項とタスクはすべて自動で記録・通知。「言った／言わない」「聞いていない」がなくなり、プロジェクトの遅延要因を断ちます。",
    color: "text-task",
  },
  {
    stat: "数分",
    label: "情報共有が完了するまで",
    body: "会議終了から数分で、要約がチーム全員のSlackに到着。欠席者の口頭フォローや議事録の清書待ちは、もう必要ありません。",
    color: "text-speaker",
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-slate-200 bg-white dark:border-ink-line dark:bg-ink-card/40">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden>00:30</span> 導入メリット
          </p>
          <h2 className="heading">数字で変わる、会議のあと。</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 120}>
              <div className="card h-full">
                <p className={`font-display text-5xl font-extrabold tracking-tight ${b.color}`}>{b.stat}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900 dark:text-white">{b.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
