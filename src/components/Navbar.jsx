import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Your Name</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-3 py-2 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_14px_38px_-12px_rgba(255,255,255,0.55)] transition-shadow">
                <Mail size={16} />
                <span>Let’s talk</span>
              </a>
            </div>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg bg-white/5 text-white/90">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="grid gap-3">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">
                    {n.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
