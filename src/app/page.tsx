import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Avatar Easy
        </h1>
        <p className="mt-3 text-lg text-neutral-400">
          文字冒險式原型對話練習
        </p>
      </header>

      <p className="max-w-md text-center text-sm leading-relaxed text-amber-400/80">
        ⚠️ 此工具為練習用途，非治療替代品。如果您目前正經歷困難，請尋求專業協助。
      </p>

      <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
        <Link
          href="/practice?mode=professional"
          className="group rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 text-center transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800/80"
        >
          <span className="text-4xl">🩺</span>
          <p className="mt-3 text-lg font-semibold text-white">專業模式</p>
          <p className="mt-1 text-sm text-neutral-500">
            適合助人工作者與治療師
          </p>
        </Link>

        <Link
          href="/practice?mode=self-help"
          className="group rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 text-center transition-all duration-200 hover:border-neutral-600 hover:bg-neutral-800/80"
        >
          <span className="text-4xl">🧑</span>
          <p className="mt-3 text-lg font-semibold text-white">自助模式</p>
          <p className="mt-1 text-sm text-neutral-500">
            適合想自我探索的一般大眾
          </p>
        </Link>
      </div>
    </div>
  );
}
