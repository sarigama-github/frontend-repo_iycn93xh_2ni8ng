function CTA() {
  return (
    <section id="download" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent p-8 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to reduce contamination?</h2>
          <p className="mt-3 text-white/80">Join the pilot and get early access to NG Spector for your team.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-500/30 sm:w-auto">
              Get invite link
            </a>
            <a href="#" className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
              Watch a demo
            </a>
          </div>
          <p className="mt-4 text-xs text-white/60">No spam. Well email you a private TestFlight/Play link.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
