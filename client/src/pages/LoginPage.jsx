import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[420px]">

        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-xl shadow-md shadow-green-600/25">🌿</div>
            <span className="text-xl font-extrabold text-gray-900">EcoVision <span className="text-green-600">AI</span></span>
          </Link>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Welcome back</h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-7">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
              <input type="email" placeholder="you@example.com" className="eco-input" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs font-semibold text-green-600 hover:text-green-700 hover:underline">Forgot?</a>
              </div>
              <input type="password" placeholder="Enter your password" className="eco-input" />
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input type="checkbox" className="w-4 h-4 rounded accent-green-600" />
              <span className="text-sm text-gray-600">Keep me signed in</span>
            </label>

            <button type="submit"
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[.98] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-green-600/20">
              Sign in →
            </button>
          </form>

          <div className="mt-5 pt-5 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              No account yet?{' '}
              <Link to="/signup" className="text-green-600 font-bold hover:underline">Create one free</Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 italic">
          "Every report brings us closer to a cleaner Earth."
        </p>
      </div>
    </div>
  )
}
