export default function PageHeader({ title, subtitle, children }) {
  return (
    <section className="bg-gradient-to-b from-panel to-surface border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-3xl sm:text-4xl font-semibold ">{title}</h1>
        {subtitle && <p className="mt-2  max-w-2xl">{subtitle}</p>}
        {children}
      </div>

    </section>
  )
}
