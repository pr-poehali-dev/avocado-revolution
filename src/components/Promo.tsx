import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15vh", "15vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-neutral-900"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/4a53839f-e451-4195-a34e-e9540e643877.jpg"
          alt="Весёлый марал — оптимистичный прогноз"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-xs uppercase tracking-widest text-green-400/70 mb-4 text-center">
          Слайд 14 · Прогноз оптимистичный
        </h3>
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-14 leading-tight">
          Маралы<br />с паспортами.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white">
            <div className="text-5xl font-bold text-green-300 mb-3">2030</div>
            <div className="text-sm uppercase tracking-wide text-green-400/70 mb-4">Ближайший прогноз</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>🦌 Турпоток — 4 млн чел.</li>
              <li>📊 Рейтинг — 65-е место</li>
            </ul>
          </div>

          <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/40 p-8 text-white md:scale-105">
            <div className="text-5xl font-bold text-green-300 mb-3">2035</div>
            <div className="text-sm uppercase tracking-wide text-green-400/70 mb-4">Оптимистичный</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>🧳 Турпоток — 5–6 млн</li>
              <li>📊 Рейтинг — 50–55-е</li>
              <li>📶 Интернет в 90% сёл</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white">
            <div className="text-5xl font-bold text-green-300 mb-3">2040</div>
            <div className="text-sm uppercase tracking-wide text-green-400/70 mb-4">Мечта</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>🌍 Рейтинг — топ‑40</li>
              <li>🦌 Маралы с паспортами</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs uppercase tracking-widest">
          Если сделать хотя бы 3 из 5 шагов рецепта
        </p>
      </div>
    </div>
  );
}
