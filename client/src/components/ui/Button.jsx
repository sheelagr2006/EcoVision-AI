const variants = {
  primary:   'bg-green-600 text-white hover:bg-green-700 shadow-sm shadow-green-700/20 hover:shadow-md hover:shadow-green-700/25',
  secondary: 'bg-white text-green-700 border-2 border-green-600 hover:bg-green-50',
  ghost:     'text-green-700 hover:bg-green-50',
  danger:    'bg-red-500 text-white hover:bg-red-600 shadow-sm shadow-red-500/20',
  dark:      'bg-green-900 text-white hover:bg-green-800',
}

const sizes = {
  sm:  'px-3.5 py-1.5 text-xs  rounded-lg  gap-1.5',
  md:  'px-5   py-2.5 text-sm  rounded-xl  gap-2',
  lg:  'px-7   py-3   text-sm  rounded-xl  gap-2',
  xl:  'px-9   py-4   text-base rounded-2xl gap-2.5',
}

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  className = '',
  loading  = false,
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center font-bold',
        'transition-all duration-200 active:scale-[.97]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant] ?? variants.primary,
        sizes[size]       ?? sizes.md,
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin-slow shrink-0" />
      )}
      {children}
    </button>
  )
}
