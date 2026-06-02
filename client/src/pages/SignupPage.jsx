import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'citizen' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!form.name || !form.email || !form.password) {
      setError('All fields are required')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try {
      await api.post('/auth/register', form)
      setSuccess('Account created! Redirecting to login...')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-5 flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 mb-5 flex items-center gap-2">
              <span>✅</span> {success}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="eco-input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="eco-input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className="eco-input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">I am a</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="eco-input"
              >
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[.98] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-green-600/20 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {loading ? 'Creating account...' : 'Create account →'}
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
