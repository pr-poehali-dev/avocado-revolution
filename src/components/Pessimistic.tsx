export default function Pessimistic() {
  const timeline = [
    { year: "2026", place: 76, note: "сейчас" },
    { year: "2030", place: 68, note: "дотации 83%" },
    { year: "2035", place: 60, note: "молодёжь всё ещё уезжает" },
  ];

  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col lg:flex-row">
      {/* Левая колонка — грустный марал */}
      <div className="flex-1 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
        <img
          src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/dbbb2c18-1c22-46de-81af-e81c64c68e40.jpg"
          alt="Грустный марал — пессимистичный прогноз"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-100/80" />
        <div className="absolute bottom-8 left-8 text-neutral-700">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Если ничего не менять</p>
        </div>
      </div>

      {/* Правая колонка — данные */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16">
        <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Слайд 13 · Прогноз пессимистичный</h3>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-800 mb-12 leading-tight">
          Если<br />ничего<br />не менять.
        </h2>

        {/* Таймлайн */}
        <div className="space-y-4 mb-12">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex items-center gap-6">
              <div className="w-16 text-right">
                <span className="text-sm text-neutral-400 font-mono">{item.year}</span>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <div
                  className="h-2 bg-neutral-300 rounded-full transition-all"
                  style={{ width: `${(85 - item.place) * 2.5}px` }}
                />
                <span className="text-2xl font-bold text-neutral-700">{item.place}-е</span>
                <span className="text-sm text-neutral-400">{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-l-2 border-neutral-300 pl-6">
          <p className="text-neutral-600">Дотации остаются на уровне <strong>80–85%</strong></p>
          <p className="text-neutral-600">Молодёжь продолжает уезжать</p>
          <p className="text-neutral-600">Дырки в полу остаются</p>
          <p className="text-neutral-500 text-sm italic mt-2">Но горы никуда не денутся 🏔</p>
        </div>
      </div>
    </div>
  );
}
