import { Link } from 'react-router-dom'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[420px]">

        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-xl shadow-md shadow-green-600/25">🌱</div>
            <span className="text-xl font-extrabold text-gray-900">EcoVision <span className="text-green-600">AI</span></span>
          </Link>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Create your account</h1>
          <p className="text-gray-500 text-sm">Free forever. No credit card needed.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-7">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
              <input type="text" placeholder="Jane Doe" className="eco-input" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
              <input type="email" placeholder="you@example.com" className="eco-input" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input type="password" placeholder="Minimum 8 characters" className="eco-input" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">I am a</label>
              <select className="eco-input">
                <option value="citizen">🧑 Citizen</option>
                <option value="admin">⚙️ Administrator</option>
              </select>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer select-none pt-1">
              <input type="checkbox" className="w-4 h-4 rounded accent-green-600 mt-0.5 shrink-0" />
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the{' '}
                <a href="#" className="text-green-600 font-semibold hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-green-600 font-semibold hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button type="submit"
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[.98] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-green-600/20 mt-1">
              Create account →
            </button>
          </form>

          <div className="mt-5 pt-5 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
