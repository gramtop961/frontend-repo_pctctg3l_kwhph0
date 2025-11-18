import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Let’s build something fun</h3>
              <p className="mt-3 text-white/75">Reach out for roles, collaborations, or just to say hi.</p>
            </div>
            <form className="grid gap-3">
              <input className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-white/20" placeholder="Your name" />
              <input className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-white/20" placeholder="Email" />
              <textarea rows={4} className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-white/20" placeholder="Message" />
              <button type="button" className="mt-1 inline-flex justify-center rounded-xl bg-white text-slate-900 px-4 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.6)]">
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
