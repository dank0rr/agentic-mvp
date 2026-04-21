// app/page.tsx  —  Next.js App Router + Tailwind CSS
// Agentic AI Production — Landing Page
import Link from 'next/link';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-white font-sans antialiased overflow-x-hidden">

      {/* ─── Subtle grid texture overlay ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,139,253,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,139,253,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ─── Radial glow top-center ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% -10%, rgba(56,139,253,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[#050d1a]/80">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" aria-label="На главную" className="flex items-center gap-2.5 group">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg
                           bg-gradient-to-br from-[#388bfd] to-[#1a56db]
                           shadow-[0_0_16px_rgba(56,139,253,0.5)]
                           group-hover:shadow-[0_0_24px_rgba(56,139,253,0.7)]
                           transition-shadow duration-300"
              >
                {/* Simple hexagon / circuit icon */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1.5L15.5 5.25V12.75L9 16.5L2.5 12.75V5.25L9 1.5Z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="9" r="2.2" fill="white" />
                </svg>
              </span>
              <span
                className="text-[15px] font-semibold tracking-tight
                           bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
              >
                Agentic<span className="text-[#388bfd]">AI</span>
              </span>
            </Link>

            {/* Login button */}
            <a
              href="/login"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#388bfd]/50
                         px-5 py-2 text-sm font-medium text-[#388bfd]
                         hover:bg-[#388bfd]/10 hover:border-[#388bfd]
                         transition-all duration-200 active:scale-95"
            >
              Войти
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </header>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <main id="main-content">
          <section
            aria-labelledby="hero-heading"
            className="relative flex flex-col items-center justify-center text-center
                       px-5 sm:px-8 pt-28 pb-32 sm:pt-36 sm:pb-40"
          >
            {/* Pill badge */}
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#388bfd]/30
                         bg-[#388bfd]/10 px-4 py-1.5 text-xs font-medium text-[#7db8ff]
                         tracking-wide uppercase"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#388bfd] shadow-[0_0_6px_#388bfd] animate-pulse"
              />
              AI-мониторинг производства в реальном времени
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
            >
              Предотвратите{" "}
              <span
                className="bg-gradient-to-r from-[#388bfd] via-[#60aaff] to-[#a0c8ff]
                           bg-clip-text text-transparent"
              >
                простои
              </span>
              <br />
              до потери денег
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/55"
            >
              AI-агент предупредит о риске за{" "}
              <strong className="font-semibold text-white/80">3&nbsp;дня</strong> — до того, как
              остановится линия и начнутся штрафы.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/login"
                className="relative inline-flex items-center gap-2 rounded-xl
                           bg-gradient-to-r from-[#1a56db] to-[#388bfd]
                           px-8 py-3.5 text-sm font-semibold text-white
                           shadow-[0_4px_24px_rgba(56,139,253,0.45)]
                           hover:shadow-[0_4px_32px_rgba(56,139,253,0.65)]
                           hover:brightness-110
                           transition-all duration-200 active:scale-[.98]"
              >
                Попробовать бесплатно
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m-4.5-4.5L13 8l-4.5 4.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-xs text-white/35">Без кредитной карты · 14 дней бесплатно</span>
            </div>

            {/* Decorative blurred orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                         h-64 w-64 rounded-full opacity-20 blur-3xl
                         bg-[#388bfd]"
            />
          </section>

          {/* ══════════════════════════════════════
              HOW IT WORKS
          ══════════════════════════════════════ */}
          <section
            aria-labelledby="how-it-works-heading"
            className="relative px-5 sm:px-8 py-24 sm:py-32"
          >
            <div className="mx-auto max-w-6xl">

              {/* Section header */}
              <div className="text-center mb-16">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#388bfd]">
                  Простой старт
                </p>
                <h2
                  id="how-it-works-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
                >
                  Как это работает
                </h2>
              </div>

              {/* Steps */}
              <ol className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

                {/* Connector line — desktop only */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px
                             bg-gradient-to-r from-[#388bfd]/0 via-[#388bfd]/40 to-[#388bfd]/0"
                />

                {(
                  [
                    {
                      step: "01",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                          <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <circle cx="18" cy="17" r="3" fill="#388bfd" />
                          <path d="M17 17l.8.8 1.4-1.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Подключите 1С",
                      desc: "Интеграция занимает 15 минут. Агент автоматически начинает читать данные о запасах, заказах и поставках.",
                    },
                    {
                      step: "02",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          <circle cx="18" cy="5" r="3" fill="#f59e0b" />
                        </svg>
                      ),
                      title: "Получайте уведомления",
                      desc: "Агент анализирует паттерны и отправляет предупреждение в Telegram или Email за 3 дня до вероятного простоя.",
                    },
                    {
                      step: "03",
                      icon: (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Подтверждайте заказы",
                      desc: "Одним кликом подтвердите экстренный заказ прямо из уведомления — агент сформирует заявку поставщику автоматически.",
                    },
                  ] as { step: string; icon: React.ReactNode; title: string; desc: string }[]
                ).map(({ step, icon, title, desc }, i) => (
                  <li
                    key={step}
                    className="relative flex flex-col items-center text-center
                               rounded-2xl border border-white/[0.07] bg-white/[0.03]
                               px-6 py-8 backdrop-blur-sm
                               hover:border-[#388bfd]/30 hover:bg-[#388bfd]/[0.05]
                               transition-all duration-300"
                  >
                    {/* Step number */}
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-full
                                 border border-[#388bfd]/30 bg-[#388bfd]/10 text-[#388bfd]"
                    >
                      {icon}
                    </div>

                    {/* Index label */}
                    <span className="absolute top-5 right-5 text-[11px] font-mono font-bold text-white/20">
                      {step}
                    </span>

                    <h3
                      className="mb-3 text-lg font-semibold text-white"
                      style={{ fontFamily: "'Syne', 'DM Sans', sans-serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{desc}</p>

                    {/* Arrow between steps (mobile) */}
                    {i < 2 && (
                      <div aria-hidden="true" className="sm:hidden mt-6 text-[#388bfd]/40">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </main>

        {/* ══════════════════════════════════════
            FOOTER
        ══════════════════════════════════════ */}
        <footer className="mt-auto border-t border-white/[0.06] px-5 sm:px-8 py-8">
          <div
            className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center
                       justify-between gap-4 text-xs text-white/35"
          >
            <p>© {new Date().getFullYear()} AgenticAI Production. Все права защищены.</p>
            <nav aria-label="Юридические ссылки">
              <a
                href="/privacy"
                className="hover:text-white/70 transition-colors duration-150 underline underline-offset-2"
              >
                Политика конфиденциальности
              </a>
            </nav>
          </div>
        </footer>

      </div>{/* /z-10 wrapper */}
    </div>
  );
}