import { Link } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'

const stats = [
  { label: 'Reports Submitted', value: '0', icon: '📋', bg: 'bg-green-50',  val: 'text-green-700',  border: 'border-green-200', trend: '+0 this week' },
  { label: 'Issues Resolved',   value: '0', icon: '✅', bg: 'bg-blue-50',   val: 'text-blue-700',   border: 'border-blue-200',  trend: '0% rate'      },
  { label: 'Pending Review',    value: '0', icon: '⏳', bg: 'bg-amber-50',  val: 'text-amber-700',  border: 'border-amber-200', trend: 'Awaiting'     },
  { label: 'AI Detections',     value: '0', icon: '🤖', bg: 'bg-purple-50', val: 'text-purple-700', border: 'border-purple-200',trend: 'Scanned'      },
]

const recentCols = ['Issue', 'Category', 'Location', 'Status', 'Date']

export default function CitizenDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 lg:px-10 h-16 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Citizen Dashboard</h1>
            <p className="text-xs text-gray-400">Track and manage your eco reports</p>
          </div>
          <Link to="/report"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-green-600/20 flex items-center gap-2">
            <span>+</span> New Report
          </Link>
        </div>

        {/* Body */}
        <main className="flex-1 p-8 lg:p-10 overflow-auto">

          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map(({ label, value, icon, bg, val, border, trend }) => (
              <div key={label} className={`${bg} border ${border} rounded-2xl p-6 flex flex-col gap-3`}>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{icon}</span>
                  <span className="text-[11px] font-semibold text-gray-400 bg-white/70 px-2 py-0.5 rounded-full border border-gray-200">{trend}</span>
                </div>
                <div>
                  <p className={`text-4xl font-extrabold ${val}`}>{value}</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-gray-900">Activity Overview</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Your reports over the last 30 days</p>
                </div>
                <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">Last 30 days</span>
              </div>
              <div className="h-64 flex flex-col items-center justify-center gap-3 text-gray-400 bg-gradient-to-br from-gray-50 to-white">
                <span className="text-5xl">📈</span>
                <p className="text-sm font-semibold text-gray-600">No data yet</p>
                <p className="text-xs text-gray-400">Submit reports to see your activity chart</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Reports by Category</h2>
                <p className="text-xs text-gray-400 mt-0.5">Breakdown of your submissions</p>
              </div>
              <div className="h-64 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-green-50/40 to-white">
                <span className="text-5xl">🍩</span>
                <p className="text-sm font-semibold text-gray-600">No categories yet</p>
                <p className="text-xs text-gray-400">Chart will appear after your first report</p>
              </div>
            </div>
          </div>

          {/* Reports table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-gray-900">Recent Reports</h2>
                <p className="text-xs text-gray-400 mt-0.5">Your latest submissions</p>
              </div>
              <Link to="/report" className="text-sm font-bold text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors border border-green-200">
                + Add new
              </Link>
            </div>
            <div className="hidden sm:grid grid-cols-5 px-6 py-3 bg-gray-50 border-b border-gray-100">
              {recentCols.map(c => (
                <span key={c} className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">{c}</span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center px-4">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl border border-gray-100 shadow-sm">📭</div>
              <div>
                <p className="font-bold text-gray-700">No reports yet</p>
                <p className="text-sm text-gray-400 mt-1">Submit your first report to get started</p>
              </div>
              <Link to="/report"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-md shadow-green-600/20">
                Report an Issue
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
