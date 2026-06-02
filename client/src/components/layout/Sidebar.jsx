import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { to: '/report', icon: '📋', label: 'Report Issue' },
  { to: '/admin', icon: '⚙️', label: 'Admin Panel' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-green-100 flex flex-col py-6 px-4">
      <div className="mb-8 px-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Navigation</p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`
            }
          >
            <span>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-3 py-3 rounded-lg bg-green-50 text-center">
        <p className="text-xs text-green-700 font-medium">🌱 Building a greener future</p>
      </div>
    </aside>
  )
}
