"use client";

import { useEffect, useState } from "react";

type Line = {
  time: string;
  speaker: string;
  color: "speaker" | "voice";
  text: string;
};

const lines: Line[] = [
  { time: "00:12", speaker: "佐藤", color: "speaker", text: "新機能のリリースは来週金曜で確定しましょう。" },
  { time: "00:24", speaker: "田中", color: "speaker", text: "了解です。告知用の資料は私が水曜までに作ります。" },
  { time: "00:38", speaker: "鈴木", color: "speaker", text: "ではQAチェックリストの更新はこちらで対応します。" },
];

const tasks = [
  { owner: "田中", text: "告知資料を作成（〜水曜）" },
  { owner: "鈴木", text: "QAチェックリストを更新" },
];

/**
 * ヒーローの右側に置く「ライブ文字起こし」デモ。
 * 発話が順に流れ、最後にAIがタスクを抽出する様子を再現する。
 * prefers-reduced-motion の場合は最初から全て表示する。
 */
export default function TranscriptDemo() {
  const [step, setStep] = useState(0);
  const totalSteps = lines.length + tasks.length + 1; // +1 = 要約バッジ

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(totalSteps);
      return;
    }
    if (step >= totalSteps) {
      // 一巡したら少し待ってループ
      const t = setTimeout(() => setStep(0), 4500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 600 : 1100);
    return () => clearTimeout(t);
  }, [step, totalSteps]);

  return (
    <div className="card relative w-full max-w-md font-mono text-sm" aria-label="MeetingAIの文字起こしデモ">
      {/* ヘッダー */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3 dark:border-ink-line">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-task opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-task" />
          </span>
          REC 週次プロダクト定例
        </div>
        {/* 音声波形 */}
        <div className="flex h-4 items-end gap-0.5" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-0.5 animate-wave rounded-full bg-speaker"
              style={{ height: "100%", animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* 文字起こし行 */}
      <ul className="min-h-[170px] space-y-3">
        {lines.map((line, i) => (
          <li
            key={line.time}
            className={`flex gap-3 transition-opacity duration-500 ${step > i ? "opacity-100" : "opacity-0"}`}
          >
            <span className="shrink-0 text-xs text-slate-400">{line.time}</span>
            <p className="text-slate-700 dark:text-slate-200">
              <span className="mr-2 font-medium text-speaker">{line.speaker}</span>
              {line.text}
            </p>
          </li>
        ))}
        {step > 0 && step <= lines.length && (
          <li className="flex gap-3" aria-hidden>
            <span className="shrink-0 text-xs text-slate-400">--:--</span>
            <span className="h-4 w-2 animate-caret-blink bg-speaker/70" />
          </li>
        )}
      </ul>

      {/* AI抽出結果 */}
      <div className="mt-4 border-t border-dashed border-slate-200 pt-4 dark:border-ink-line">
        <p
          className={`mb-2 inline-flex items-center gap-1.5 rounded-md bg-voice-soft px-2 py-1 text-xs font-medium text-voice transition-opacity duration-500 dark:bg-voice/15 ${
            step > lines.length ? "opacity-100" : "opacity-0"
          }`}
        >
          ✦ AIがタスクを抽出しました
        </p>
        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li
              key={task.text}
              className={`flex items-center gap-2 rounded-lg bg-task-soft px-3 py-2 text-xs text-slate-700 transition-all duration-500 dark:bg-task/10 dark:text-slate-200 ${
                step > lines.length + 1 + i ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded border border-task text-[9px] text-task">✓</span>
              <span className="font-medium text-task">{task.owner}</span>
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
