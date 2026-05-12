export default function Featured() {
  const stats = [
    { value: "92 900", label: "км² площадь" },
    { value: "220", label: "тыс. жителей" },
    { value: "2,4", label: "чел/км² плотность" },
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
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Слайд 2 · Визитная карточка пациента</h3>
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

      {/* Слайд 3 — Рейтинг */}
      <div className="bg-neutral-900 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Слайд 3 · Рейтинг качества жизни</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10">
            <div>
              <div className="text-7xl lg:text-9xl font-bold text-neutral-600 line-through decoration-2">78</div>
              <div className="text-sm text-neutral-600 mt-2">2025 год</div>
            </div>
            <div className="text-4xl text-green-400 font-bold">⬆ +2</div>
            <div>
              <div className="text-7xl lg:text-9xl font-bold text-white">76</div>
              <div className="text-sm text-neutral-400 mt-2">2026 год</div>
            </div>
          </div>
          <p className="text-neutral-400 text-lg">из 85 регионов России по качеству жизни</p>
          <div className="mt-8 inline-block bg-green-900/40 border border-green-700/40 px-6 py-3 text-green-400 text-sm">
            ⬆ Две строчки вверх за год — уже прогресс!
          </div>
        </div>
      </div>

      {/* Плюсы */}
      <div className="px-6 py-20 bg-neutral-50">
        <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-12 text-center">Слайд 8 · Диагноз: богатый край</h3>
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

      {/* Слайд 6 — Дороги */}
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        <div className="flex-1 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/67f44650-2e4f-48ae-911a-5fae9e37cab2.jpg"
            alt="Разбитые дороги Алтая"
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-white">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-red-500">Слайд 6 · Главная боль — дороги</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Ямы.<br />Грязь.<br />Молитва.
          </h2>
          <ul className="space-y-4 text-neutral-600">
            <li className="flex items-start gap-3 p-3 border-l-2 border-red-200">
              <span className="text-red-400 font-bold">✕</span>
              <span>Железной дороги — нет вообще</span>
            </li>
            <li className="flex items-start gap-3 p-3 border-l-2 border-red-200">
              <span className="text-red-400 font-bold">✕</span>
              <span>Чуйский тракт изношен на <strong>60%</strong></span>
            </li>
            <li className="flex items-start gap-3 p-3 border-l-2 border-red-200">
              <span className="text-red-400 font-bold">✕</span>
              <span>Зимой перевалы закрывают</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Слайд 7 — Отток молодёжи */}
      <div className="flex flex-col lg:flex-row-reverse min-h-[60vh]">
        <div className="flex-1 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/722196e5-75fb-4829-bdfe-69ed5a7ae5ab.jpg"
            alt="Отток молодёжи с Алтая"
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-neutral-50">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-orange-500">Слайд 7 · Отток молодёжи</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Уезжают.<br />Не<br />возвращаются.
          </h2>
          <div className="text-6xl lg:text-8xl font-bold text-orange-200 mb-3">30%</div>
          <p className="text-neutral-600 text-lg mb-6">
            выпускников школ покидают регион после получения аттестата
          </p>
          <p className="text-neutral-400 text-sm italic">
            Учёба, работа, карьера — всё это есть где угодно, только не здесь. Пока.
          </p>
        </div>
      </div>

      {/* Слайд 12 — Рецепт */}
      <div id="recipe" className="px-6 lg:px-16 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs uppercase tracking-widest text-green-600 mb-4">Слайд 12 · Рецепт выздоровления</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-12 leading-tight">
            5 шагов<br />к топ‑40.
          </h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Дороги и аэропорт", desc: "Нормальный асфальт и рейсы хотя бы в Москву и Новосибирск" },
              { step: "02", title: "Интернет в сёла", desc: "Без связи нет ни удалённой работы, ни туристических сервисов" },
              { step: "03", title: "Переработка пантов, мёда, сыра", desc: "Продавать готовый продукт, а не сырьё — прибыль в 3–4 раза выше" },
              { step: "04", title: "Нормальные гостиницы и туалеты", desc: "Туристы готовы платить, но не за дырки в полу" },
              { step: "05", title: "Фестивали и блогеры", desc: "Один ролик на 10 млн просмотров = полмиллиона новых туристов" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6 p-5 bg-neutral-50 border-l-4 border-neutral-200 hover:border-green-400 transition-colors duration-300">
                <span className="text-3xl font-bold text-neutral-200 shrink-0">{item.step}</span>
                <div>
                  <div className="font-bold text-neutral-900 mb-1">{item.title}</div>
                  <div className="text-sm text-neutral-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
