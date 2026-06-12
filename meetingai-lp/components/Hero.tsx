import Reveal from "./Reveal";
import TranscriptDemo from "./TranscriptDemo";

export default function Hero() {
  return (
    <section id="top" className="section grid items-center gap-12 md:grid-cols-2 md:gap-8">
      <div>
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden>00:00</span> ZOOM / GOOGLE MEET / TEAMS 対応
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            会議が終わった瞬間、
            <br />
            議事録も<span className="text-task">タスク</span>も、
            <br />
            できている。
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            MeetingAIは会議を自動で文字起こしし、AIが要約・タスク抽出・議事録作成まで完了。
            あなたは会議に集中するだけ。終了後の作業はゼロになります。
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="btn-primary">
              14日間 無料で試す
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#features" className="btn-secondary">
              機能を見る
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
            クレジットカード不要 / 1分でセットアップ完了
          </p>
        </Reveal>
      </div>

      <Reveal delay={200} className="justify-self-center md:justify-self-end">
        <TranscriptDemo />
      </Reveal>
    </section>
  );
}
