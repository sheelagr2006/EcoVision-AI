import Sidebar from '../components/layout/Sidebar'

const stats = [
  { label: 'Total Users', value: '0', icon: '👥' },
  { label: 'All Reports', value: '0', icon: '📊' },
  { label: 'Open Issues', value: '0', icon: '🚨' },
  { label: 'Resolved', value: '0', icon: '✅' },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">⚙️</span>
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <p className="text-gray-500 text-sm mb-8">Manage users, reports, and platform activity.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-green-100 p-5 text-center">
                <span className="text-3xl block mb-2">{icon}</span>
                <p className="text-2xl font-bold text-green-700">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-green-100 p-6">
            <h2 className="font-semibold text-gray-700 mb-4">All Reports</h2>
            <div className="text-center py-12 text-gray-400">
              <span className="text-4xl block mb-3">📭</span>
              <p className="text-sm">No reports to manage yet.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
