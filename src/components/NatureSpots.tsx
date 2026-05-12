export default function NatureSpots() {
  const spots = [
    {
      name: "Телецкое озеро",
      desc: "Самое глубокое озеро Сибири. Длина 78 км, глубина до 325 м. Объект ЮНЕСКО.",
      tag: "ЮНЕСКО",
    },
    {
      name: "Гора Белуха",
      desc: "Высшая точка Алтая — 4506 м. Альпинизм, треккинг, сакральное место алтайцев.",
      tag: "4506 м",
    },
    {
      name: "Чуйский тракт",
      desc: "Одна из красивейших дорог мира по версии National Geographic. 968 км через перевалы.",
      tag: "Топ мира",
    },
    {
      name: "Плато Укок",
      desc: "Заповедная «тихая зона». Здесь нашли мумию принцессы Укока. Объект ЮНЕСКО.",
      tag: "ЮНЕСКО",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Картинка слева */}
        <div className="flex-1 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/f6b2d56f-b49b-4894-8f47-06ea11ae1227.jpg"
            alt="Природные красоты Алтая"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Слайд 9</p>
            <p className="text-3xl font-bold">Природные<br />красоты</p>
          </div>
        </div>

        {/* Список справа */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-neutral-50">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-10">
            Четыре причины приехать прямо сейчас
          </h3>
          <div className="space-y-6">
            {spots.map((spot, i) => (
              <div key={spot.name} className="flex gap-5 items-start p-5 bg-white border-l-4 border-neutral-100 hover:border-emerald-400 transition-colors duration-300">
                <span className="text-2xl font-bold text-neutral-200 shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-neutral-900 text-lg">{spot.name}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 uppercase tracking-wide">
                      {spot.tag}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-neutral-100 text-neutral-500 text-sm">
            Также: Каракольские озёра · Петроглифы долины Чулышман · Мультинские озёра
          </div>
        </div>
      </div>
    </div>
  );
}
