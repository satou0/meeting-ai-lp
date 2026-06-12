export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-ink-line dark:bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="flex items-center gap-2 font-display text-sm font-bold text-slate-900 dark:text-white">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-voice text-[11px] text-white">M</span>
          MeetingAI
        </p>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <li><a href="#features" className="hover:text-voice">機能</a></li>
            <li><a href="#pricing" className="hover:text-voice">料金</a></li>
            <li><a href="#faq" className="hover:text-voice">FAQ</a></li>
            <li><a href="#" className="hover:text-voice">利用規約</a></li>
            <li><a href="#" className="hover:text-voice">プライバシーポリシー</a></li>
          </ul>
        </nav>
        <p className="font-mono text-xs text-slate-400 dark:text-slate-500">© 2026 MeetingAI Inc.</p>
      </div>
    </footer>
  );
}
