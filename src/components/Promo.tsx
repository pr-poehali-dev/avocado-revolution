import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/86639c49-ca87-4677-ab7e-7d0215a6300c.jpg"
            alt="Телецкое озеро, Алтай"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base tracking-widest opacity-70">
        Прогноз
      </h3>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
            <div className="text-4xl font-bold mb-2">2026</div>
            <div className="text-sm opacity-70 uppercase tracking-wide mb-3">Сейчас</div>
            <div className="text-lg font-medium">76-е место</div>
            <div className="text-sm opacity-60 mt-1">Дотации 85%</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 text-white md:scale-105">
            <div className="text-4xl font-bold mb-2">2030</div>
            <div className="text-sm opacity-70 uppercase tracking-wide mb-3">Оптимистичный</div>
            <div className="text-lg font-medium">65-е место</div>
            <div className="text-sm opacity-60 mt-1">Турпоток 4 млн</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
            <div className="text-4xl font-bold mb-2">2035</div>
            <div className="text-sm opacity-70 uppercase tracking-wide mb-3">Мечта</div>
            <div className="text-lg font-medium">Топ‑50</div>
            <div className="text-sm opacity-60 mt-1">Интернет в 90% сёл</div>
          </div>
        </div>
        <p className="text-white/50 text-xs mt-8 uppercase tracking-widest">
          2040: маралы с паспортами 🦌
        </p>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl max-w-sm z-10 font-light leading-relaxed">
        Экология №1 в России.<br />
        Туристов больше,<br />
        чем населения.
      </p>
    </div>
  );
}
