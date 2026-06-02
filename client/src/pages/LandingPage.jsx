import { Link } from 'react-router-dom'

const features = [
  { icon: '🛰️', title: 'AI Detection', desc: 'Detect environmental issues using machine learning.' },
  { icon: '📊', title: 'Real-time Analytics', desc: 'Monitor environmental health with live data dashboards.' },
  { icon: '🗺️', title: 'Geo Mapping', desc: 'Visualize issues on an interactive map.' },
  { icon: '🔔', title: 'Smart Alerts', desc: 'Get notified about critical environmental events.' },
]

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-5xl mb-6 block">🌍</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Protect the Planet with <span className="text-green-300">AI</span>
          </h1>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            EcoVision AI empowers citizens and governments to detect, report, and resolve
            environmental issues faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why EcoVision AI?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                <span className="text-4xl block mb-4">{icon}</span>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to make an impact?</h2>
        <p className="text-green-600 mb-6">Join thousands of eco-conscious citizens today.</p>
        <Link
          to="/signup"
          className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Join Now
        </Link>
      </section>
    </div>
  )
}
