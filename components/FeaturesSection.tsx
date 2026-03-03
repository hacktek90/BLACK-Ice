export function FeaturesSection() {
  const features = [
    {
      title: 'AI Core',
      description: 'Focus enhancement, health tracking, and automated intelligence workflows.',
    },
    {
      title: 'Productivity',
      description: 'Task management, habit tracking, and advanced planning systems.',
    },
    {
      title: 'Creation',
      description: 'Docs, slides, whiteboards, and mind maps in one unified interface.',
    },
    {
      title: 'Dev Tools',
      description: 'HTML viewers, Git utilities, and minimal developer environments.',
    },
  ]

  return (
    <section className="bg-[var(--glass-bg)] backdrop-blur-[20px] border border-[var(--glass-border)] rounded-3xl p-10 w-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] text-center">
      <span className="text-xs uppercase tracking-widest text-[var(--accent-blue)] mb-6 block font-semibold">
        System Capabilities
      </span>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 text-left mt-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-0.5"
          >
            <h3 className="text-[0.95rem] text-white mb-1.5 font-medium">
              {feature.title}
            </h3>
            <p className="text-[0.85rem] text-[var(--text-muted)] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
        <h2>All-in-One Web Tools & AI Utilities Platform</h2>
        <p>
          BlackICE Portal is a browser-based platform combining AI-powered tools,
          productivity apps, developer utilities, document creation systems, media
          tools, and real-time collaboration in a single minimal interface.
        </p>
        <ul>
          <li>Use AI tools for focus, health tracking, and automation</li>
          <li>Manage tasks, habits, notes, and planning workflows</li>
          <li>Create documents, slides, mind maps, and whiteboards</li>
          <li>Access developer utilities like HTML viewers and Git fetchers</li>
          <li>Collaborate via chat, calls, shared docs, and drawing boards</li>
        </ul>
      </div>
    </section>
  )
}
