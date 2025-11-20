import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* ambient background grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_top_right,rgba(255,115,0,0.15),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      <footer className="relative z-10 border-t border-white/10 py-12 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} NG Spector. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
