import Reveal from "./Reveal";

const features = [
  {
    accent: "text-speaker bg-speaker-soft dark:bg-speaker/10",
    title: "自動文字起こし",
    body: "会議に参加するだけで、話者を識別しながらリアルタイムに文字起こし。日本語の専門用語や社内用語も学習し、精度が向上し続けます。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19v3M8 22h8M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4Z" />
        <path d="M19 11a7 7 0 0 1-14 0" />
      </svg>
    ),
  },
  {
    accent: "text-voice bg-voice-soft dark:bg-voice/10",
    title: "AI要約",
    body: "1時間の会議を、決定事項・論点・次のアクションに整理した数百字の要約に。会議終了から数十秒で読める形になります。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3Z" />
        <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      </svg>
    ),
  },
  {
    accent: "text-task bg-task-soft dark:bg-task/10",
    title: "タスク抽出",
    body: "「〜までにやります」「お願いします」という発話から、担当者・期限つきのタスクを自動抽出。漏れのないToDoリストが残ります。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3 8-8" />
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
      </svg>
    ),
  },
  {
    accent: "text-speaker bg-speaker-soft dark:bg-speaker/10",
    title: "Slack連携",
    body: "会議が終わると、要約とタスクが指定チャンネルへ自動投稿。欠席者も数分でキャッチアップでき、共有作業はゼロになります。",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-3.7-.8L3 21l1.9-5.6a8.3 8.3 0 0 1-.9-3.9A8.4 8.4 0 0 1 12.5 3a8.4 8.4 0 0 1 8.5 8.5Z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <Reveal>
        <p className="eyebrow">
          <span aria-hidden>00:15</span> 機能
        </p>
        <h2 className="heading">録音から共有まで、すべて自動。</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          MeetingAIはZoom・Google Meet・Teamsの会議に同席し、終了と同時に成果物を届けます。
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <div className="card h-full">
              <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${f.accent}`} aria-hidden>
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
