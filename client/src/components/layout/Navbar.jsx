import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-xl font-bold text-green-700">EcoVision AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
