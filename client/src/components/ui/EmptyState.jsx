export default function EmptyState({
  icon        = '📭',
  title       = 'Nothing here yet',
  description = '',
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-4xl mb-5 animate-float shadow-sm">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-gray-700 mb-1.5">{title}</h3>
      {description && (
        <p className="text-xs text-gray-400 max-w-xs leading-relaxed mb-6">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  )
}
