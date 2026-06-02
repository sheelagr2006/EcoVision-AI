import { useEffect, useState, useCallback } from 'react'
import Sidebar from '../components/layout/Sidebar'
import AdminStats from '../components/AdminStats'
import ReportsTable from '../components/ReportsTable'
import AnalyticsCharts from '../components/AnalyticsCharts'
import UserTable from '../components/UserTable'
import api from '../api/axios'

function authHeader() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [reports, setReports] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  const fetchAll = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const headers = authHeader()
      const [statsRes, reportsRes, usersRes] = await Promise.all([
        api.get('/admin/stats', { headers }),
        api.get('/admin/reports', { headers }),
        api.get('/admin/users', { headers }),
      ])
      setStats(statsRes.data)
      setReports(reportsRes.data)
      setUsers(usersRes.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load admin data.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchAll() }, [fetchAll])

  const handleStatusChange = async (id, status) => {
    try {
      const { data } = await api.patch(`/admin/reports/${id}/status`, { status }, { headers: authHeader() })
      setReports((prev) => prev.map((r) => (r._id === id ? data : r)))
      setStats((prev) => {
        if (!prev) return prev
        const old = reports.find((r) => r._id === id)
        if (!old || old.status === status) return prev
        return {
          ...prev,
          [old.status === 'in-review' ? 'inReview' : old.status]: prev[old.status === 'in-review' ? 'inReview' : old.status] - 1,
          [status === 'in-review' ? 'inReview' : status]: prev[status === 'in-review' ? 'inReview' : status] + 1,
        }
      })
    } catch {
      alert('Failed to update report status.')
    }
  }

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'reports', label: '📋 Reports' },
    { id: 'users', label: '👥 Users' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">⚙️</span>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
            <p className="text-gray-500 text-sm">Manage users, reports, and platform activity.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
              <span>⚠️</span> {error}
              <button onClick={fetchAll} className="ml-auto underline text-red-500 text-xs">Retry</button>
            </div>
          )}

          <AdminStats stats={stats} loading={loading} />

          <div className="flex gap-1 mb-6 border-b border-gray-200">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  activeTab === t.id
                    ? 'border-green-500 text-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <AnalyticsCharts stats={stats} reports={reports} />
          )}

          {activeTab === 'reports' && (
            <ReportsTable reports={reports} onStatusChange={handleStatusChange} loading={loading} />
          )}

          {activeTab === 'users' && (
            <UserTable users={users} loading={loading} />
          )}
        </div>
      </main>
    </div>
  )
}
