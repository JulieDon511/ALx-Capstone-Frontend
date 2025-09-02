export default function PageHeader({ title, subtitle, children }) {
  return (
    <section className="bg-gradient-to-b from-panel to-surface border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
        {children}
      </div>

    </section>
  )
}
