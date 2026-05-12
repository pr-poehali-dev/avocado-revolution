import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/ade16d30-7b18-4c2c-a671-58b91e545872.jpg"
          alt="Гора Белуха, Республика Алтай"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
          История болезни · Клинический приём
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          АЛТАЙ
        </h1>
        <div className="w-16 h-px bg-white mx-auto mb-6 opacity-60" />
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 font-light leading-relaxed">
          Вика и Катя · Группа _____ · 1 курс
        </p>
      </div>

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-60">Прокрути вниз</span>
        <div className="w-px h-8 bg-white opacity-40 animate-pulse" />
      </motion.div>
    </div>
  );
}
