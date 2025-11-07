import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[70vh] items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Level up your digital arsenal
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Curated gaming-grade digital products — clean, modern and fast. Discover themes, assets, plugins and more.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#search" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition">Search Products</a>
            <a href="#signup" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow border border-black/10 hover:bg-slate-50 transition">Create Account</a>
          </div>
        </div>
      </div>
    </section>
  );
}
