export default function Card({ children, className = '', hover = false, padding = true }) {
  return (
    <div
      className={[
        'bg-white rounded-2xl border border-green-100 shadow-sm',
        hover ? 'hover:shadow-lg hover:shadow-green-900/8 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer' : '',
        padding ? 'p-6' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
