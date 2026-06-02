import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-4">
      <span className="text-7xl mb-6">🌿</span>
      <h1 className="text-6xl font-bold text-green-700 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
      <p className="text-gray-500 text-sm mb-8 max-w-sm">
        Looks like this page got lost in the forest. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
