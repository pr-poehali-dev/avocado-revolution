import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function EcologyTourism() {
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
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/86639c49-ca87-4677-ab7e-7d0215a6300c.jpg"
            alt="Телецкое озеро — экология и туризм Алтая"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/65" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <h3 className="text-xs uppercase tracking-widest text-emerald-400/60 mb-8 text-center">
          Слайд 8 · Экология и туризм
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 text-white text-center">
            <div className="text-4xl lg:text-5xl font-bold text-emerald-300 mb-2">№1</div>
            <div className="text-xs uppercase tracking-wide opacity-60">экология в России</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 text-white text-center">
            <div className="text-4xl lg:text-5xl font-bold text-emerald-300 mb-2">2,5</div>
            <div className="text-xs uppercase tracking-wide opacity-60">млн туристов в год</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 text-white text-center">
            <div className="text-4xl lg:text-5xl font-bold text-emerald-300 mb-2">+40%</div>
            <div className="text-xs uppercase tracking-wide opacity-60">рост за 5 лет</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 text-white text-center">
            <div className="text-4xl lg:text-5xl font-bold text-emerald-300 mb-2">Топ‑25</div>
            <div className="text-xs uppercase tracking-wide opacity-60">для иностранцев</div>
          </div>
        </div>

        <p className="text-white/40 text-center text-sm uppercase tracking-widest">
          Туристов приезжает больше, чем живёт местных жителей
        </p>
      </div>
    </div>
  );
}
