const palette = {
  green:  { wrap: 'bg-green-50  border-green-100',  iconBg: 'bg-green-100',  iconText: 'text-green-600',  val: 'text-green-700',  trend: 'bg-green-100  text-green-700'  },
  blue:   { wrap: 'bg-blue-50   border-blue-100',   iconBg: 'bg-blue-100',   iconText: 'text-blue-600',   val: 'text-blue-700',   trend: 'bg-blue-100   text-blue-700'   },
  amber:  { wrap: 'bg-amber-50  border-amber-100',  iconBg: 'bg-amber-100',  iconText: 'text-amber-600',  val: 'text-amber-700',  trend: 'bg-amber-100  text-amber-700'  },
  red:    { wrap: 'bg-red-50    border-red-100',    iconBg: 'bg-red-100',    iconText: 'text-red-500',    val: 'text-red-600',    trend: 'bg-red-100    text-red-600'    },
  purple: { wrap: 'bg-purple-50 border-purple-100', iconBg: 'bg-purple-100', iconText: 'text-purple-600', val: 'text-purple-700', trend: 'bg-purple-100 text-purple-700' },
}

export default function StatCard({ label, value, icon, color = 'green', trend }) {
  const c = palette[color] ?? palette.green
  return (
    <div className={`${c.wrap} rounded-2xl p-5 border shadow-sm hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <span className={`${c.iconBg} ${c.iconText} w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0`}>
          {icon}
        </span>
        {trend && (
          <span className={`${c.trend} text-[0.7rem] font-bold px-2 py-0.5 rounded-full`}>{trend}</span>
        )}
      </div>
      <p className={`text-3xl font-extrabold ${c.val} tabular-nums mb-1 leading-tight`}>{value}</p>
      <p className="text-xs font-semibold text-gray-500">{label}</p>
    </div>
  )
}
