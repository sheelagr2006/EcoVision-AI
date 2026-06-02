import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line,
} from 'recharts'

const STATUS_COLORS = ['#facc15', '#60a5fa', '#4ade80']
const CATEGORY_COLOR = '#6ee7b7'

function buildStatusData(stats) {
  return [
    { name: 'Pending', value: stats.pending || 0 },
    { name: 'In Review', value: stats.inReview || 0 },
    { name: 'Resolved', value: stats.resolved || 0 },
  ]
}

function buildCategoryData(reports) {
  const counts = {}
  reports.forEach((r) => { counts[r.category] = (counts[r.category] || 0) + 1 })
  return Object.entries(counts).map(([name, value]) => ({ name, value }))
}

function buildMonthlyData(reports) {
  const counts = {}
  reports.forEach((r) => {
    const key = new Date(r.createdAt).toLocaleString('default', { month: 'short', year: '2-digit' })
    counts[key] = (counts[key] || 0) + 1
  })
  return Object.entries(counts)
    .sort((a, b) => new Date('1 ' + a[0]) - new Date('1 ' + b[0]))
    .map(([name, value]) => ({ name, value }))
}

export default function AnalyticsCharts({ stats, reports }) {
  const statusData = buildStatusData(stats || {})
  const categoryData = buildCategoryData(reports)
  const monthlyData = buildMonthlyData(reports)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-700 mb-4 text-sm">Status Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label>
              {statusData.map((_, i) => <Cell key={i} fill={STATUS_COLORS[i]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-700 mb-4 text-sm">Waste Category Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={categoryData} margin={{ left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="value" fill={CATEGORY_COLOR} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-700 mb-4 text-sm">Monthly Reports Overview</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={monthlyData} margin={{ left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
