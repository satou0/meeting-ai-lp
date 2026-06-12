"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#problems", label: "課題" },
  { href: "#features", label: "機能" },
  { href: "#cases", label: "導入実績" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-paper/80 backdrop-blur dark:border-ink-line/70 dark:bg-ink/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold text-slate-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-voice text-sm text-white">M</span>
          MeetingAI
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-voice dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#cta" className="btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex">
            無料で試す
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-ink-line dark:text-slate-300 md:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-paper px-5 py-4 dark:border-ink-line dark:bg-ink md:hidden" aria-label="モバイルナビゲーション">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#cta" onClick={() => setOpen(false)} className="btn-primary w-full">
                無料で試す
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
