import { useState } from 'react'

const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-700',
  'in-review': 'bg-blue-100 text-blue-700',
  resolved: 'bg-green-100 text-green-700',
}

const CATEGORIES = ['All', 'Illegal Dumping', 'Air Pollution', 'Water Pollution', 'Deforestation', 'Noise Pollution', 'Other']
const STATUSES = ['All', 'pending', 'in-review', 'resolved']

export default function ReportsTable({ reports, onStatusChange, loading }) {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = reports.filter((r) => {
    const matchSearch =
      r._id.slice(-6).toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.location.toLowerCase().includes(search.toLowerCase()) ||
      (r.submittedBy?.name || '').toLowerCase().includes(search.toLowerCase())
    const matchCat = categoryFilter === 'All' || r.category === categoryFilter
    const matchStatus = statusFilter === 'All' || r.status === statusFilter
    return matchSearch && matchCat && matchStatus
  })

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="p-5 border-b border-gray-100 flex flex-wrap gap-3 items-center justify-between">
        <h2 className="font-semibold text-gray-700">Reports Management</h2>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search reports…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="py-16 text-center text-gray-400">Loading reports…</div>
      ) : filtered.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          <span className="text-4xl block mb-2">📭</span>
          <p className="text-sm">No reports found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                {['ID', 'Category', 'Description', 'Location', 'Submitted By', 'Status', 'Date', 'Action'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((r) => (
                <tr key={r._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-mono text-gray-400">…{r._id.slice(-6)}</td>
                  <td className="px-4 py-3 text-gray-700">{r.category}</td>
                  <td className="px-4 py-3 text-gray-600 max-w-[180px] truncate">{r.description}</td>
                  <td className="px-4 py-3 text-gray-600">{r.location}</td>
                  <td className="px-4 py-3 text-gray-600">{r.submittedBy?.name || 'N/A'}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={r.status}
                      onChange={(e) => onStatusChange(r._id, e.target.value)}
                      className="border border-gray-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      <option value="pending">Pending</option>
                      <option value="in-review">In Review</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
