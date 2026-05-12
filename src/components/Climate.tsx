import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Climate() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8vh", "8vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/4a7b2c78-dfbc-4c58-9e80-71a9d8cb423c.jpg"
            alt="Зима на Алтае"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/60" />
        </motion.div>
      </div>

      <div className="relative z-10 text-white text-center px-6">
        <h3 className="text-xs uppercase tracking-widest mb-6 opacity-60">Слайд 4 · Климат</h3>
        <div className="text-[20vw] font-bold leading-none mb-4 text-blue-200/80">
          −50°
        </div>
        <p className="text-xl md:text-3xl font-light mb-10 opacity-90">
          Зимой в горах до минус пятидесяти
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-5">
            <div className="text-3xl font-bold mb-1">3–4</div>
            <div className="text-sm opacity-60 uppercase tracking-wide">месяца тепла в году</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-5">
            <div className="text-3xl font-bold mb-1">−50°C</div>
            <div className="text-sm opacity-60 uppercase tracking-wide">зимой в горах</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-5">
            <div className="text-3xl font-bold mb-1">+35°C</div>
            <div className="text-sm opacity-60 uppercase tracking-wide">летом в долинах</div>
          </div>
        </div>
      </div>
    </div>
  );
}
