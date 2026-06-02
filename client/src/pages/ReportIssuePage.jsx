import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'

const categories = [
  { value: 'Illegal Dumping',  icon: '🗑️' },
  { value: 'Air Pollution',    icon: '💨' },
  { value: 'Water Pollution',  icon: '💧' },
  { value: 'Deforestation',    icon: '🌲' },
  { value: 'Noise Pollution',  icon: '🔊' },
  { value: 'Other',            icon: '⚠️' },
]

const severities = [
  { label: 'Low',    dot: 'bg-green-500', active: 'border-green-500 bg-green-50 text-green-700' },
  { label: 'Medium', dot: 'bg-amber-500', active: 'border-amber-500 bg-amber-50 text-amber-700' },
  { label: 'High',   dot: 'bg-red-500',   active: 'border-red-500   bg-red-50   text-red-700'   },
]

export default function ReportIssuePage() {
  const [category, setCategory] = useState('')
  const [severity, setSeverity] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [file,     setFile]     = useState(null)

  const pickFile = (f) => { if (f) setFile(f) }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 lg:px-10 h-16 flex items-center shrink-0">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Report an Issue</h1>
            <p className="text-xs text-gray-400">Help protect the environment by reporting violations</p>
          </div>
        </div>

        <main className="flex-1 p-8 lg:p-10 overflow-auto">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>

            {/* LEFT column */}
            <div className="flex flex-col gap-6">

              {/* Category */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="font-bold text-gray-900 mb-1">
                  Issue Category <span className="text-red-500">*</span>
                </h2>
                <p className="text-sm text-gray-400 mb-5">What type of environmental violation is this?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map(({ value, icon }) => (
                    <button key={value} type="button" onClick={() => setCategory(value)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                        category === value
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}>
                      <span className="text-xl shrink-0">{icon}</span>
                      <span className="text-xs leading-tight text-left">{value}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="font-bold text-gray-900 mb-1">
                  Description <span className="text-red-500">*</span>
                </h2>
                <p className="text-sm text-gray-400 mb-4">Describe what, when, and how severe the issue is.</p>
                <textarea rows={6} placeholder="e.g. Industrial waste dumped near the river bank on Elm Street, visible since Monday…"
                  className="eco-input resize-none" />
                <p className="text-[11px] text-gray-400 mt-2 text-right">0 / 500</p>
              </div>

              {/* Severity */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="font-bold text-gray-900 mb-4">Severity Level</h2>
                <div className="flex gap-3">
                  {severities.map(({ label, dot, active }) => (
                    <button key={label} type="button" onClick={() => setSeverity(label)}
                      className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl border-2 text-sm font-bold transition-all ${
                        severity === label ? active : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                      }`}>
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dot}`} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT column */}
            <div className="flex flex-col gap-6">

              {/* Location */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="font-bold text-gray-900 mb-1">
                  Location <span className="text-red-500">*</span>
                </h2>
                <p className="text-sm text-gray-400 mb-4">Enter an address or use your current GPS position.</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter address or landmark…" className="eco-input" />
                  <button type="button" title="Use GPS"
                    className="shrink-0 w-12 h-11 bg-gray-50 border border-gray-200 rounded-xl text-xl hover:bg-gray-100 transition-colors flex items-center justify-center">
                    📍
                  </button>
                </div>
                <div className="mt-4 h-40 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span>🗺️</span> Map preview will appear here
                </div>
              </div>

              {/* Upload */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <h2 className="font-bold text-gray-900 mb-1">Upload Evidence</h2>
                <p className="text-sm text-gray-400 mb-5">A photo significantly speeds up resolution.</p>
                <div
                  onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); pickFile(e.dataTransfer.files[0]) }}
                  onClick={() => document.getElementById('ev-file').click()}
                  className={`border-2 border-dashed rounded-2xl py-14 text-center cursor-pointer transition-all select-none ${
                    dragOver ? 'border-green-500 bg-green-50'
                    : file    ? 'border-green-400 bg-green-50'
                             : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}>
                  <input id="ev-file" type="file" accept="image/*" className="hidden"
                    onChange={e => pickFile(e.target.files[0])} />
                  {file ? (
                    <>
                      <span className="text-4xl block mb-3">✅</span>
                      <p className="font-bold text-green-700">{file.name}</p>
                      <p className="text-sm text-gray-400 mt-1">Click to replace</p>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl block mb-3">📷</span>
                      <p className="font-semibold text-gray-700">Drag & drop or click to upload</p>
                      <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10 MB</p>
                    </>
                  )}
                </div>
              </div>

              {/* Submit row */}
              <div className="flex gap-4">
                <button type="button"
                  className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
                <button type="submit"
                  className="flex-1 py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors shadow-lg shadow-green-600/25">
                  Submit Report 🌍
                </button>
              </div>
            </div>

          </form>
        </main>
      </div>
    </div>
  )
}
