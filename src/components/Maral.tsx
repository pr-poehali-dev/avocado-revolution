export default function Maral() {
  const steps = [
    {
      num: "01",
      title: "Весна — рога растут",
      desc: "С марта по июнь у маралов вырастают мягкие, бархатистые рога — панты. Они наполнены кровью и биологически активными веществами. В это время рога буквально тёплые на ощупь.",
    },
    {
      num: "02",
      title: "Срезают без вреда",
      desc: "Панты срезают у живого марала в начале июня, пока они не затвердели. Процедура занимает минуты. Марал не страдает — рога отрастают снова каждый год.",
    },
    {
      num: "03",
      title: "Консервируют",
      desc: "Свежие панты варят в несколько этапов и сушат — это классический метод. Или замораживают в свежем виде. Получают экстракт, бальзам, таблетки, ванны.",
    },
    {
      num: "04",
      title: "Продают по всему миру",
      desc: "Главные покупатели — Китай, Южная Корея, Япония. Китайская медицина использует панты тысячи лет. Один килограмм свежих пантов стоит 15–30 тыс. рублей.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Кто такой марал */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 relative overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/de312ed5-e558-440a-9324-7669a9b0f448.jpg"
            alt="Марал — алтайский олень"
            className="w-full h-full object-cover min-h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Символ Алтая</p>
            <p className="text-5xl lg:text-7xl font-bold">МАРАЛ</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-neutral-50">
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Кто это?</h3>
          <p className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 leading-snug">
            Алтайский марал — благородный олень, живущий только в горах Алтая и Саян.
          </p>
          <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
            <p>
              Весит до <strong className="text-neutral-900">300 кг</strong>, рога достигают <strong className="text-neutral-900">1,5 метра</strong> в размахе.
              Живёт 12–15 лет. Занесён в список охраняемых животных, но разводится на фермах.
            </p>
            <p>
              В Алтае около <strong className="text-neutral-900">100 маральников</strong> — специальных ферм, где маралов разводят
              ради пантов, мяса и туризма. Это один из главных источников дохода региона.
            </p>
            <p>
              Марал — неофициальный символ Республики Алтай. Его изображение встречается
              на сувенирах, гербах и, конечно, в мемах.
            </p>
          </div>
        </div>
      </div>

      {/* Что такое панты */}
      <div className="px-6 lg:px-16 py-20 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            <div className="flex-1">
              <h3 className="text-xs uppercase tracking-widest text-amber-700 mb-4">Главный продукт</h3>
              <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Панты.<br />Зачем они?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Панты — молодые, ещё не затвердевшие рога марала. В них сосредоточены
                вещества, которые восточная медицина использует уже <strong>2000 лет</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "💪", text: "Восстановление мышц и суставов" },
                  { icon: "🧠", text: "Улучшение памяти и концентрации" },
                  { icon: "❤️", text: "Укрепление иммунитета" },
                  { icon: "⚡", text: "Повышение энергии и тонуса" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 p-3 bg-white rounded border border-amber-100">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm text-neutral-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/23b16ba4-0c0e-45b3-bc2c-f45bfb48a054.jpg"
                alt="Панты марала"
                className="w-full h-72 object-cover rounded"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3 border border-amber-100 rounded">
                  <div className="text-xl font-bold text-amber-700">15–30</div>
                  <div className="text-xs text-neutral-500">тыс. ₽/кг</div>
                </div>
                <div className="bg-white p-3 border border-amber-100 rounded">
                  <div className="text-xl font-bold text-amber-700">3–5</div>
                  <div className="text-xs text-neutral-500">кг с одного марала</div>
                </div>
                <div className="bg-white p-3 border border-amber-100 rounded">
                  <div className="text-xl font-bold text-amber-700">КНР</div>
                  <div className="text-xs text-neutral-500">главный покупатель</div>
                </div>
              </div>
            </div>
          </div>

          {/* Как добывают — шаги */}
          <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Как добывают панты — 4 шага</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-6 border border-amber-100 rounded">
                <div className="text-3xl font-bold text-amber-200 mb-3">{step.num}</div>
                <div className="font-bold text-neutral-900 mb-3 text-sm">{step.title}</div>
                <div className="text-neutral-500 text-sm leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Весёлый марал */}
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-16 py-20 bg-green-50 gap-12">
        <div className="flex-1">
          <img
            src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/4a53839f-e451-4195-a34e-e9540e643877.jpg"
            alt="Марал с паспортом — оптимистичный прогноз"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xs uppercase tracking-widest text-green-700 mb-4">Оптимистичный прогноз 2040</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Маралы<br />с паспортами.
          </h2>
          <div className="space-y-3 text-neutral-700">
            <div className="flex items-center gap-3 p-4 bg-white rounded border-l-4 border-green-400">
              <span className="text-2xl">🦌</span>
              <span>2030: турпоток 4 млн, рейтинг 65-е</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded border-l-4 border-green-500">
              <span className="text-2xl">📱</span>
              <span>2035: интернет в 90% сёл, налоги до 45%</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded border-l-4 border-green-600">
              <span className="text-2xl">🌍</span>
              <span>2040: топ‑40. Маралы с паспортами.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}