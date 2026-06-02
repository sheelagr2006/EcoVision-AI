const cards = [
  { key: 'totalUsers', label: 'Total Users', icon: '👥', color: 'text-blue-600' },
  { key: 'totalReports', label: 'Total Reports', icon: '📊', color: 'text-purple-600' },
  { key: 'pending', label: 'Pending', icon: '🚨', color: 'text-yellow-600' },
  { key: 'resolved', label: 'Resolved', icon: '✅', color: 'text-green-600' },
]

export default function AdminStats({ stats, loading }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map(({ key, label, icon, color }) => (
        <div key={key} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{icon}</span>
            <span className={`text-xs font-semibold uppercase tracking-wide ${color}`}>{label}</span>
          </div>
          <p className={`text-3xl font-bold ${color}`}>
            {loading ? '—' : (stats?.[key] ?? 0)}
          </p>
        </div>
      ))}
    </div>
  )
}
