import Sidebar from '../components/layout/Sidebar'

const stats = [
  { label: 'Total Users',  value: '0', icon: '👥', bg: 'bg-blue-50',   val: 'text-blue-700',   border: 'border-blue-200',   trend: 'Registered'  },
  { label: 'All Reports',  value: '0', icon: '📊', bg: 'bg-green-50',  val: 'text-green-700',  border: 'border-green-200',  trend: 'Submitted'   },
  { label: 'Open Issues',  value: '0', icon: '🚨', bg: 'bg-red-50',    val: 'text-red-600',    border: 'border-red-200',    trend: 'Unresolved'  },
  { label: 'Resolved',     value: '0', icon: '✅', bg: 'bg-purple-50', val: 'text-purple-700', border: 'border-purple-200', trend: '0% rate'     },
]

const filters = ['All', 'Pending', 'In Review', 'Resolved']
const headers = ['Report ID', 'Category', 'Location', 'Submitted By', 'Status', 'Actions']

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 lg:px-10 h-16 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-md">⚙️</div>
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Admin Dashboard</h1>
            <p className="text-xs text-gray-400">Manage users, reports and platform activity</p>
          </div>
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

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            {[
              { title: 'Issues by Category', sub: 'Distribution of all report types',    icon: '🍩', bg: 'from-green-50 to-emerald-50/60'  },
              { title: 'Weekly Reports',      sub: 'Submission trend over the last month', icon: '📊', bg: 'from-blue-50 to-sky-50/60'        },
            ].map(({ title, sub, icon, bg }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="font-bold text-gray-900">{title}</h2>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
                <div className={`h-64 bg-gradient-to-br ${bg} flex flex-col items-center justify-center gap-3`}>
                  <span className="text-5xl">{icon}</span>
                  <p className="text-sm font-semibold text-gray-500">Chart coming soon</p>
                  <p className="text-xs text-gray-400">Data will populate once reports are submitted</p>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-bold text-gray-900">All Reports</h2>
                <p className="text-xs text-gray-400 mt-0.5">Review and manage citizen submissions</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {filters.map((f, i) => (
                  <button key={f}
                    className={`text-sm font-bold px-4 py-1.5 rounded-full border transition-colors ${
                      i === 0
                        ? 'bg-green-600 text-white border-green-600'
                        : 'text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-6 px-6 py-3 bg-gray-50 border-b border-gray-100">
              {headers.map(h => (
                <span key={h} className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">{h}</span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center px-4">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl border border-gray-100 shadow-sm">📋</div>
              <div>
                <p className="font-bold text-gray-700">No reports to manage</p>
                <p className="text-sm text-gray-400 mt-1">Citizen submissions will appear here</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
