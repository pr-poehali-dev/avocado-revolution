export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
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
  );
}
