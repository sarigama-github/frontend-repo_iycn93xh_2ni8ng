import { Sparkles, ShieldCheck, LineChart, Camera } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      icon: Camera,
      title: 'Scan waste in seconds',
      desc: 'Use your phone to capture and analyze waste streams for contamination and deviations.'
    },
    {
      icon: Sparkles,
      title: 'AI-powered detection',
      desc: 'Model highlights anomalies like plastics in organics or hazardous items in recyclables.'
    },
    {
      icon: LineChart,
      title: 'Trends and insights',
      desc: 'Track hotspots, see improvement over time, and export shareable summaries.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance-ready',
      desc: 'Generate consistent documentation for audits and internal reporting.'
    }
  ]

  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for field teams</h2>
        <p className="mt-3 text-white/70">Fast, reliable and easy to use on any site or route.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Feature key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  )
}

export default Features
