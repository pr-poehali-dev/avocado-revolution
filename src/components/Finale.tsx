import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Finale() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/8b1ec7e8-ebbb-45df-a8fd-7804ad5b080c.jpg"
          alt="Закат над горами Алтая"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.4em] mb-8 opacity-50">Слайд 15 · Финал</p>

        <h2 className="text-2xl md:text-3xl font-light mb-2 opacity-70">
          Алтай — не 76-е место.
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10">
          Это горы,<br />воздух<br />и люди.
        </h1>

        <div className="w-16 h-px bg-white/40 mx-auto mb-10" />

        <div className="flex flex-col sm:flex-row gap-0 justify-center text-lg md:text-2xl font-light">
          <span className="px-6 py-3 border border-white/30">Приезжайте.</span>
          <span className="px-6 py-3 border border-white/30 border-t-0 sm:border-t sm:border-l-0">Тратьте деньги.</span>
          <span className="px-6 py-3 border border-white/30 border-t-0 sm:border-t sm:border-l-0">Не торгуйтесь.</span>
        </div>
      </motion.div>
    </div>
  );
}
