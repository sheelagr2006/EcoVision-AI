import Sidebar from '../components/layout/Sidebar'

const categories = ['Illegal Dumping', 'Air Pollution', 'Water Pollution', 'Deforestation', 'Noise Pollution', 'Other']

export default function ReportIssuePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-green-50">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Report an Issue</h1>
          <p className="text-gray-500 text-sm mb-8">Help us protect the environment by reporting eco violations.</p>

          <form className="bg-white rounded-2xl border border-green-100 p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={4}
                placeholder="Describe the issue in detail..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter address or GPS coordinates"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <div className="border-2 border-dashed border-green-200 rounded-lg p-8 text-center text-gray-400 hover:border-green-400 transition-colors cursor-pointer">
                <span className="text-3xl block mb-2">📷</span>
                <p className="text-sm">Click to upload or drag and drop</p>
                <p className="text-xs mt-1">PNG, JPG up to 5MB</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit Report
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
