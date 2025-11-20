import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'How it works', href: '#how' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-lg"></div>
              <span className="text-lg font-semibold tracking-tight">NG Spector</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#download" className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/20 transition-transform hover:scale-[1.02]">
                Get the app
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="grid gap-2 border-t border-white/10 p-3 md:hidden">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#download" className="rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 text-center text-sm font-medium text-white" onClick={() => setOpen(false)}>
                Get the app
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
