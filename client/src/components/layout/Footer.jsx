import { Link } from 'react-router-dom'

const platform = [['/', 'Home'], ['/dashboard', 'Dashboard'], ['/report', 'Report Issue'], ['/admin', 'Admin']]
const account  = [['/login', 'Sign In'], ['/signup', 'Create Account']]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-base shadow-sm">🌿</div>
              <span className="font-extrabold text-white text-[1.05rem]">EcoVision AI</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[200px]">
              AI-powered environmental monitoring for a sustainable future.
            </p>
            <div className="flex gap-2">
              {[['𝕏','Twitter'], ['in','LinkedIn'], ['gh','GitHub']].map(([icon, label]) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center text-xs font-bold transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Platform</p>
            <ul className="space-y-3">
              {platform.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Account</p>
            <ul className="space-y-3">
              {account.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><span>📧</span> hello@ecovisionai.com</li>
              <li className="flex items-center gap-2"><span>🌐</span> ecovisionai.com</li>
              <li className="flex items-center gap-2"><span>📍</span> Remote-first, Global</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} EcoVision AI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
