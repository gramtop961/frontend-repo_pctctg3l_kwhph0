import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            I blend product strategy with hands-on design and engineering. I care about clarity, playfulness, and shipping thoughtfully.
            My background spans marketplaces, creation tools, and growth. I lead with hypotheses, prototypes, and measurable outcomes.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              ['Focus', 'Product • Interaction • Systems'],
              ['Specialty', '0→1 • GTM • Design-Dev'],
              ['Now', 'Exploring new roles & collabs'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-white/60">{k}</div>
                <div className="font-medium text-white mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-8 ring-1 ring-white/10"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_45%)]" />
        </motion.div>
      </div>
    </section>
  );
}
