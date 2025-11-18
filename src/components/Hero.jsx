import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-slate-900/40 border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 text-white/80 text-xs ring-1 ring-white/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Building playful, interactive digital experiences
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Product-focused designer and engineer crafting modern portfolios, creative tools, and immersive interfaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.6)] transition-shadow">
                See my work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-800/70 text-white px-4 py-2.5 text-sm font-semibold ring-1 ring-white/10 hover:bg-slate-800">
                Contact me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <span>React</span>
              <span>•</span>
              <span>Three/Spline</span>
              <span>•</span>
              <span>Product Strategy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
