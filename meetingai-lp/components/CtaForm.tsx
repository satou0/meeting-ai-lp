"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "done";

export default function CtaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    if (!name) {
      setError("お名前を入力してください。");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("メールアドレスの形式を確認してください。");
      return;
    }

    setStatus("submitting");
    try {
      // 本番では自社APIエンドポイントに置き換える
      // await fetch("/api/trial", { method: "POST", body: JSON.stringify({ name, email, company }) });
      await new Promise((r) => setTimeout(r, 800));
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <section
      id="cta"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-voice-soft/60 dark:border-ink-line dark:from-ink dark:to-voice/10"
    >
      <div className="section">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow justify-center">
              <span aria-hidden>01:00</span> 会議、終了。
            </p>
            <h2 className="heading">
              次の会議から、
              <br className="sm:hidden" />
              議事録はAIに任せましょう。
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              14日間すべての機能を無料で利用できます。クレジットカードは不要です。
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card mx-auto mt-10 max-w-xl">
            {status === "done" ? (
              <div className="py-6 text-center" role="status">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-task-soft text-task dark:bg-task/15" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                  登録を受け付けました
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  入力いただいたメールアドレスに、トライアル開始の案内を送信しました。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      お名前 <span className="text-voice">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="山田 太郎"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-ink-line dark:bg-ink dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      会社名
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="株式会社サンプル"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-ink-line dark:bg-ink dark:text-white"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    勤務先メールアドレス <span className="text-voice">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="taro.yamada@example.co.jp"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-ink-line dark:bg-ink dark:text-white"
                  />
                </div>

                {error && (
                  <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "送信中..." : "無料トライアルを開始する"}
                </button>
                <p className="mt-3 text-center font-mono text-xs text-slate-500 dark:text-slate-400">
                  登録は1分で完了 / いつでも解約可能
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
