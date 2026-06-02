const ROLE_COLORS = {
  admin: 'bg-purple-100 text-purple-700',
  citizen: 'bg-green-100 text-green-700',
}

export default function UserTable({ users, loading }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm mt-6">
      <div className="p-5 border-b border-gray-100">
        <h2 className="font-semibold text-gray-700">User Management</h2>
      </div>
      {loading ? (
        <div className="py-16 text-center text-gray-400">Loading users…</div>
      ) : users.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          <span className="text-4xl block mb-2">👤</span>
          <p className="text-sm">No users found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                {['Name', 'Email', 'Role', 'Registered'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((u) => (
                <tr key={u._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-700">{u.name}</td>
                  <td className="px-4 py-3 text-gray-500">{u.email}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${ROLE_COLORS[u.role] || 'bg-gray-100 text-gray-600'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
