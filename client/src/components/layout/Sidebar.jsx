import { NavLink, Link } from 'react-router-dom'

const nav = [
  { to: '/dashboard', icon: '🏠', label: 'Dashboard'   },
  { to: '/report',    icon: '📋', label: 'Report Issue' },
  { to: '/admin',     icon: '⚙️', label: 'Admin Panel'  },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 lg:w-72 shrink-0 flex-col bg-white border-r border-gray-100 min-h-screen">

      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100 shrink-0">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-base shadow-md shadow-green-600/25">🌿</div>
          <span className="font-extrabold text-gray-900 tracking-tight">EcoVision <span className="text-green-600">AI</span></span>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.12em] px-3 py-2 mb-1">Navigation</p>
        {nav.map(({ to, icon, label }) => (
          <NavLink key={to} to={to}
            className={({ isActive }) =>
              `flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold transition-all ${
                isActive
                  ? 'bg-green-600 text-white shadow-md shadow-green-600/20'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <span className="text-lg leading-none">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom card */}
      <div className="p-4 shrink-0">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5 text-center">
          <span className="text-3xl block mb-2">🌱</span>
          <p className="text-sm font-bold text-green-800">Building a greener future</p>
          <p className="text-xs text-green-600 mt-1">one report at a time</p>
        </div>
      </div>
    </aside>
  )
}
