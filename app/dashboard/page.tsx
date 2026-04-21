"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-white font-sans antialiased overflow-x-hidden flex flex-col">

      {/* ── Grid texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,139,253,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,139,253,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <header className="relative z-10 border-b border-white/[0.06] backdrop-blur-xl bg-[#050d1a]/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg
                         bg-gradient-to-br from-[#388bfd] to-[#1a56db]
                         shadow-[0_0_16px_rgba(56,139,253,0.5)]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L15.5 5.25V12.75L9 16.5L2.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.4" />
                <circle cx="9" cy="9" r="2.2" fill="white" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Agentic<span className="text-[#388bfd]">AI</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/60">
            <Link href="/dashboard" className="hover:text-white transition-colors">Дашборд</Link>
            <Link href="/orders" className="hover:text-white transition-colors">Заказы</Link>
            <Link href="/settings" className="hover:text-white transition-colors">Настройки</Link>
          </nav>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#388bfd] to-[#1a56db] flex items-center justify-center text-sm font-semibold">
              А
            </div>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="relative z-10 flex-1 px-5 sm:px-8 py-10">
        <div className="mx-auto max-w-6xl">

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ── Risks ── */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold mb-5">Текущие риски</h2>

              <ul className="space-y-4 text-sm">
                {[
                  "Фанера закончится через 3 дня",
                  "Заказ №456 под угрозой",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Production ── */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold mb-5">Статус производства</h2>

              {/* Chart placeholder */}
              <div className="h-32 mb-6 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-end gap-2 p-3">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#1a56db] to-[#388bfd] rounded-md"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Active orders */}
              <div>
                <h3 className="text-sm font-medium text-white/70 mb-3">
                  Активные заказы
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>Заказ №123 — в работе</li>
                  <li>Заказ №456 — задержка</li>
                  <li>Заказ №789 — сборка</li>
                </ul>
              </div>
            </div>

            {/* ── Materials ── */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold mb-5">Остатки сырья</h2>

              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex justify-between">
                  <span>Фанера</span>
                  <span className="text-white">120 кг</span>
                </li>
                <li className="flex justify-between">
                  <span>Клей</span>
                  <span className="text-white">15 л</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.06] px-5 sm:px-8 py-6 text-xs text-white/30">
        <div className="mx-auto max-w-6xl flex justify-between">
          <p>© {new Date().getFullYear()} AgenticAI Production</p>
          <Link href="/privacy" className="hover:text-white/60 transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </footer>

    </div>
  );
}