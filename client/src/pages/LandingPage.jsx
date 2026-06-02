import { Link } from 'react-router-dom'

const features = [
  { icon: '🛰️', title: 'AI Detection',    desc: 'Instantly identifies violations from photos using machine learning.',  bg: 'bg-blue-50'  },
  { icon: '📊', title: 'Live Analytics',  desc: 'Real-time dashboards show trends, hotspots, and resolution rates.',    bg: 'bg-green-50' },
  { icon: '🗺️', title: 'Geo Mapping',     desc: 'Every report is pinned on an interactive map by location.',            bg: 'bg-amber-50' },
  { icon: '⚡', title: 'Fast Resolution', desc: 'Smart alerts instantly route issues to the right authorities.',        bg: 'bg-purple-50'},
  { icon: '👥', title: 'Community',       desc: 'Citizens report violations with just a photo and a few taps.',         bg: 'bg-rose-50'  },
  { icon: '🔒', title: 'Secure & Private',desc: 'Your data is encrypted and never shared without your consent.',        bg: 'bg-teal-50'  },
]

const stats = [
  { value: '50K+', label: 'Reports Filed'   },
  { value: '120+', label: 'Cities Covered'  },
  { value: '89%',  label: 'Resolution Rate' },
  { value: '10K+', label: 'Active Citizens' },
]

const steps = [
  { n: '01', icon: '📷', title: 'Capture',   desc: 'Take a photo of the environmental issue on-site.'      },
  { n: '02', icon: '📝', title: 'Submit',    desc: 'Add category, location and a short description.'       },
  { n: '03', icon: '🤖', title: 'AI Review', desc: 'Our AI validates and classifies your report instantly.' },
  { n: '04', icon: '✅', title: 'Resolved',  desc: 'Authorities are alerted and track it to closure.'      },
]

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-green-900/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-700/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-8 sm:px-12 lg:px-20 py-24 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-200 text-sm font-semibold px-5 py-2 rounded-full mb-10 animate-fade-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
            Hackathon 2025 · Sustainability Track
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-8 animate-fade-up delay-1">
            Protect Our Planet<br />
            <span className="text-green-300">Powered by AI</span>
          </h1>

          <p className="text-green-100 text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up delay-2">
            EcoVision AI lets citizens detect, report, and track environmental violations.
            Governments get real-time analytics to act faster than ever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up delay-3">
            <Link to="/signup"
              className="w-full sm:w-auto bg-white text-green-700 font-extrabold px-10 py-5 rounded-2xl hover:bg-green-50 transition-colors shadow-2xl text-lg">
              Get started free →
            </Link>
            <Link to="/dashboard"
              className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-colors text-lg">
              View dashboard
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-up delay-4">
            {['✅ Free forever', '🔒 Secure', '🌍 Global', '🤖 AI-powered', '⚡ Real-time'].map(t => (
              <span key={t} className="text-sm text-green-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-green-600">
        <div className="w-full px-8 sm:px-12 lg:px-20 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-green-500/40">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-8 py-4">
                <p className="text-5xl font-extrabold text-white">{value}</p>
                <p className="text-green-200 text-base mt-2 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="w-full px-8 sm:px-12 lg:px-20">

          <div className="text-center mb-20">
            <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full mb-4">Features</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Everything you need</h2>
            <p className="text-gray-500 mt-4 text-xl max-w-2xl mx-auto">A complete platform for citizens, activists, and governments.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc, bg }) => (
              <div key={title}
                className="group flex gap-5 p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-200 cursor-default">
                <div className={`${bg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0`}>
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-gray-50 py-28">
        <div className="w-full px-8 sm:px-12 lg:px-20">

          <div className="text-center mb-20">
            <span className="inline-block text-sm font-bold text-green-600 uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full mb-4">How it works</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">From report to resolution</h2>
            <p className="text-gray-500 mt-4 text-xl">Four simple steps. Anyone can do it.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, icon, title, desc }) => (
              <div key={n} className="bg-white rounded-2xl p-9 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-green-600/25">
                  {icon}
                </div>
                <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Step {n}</p>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-800 py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-8 sm:px-12 lg:px-20 text-center">
          <span className="text-6xl block mb-6 animate-float">🌍</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Ready to make an impact?</h2>
          <p className="text-green-200 text-xl max-w-xl mx-auto mb-12">
            Join thousands of eco-conscious citizens protecting the planet today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup"
              className="w-full sm:w-auto bg-white text-green-700 font-extrabold px-10 py-5 rounded-2xl hover:bg-green-50 transition-colors shadow-2xl text-lg">
              Start for free →
            </Link>
            <Link to="/login"
              className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-colors text-lg">
              Sign in
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
