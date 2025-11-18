import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Asset Marketplace',
    tag: 'Platform • Product',
    desc: 'A marketplace for trading digital assets with real-time analytics, drops, and creator tooling.',
  },
  {
    title: 'Creator Studio',
    tag: 'Tooling • Design System',
    desc: 'End-to-end creation suite with templates, versioning, and rich preview powered by WebGL.',
  },
  {
    title: 'Portfolio Engine',
    tag: 'Case Study',
    desc: 'Customizable portfolio generator focused on playful interactions and performance.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="text-white/70 mt-2">A few projects that reflect my focus on product and interaction quality.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition-colors shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">{p.tag}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-white/95">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
