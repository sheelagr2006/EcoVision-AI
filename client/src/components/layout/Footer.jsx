import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <span className="font-bold text-white text-lg">EcoVision AI</span>
            </div>
            <p className="text-sm text-green-300">
              AI-powered environmental monitoring for a sustainable future.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/report" className="hover:text-white transition-colors">Report Issue</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-3">Account</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center text-xs text-green-400">
          © {new Date().getFullYear()} EcoVision AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
