import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6 animate-float select-none">🌿</div>
      <h1 className="text-8xl font-extrabold text-green-600 leading-none mb-2">404</h1>
      <h2 className="text-xl font-bold text-gray-900 mb-2">Page not found</h2>
      <p className="text-sm text-gray-500 max-w-xs mb-8 leading-relaxed">
        This page wandered off into the wilderness. Let's get you back on track.
      </p>
      <div className="flex gap-3">
        <Link to="/"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm shadow-sm">
          ← Back to Home
        </Link>
        <Link to="/dashboard"
          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
