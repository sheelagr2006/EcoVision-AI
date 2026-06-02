const sizes = { sm: 'w-5 h-5 border-[3px]', md: 'w-9 h-9 border-4', lg: 'w-14 h-14 border-4' }

export default function LoadingSpinner({ size = 'md', text = '' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div className={`${sizes[size]} border-green-100 border-t-green-600 rounded-full animate-spin-slow`} />
      {text && <p className="text-sm text-gray-500 font-medium">{text}</p>}
    </div>
  )
}
