export default function Economics() {
  const bars = [
    { label: "ВРП на душу", altai: 32, rf: 100, altaiVal: "320 тыс. ₽", rfVal: "≈1 млн ₽" },
    { label: "Безработица", altai: 10, rf: 3.5, altaiVal: "~10%", rfVal: "3–4%" },
    { label: "Уровень бедности", altai: 12.3, rf: 9, altaiVal: "12,3%", rfVal: "9%" },
    { label: "Дотации к бюджету", altai: 85, rf: 20, altaiVal: "85%", rfVal: "~20%" },
  ];

  const ratingData = [
    { year: "2024", place: 78, color: "bg-neutral-400" },
    { year: "2025", place: 77, color: "bg-neutral-500" },
    { year: "2026", place: 76, color: "bg-neutral-700" },
    { year: "2030 ✦", place: 65, color: "bg-green-600" },
    { year: "2035 ✦", place: 52, color: "bg-green-500" },
  ];

  return (
    <div className="bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Экономические анализы</h3>
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          Цифры<br />не врут.
        </h2>

        {/* Сравнительные бары */}
        <div className="space-y-10 mb-20">
          {bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm uppercase tracking-wide text-neutral-400">{bar.label}</span>
                <div className="flex gap-6 text-sm">
                  <span className="text-white font-bold">Алтай: {bar.altaiVal}</span>
                  <span className="text-neutral-500">РФ: {bar.rfVal}</span>
                </div>
              </div>
              <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-red-500 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(bar.altai, 100)}%` }}
                />
                <div
                  className="absolute left-0 top-0 h-full border-r-2 border-white/30"
                  style={{ width: `${Math.min(bar.rf, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-red-400">Алтай</span>
                <span className="text-xs text-neutral-600">среднее по РФ ↑</span>
              </div>
            </div>
          ))}
        </div>

        {/* Рейтинг качества жизни */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8">
            Рейтинг качества жизни (место из 85)
          </h3>
          <div className="flex items-end gap-4">
            {ratingData.map((d) => (
              <div key={d.year} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-white font-bold text-lg">{d.place}</span>
                <div
                  className={`w-full ${d.color} rounded-t transition-all duration-700`}
                  style={{ height: `${(85 - d.place + 10) * 3}px` }}
                />
                <span className="text-xs text-neutral-500 text-center leading-tight">{d.year}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-600 text-xs mt-4 text-center">
            ✦ — оптимистичный прогноз · ⬆ +2 строчки за 2025 год
          </p>
        </div>
      </div>
    </div>
  );
}
