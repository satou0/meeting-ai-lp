import Reveal from "./Reveal";

const problems = [
  {
    title: "議事録作成に時間を奪われる",
    body: "1時間の会議のあと、録音を聞き直し、まとめ直し。気づけば30分〜1時間が消えています。本来の業務に使うべき時間です。",
  },
  {
    title: "「誰がやるんだっけ？」のタスク漏れ",
    body: "口頭で決まったタスクは記録されず、担当も期限も曖昧なまま。次の会議で「あれ、進んでない」が繰り返されます。",
  },
  {
    title: "欠席者への共有が遅い・伝わらない",
    body: "議事録の完成を待ってからの共有では遅すぎる。要点が長文に埋もれ、読まれないまま意思決定が止まります。",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="border-y border-slate-200 bg-white dark:border-ink-line dark:bg-ink-card/40">
      <div className="section">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden>00:05</span> 課題
          </p>
          <h2 className="heading">
            会議のあとに、<br className="sm:hidden" />
            もうひとつの「仕事」が始まっていませんか。
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="card h-full">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-ink dark:text-slate-400" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
