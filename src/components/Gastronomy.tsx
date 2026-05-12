export default function Gastronomy() {
  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-[70vh]">
      <div className="flex-1 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/b1588b51-16bc-461f-98b8-edce3fb4616a/files/bfd7a1c0-47d4-4d38-82c9-3ffaa2746d72.jpg"
          alt="Алтайские деликатесы: мёд, сыр, черемша"
          className="w-full h-full object-cover min-h-[350px]"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-amber-50">
        <h3 className="text-xs uppercase tracking-widest text-amber-700 mb-4">Слайд 11 · Гастрономия и люди</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
          Вкус<br />Алтая.
        </h2>
        <div className="space-y-5">
          <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-amber-300">
            <span className="text-3xl">🧀</span>
            <div>
              <div className="font-bold text-neutral-900">Сыр и мёд</div>
              <div className="text-sm text-neutral-500">Фермерский, экологически чистый — без ГМО и дорог</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-green-300">
            <span className="text-3xl">🌿</span>
            <div>
              <div className="font-bold text-neutral-900">Черемша</div>
              <div className="text-sm text-neutral-500">Дикий чеснок, собирается весной в горах вручную</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-blue-300">
            <span className="text-3xl">💛</span>
            <div>
              <div className="font-bold text-neutral-900">Люди</div>
              <div className="text-sm text-neutral-500">Добрые. Криминал — 83-е место из 85 (очень низкий)</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border-l-4 border-red-300">
            <span className="text-3xl">🚔</span>
            <div>
              <div className="font-bold text-neutral-900">Безопасность</div>
              <div className="text-sm text-neutral-500">Один из самых спокойных регионов России</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
