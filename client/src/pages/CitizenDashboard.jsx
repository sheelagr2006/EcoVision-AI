import Sidebar from '../components/layout/Sidebar'

const stats = [
  { label: 'Reports Submitted', value: '0', icon: '📋' },
  { label: 'Issues Resolved', value: '0', icon: '✅' },
  { label: 'Pending Review', value: '0', icon: '⏳' },
]

export default function CitizenDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Citizen Dashboard</h1>
          <p className="text-gray-500 text-sm mb-8">Track and manage your eco reports.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {stats.map(({ label, value, icon }) => (
              <div key={label} className="bg-white rounded-xl border border-green-100 p-6 flex items-center gap-4">
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className="text-2xl font-bold text-green-700">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-green-100 p-6">
            <h2 className="font-semibold text-gray-700 mb-4">Recent Reports</h2>
            <div className="text-center py-12 text-gray-400">
              <span className="text-4xl block mb-3">📭</span>
              <p className="text-sm">No reports submitted yet.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
