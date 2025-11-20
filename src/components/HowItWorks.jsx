import { ScanLine, BadgeCheck, Share2 } from 'lucide-react'

function Step({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-white/70">Three steps from scan to share.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Step icon={ScanLine} title="Scan" desc="Open the app and point the camera at the waste stream or container." />
        <Step icon={BadgeCheck} title="Detect" desc="AI flags deviations like contamination or hazardous items in real time." />
        <Step icon={Share2} title="Share" desc="Create a quick report with photos, labels and location to share with your team." />
      </div>
    </section>
  )
}

export default HowItWorks
