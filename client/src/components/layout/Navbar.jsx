import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',          label: 'Home',        exact: true },
  { to: '/dashboard', label: 'Dashboard'               },
  { to: '/report',    label: 'Report Issue'             },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
      scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm">
            🌿
          </div>
          <span className="text-[1.05rem] font-extrabold text-gray-900 tracking-tight">
            Eco<span className="text-green-600">Vision</span>
            <span className="text-gray-400 font-medium"> AI</span>
          </span>
        </Link>

        {/* Centre links — desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(({ to, label, exact }) => (
            <NavLink key={to} to={to} end={exact}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >{label}</NavLink>
          ))}
        </nav>

        {/* CTA — desktop */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link to="/login"
            className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            Sign in
          </Link>
          <Link to="/signup"
            className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-sm">
            Get started
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button onClick={() => setOpen(o => !o)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu">
          {open
            ? <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-1 shadow-lg animate-fade-in">
          {links.map(({ to, label, exact }) => (
            <NavLink key={to} to={to} end={exact}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >{label}</NavLink>
          ))}
          <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
            <Link to="/login"
              className="text-center py-2.5 text-sm font-bold text-green-700 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Sign in
            </Link>
            <Link to="/signup"
              className="text-center py-2.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
