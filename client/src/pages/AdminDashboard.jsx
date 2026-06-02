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

const filters = ['All', 'Pending', 'In Review', 'Resolved']

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
    { id: 'reports',  label: '📋 Reports'  },
    { id: 'users',    label: '👥 Users'    },
  ]

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

          {/* Error banner */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm flex items-center gap-2">
              <span>⚠️</span> {error}
              <button onClick={fetchAll} className="ml-auto underline text-red-500 text-xs">Retry</button>
            </div>
          )}

          {/* Stats */}
          <div className="mb-8">
            <AdminStats stats={stats} loading={loading} />
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-gray-200">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors border-b-2 -mb-px ${
                  activeTab === t.id
                    ? 'border-green-600 text-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          {activeTab === 'overview' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <AnalyticsCharts stats={stats} reports={reports} />
            </div>
          )}

          {activeTab === 'reports' && (
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
              <ReportsTable reports={reports} onStatusChange={handleStatusChange} loading={loading} />
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <UserTable users={users} loading={loading} />
            </div>
          )}

        </main>
      </div>
    </div>
  )
}
