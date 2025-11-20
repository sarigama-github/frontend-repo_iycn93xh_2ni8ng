import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
            Mobile AI for waste deviation detection
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find waste deviations instantly
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            NG Spector helps field teams spot anomalies in waste streams using your phones camera. Reduce contamination, cut costs, and report with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#download" className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.02]">
              Get NG Spector
            </a>
            <a href="#how" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
              <span className="text-sm">On-device insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
              <span className="text-sm">Offline ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
              <span className="text-sm">Shareable reports</span>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:col-span-5 lg:mt-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="aspect-[9/19] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <div className="flex h-full w-full items-center justify-center text-center">
                <div>
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"></div>
                  <p className="mt-4 text-sm text-white/70">iOS & Android</p>
                  <p className="text-xs text-white/50">Interactive demo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
