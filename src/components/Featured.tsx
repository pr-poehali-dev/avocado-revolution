export default function Featured() {
  const stats = [
    { value: "92 900", label: "км² площадь" },
    { value: "220", label: "тыс. жителей" },
    { value: "76-е", label: "место из 85 по качеству жизни" },
    { value: "85%", label: "бюджета — дотации" },
  ];

  const advantages = [
    { icon: "🌿", title: "Экология №1", desc: "Первое место в России по чистоте воздуха и природе" },
    { icon: "🧳", title: "2,5 млн туристов", desc: "Ежегодно, рост 40% за 5 лет — топ‑25 для иностранцев" },
    { icon: "🦌", title: "Телецкое озеро", desc: "Белуха 4506 м · Плато Укок (ЮНЕСКО) · Петроглифы" },
    { icon: "🧀", title: "Вкус Алтая", desc: "Сыр, мёд, панты, черемша — и добрые люди" },
  ];

  return (
    <div id="facts" className="bg-white">
      {/* Визитная карточка */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[350px] lg:h-[700px] mb-10 lg:mb-0 lg:order-2 lg:ml-12">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/de312ed5-e558-440a-9324-7669a9b0f448.jpg"
            alt="Марал в горах Алтая"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[700px] flex flex-col justify-center lg:order-1">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Визитная карточка пациента</h3>
          <p className="text-3xl lg:text-5xl mb-10 text-neutral-900 leading-tight font-bold">
            Юг Сибири.<br />На границе трёх миров.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl lg:text-3xl font-bold text-neutral-900">{s.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500 uppercase tracking-wide">
            Граничит с Китаем · Монголией · Казахстаном
          </p>
        </div>
      </div>

      {/* Плюсы */}
      <div className="px-6 py-20 bg-neutral-50">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-12 text-center">Диагноз: богатый край</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((a) => (
            <div key={a.title} className="flex flex-col gap-3">
              <div className="text-4xl">{a.icon}</div>
              <div className="font-bold text-neutral-900 text-lg">{a.title}</div>
              <div className="text-neutral-500 text-sm leading-relaxed">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Боль — дороги и молодёжь */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-[60vh] px-6 py-16 bg-white">
        <div className="flex-1 mb-8 lg:mb-0">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-red-500">Главная боль</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            Дороги.<br />Молодёжь.<br />Интернет.
          </h2>
          <ul className="space-y-3 text-neutral-600">
            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">—</span><span>Железной дороги нет. Чуйский тракт изношен на 60%</span></li>
            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">—</span><span>Зимой перевалы закрывают. Ямы, грязь, молитва</span></li>
            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">—</span><span>30% выпускников уезжают — и не возвращаются</span></li>
            <li className="flex items-start gap-3"><span className="text-red-400 mt-1">—</span><span>Безработица ~10% при среднем по РФ 3–4%</span></li>
          </ul>
        </div>
        <div id="recipe" className="flex-1 lg:ml-20">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-green-600">Рецепт выздоровления</h3>
          <div className="space-y-4">
            {[
              "Дороги и аэропорт",
              "Интернет в сёла",
              "Переработка: панты, мёд, сыр",
              "Гостиницы и туалеты без дырок",
              "Фестивали и блогеры",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-4 p-4 bg-neutral-50 border-l-2 border-neutral-200 hover:border-green-400 transition-colors duration-300">
                <span className="text-2xl font-bold text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-neutral-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
