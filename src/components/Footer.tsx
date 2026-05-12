export default function Footer() {
  return (
    <>
      {/* Слайд 16 — Спасибо */}
      <div className="bg-neutral-950 text-white px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-8">Слайд 16 · Финал</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Спасибо<br />за внимание</h2>
        <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
        <p className="text-2xl md:text-3xl font-light text-neutral-400">
          Алтай, держись 🌄
        </p>
        <p className="text-neutral-600 text-sm mt-10">Вика и Катя · Группа _____ · 1 курс · 2026</p>
      </div>

      {/* Прилипающий футер с крупной надписью */}
      <div
        className="relative h-[300px] sm:h-[450px] lg:h-[600px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+300px)] sm:h-[calc(100vh+450px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
          <div className="h-[300px] sm:h-[450px] lg:h-[600px] sticky top-[calc(100vh-300px)] sm:top-[calc(100vh-450px)] lg:top-[calc(100vh-600px)]">
            <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
              <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Места</h3>
                  <span className="text-white text-sm sm:text-base">Телецкое озеро</span>
                  <span className="text-white text-sm sm:text-base">Гора Белуха</span>
                  <span className="text-white text-sm sm:text-base">Плато Укок</span>
                  <span className="text-white text-sm sm:text-base">Каракольские озёра</span>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Факты</h3>
                  <span className="text-white text-sm sm:text-base">Экология №1 в РФ</span>
                  <span className="text-white text-sm sm:text-base">Криминал 83-е место</span>
                  <span className="text-white text-sm sm:text-base">ЮНЕСКО</span>
                  <span className="text-white text-sm sm:text-base">Петроглифы</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <h1 className="text-[14vw] sm:text-[13vw] lg:text-[12vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                  АЛТАЙ
                </h1>
                <div className="text-right">
                  <p className="text-white text-sm sm:text-base opacity-60">Держись 🌄</p>
                  <p className="text-neutral-500 text-xs mt-1">Вика и Катя · 1 курс · 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
