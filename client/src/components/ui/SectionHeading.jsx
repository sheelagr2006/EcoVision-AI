export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-[0.7rem] font-extrabold text-green-600 uppercase tracking-[0.14em] bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight ${center ? 'mx-auto max-w-2xl' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base text-gray-500 leading-relaxed ${center ? 'mx-auto max-w-xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
