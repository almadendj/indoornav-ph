import { ArrowRight } from 'lucide-react';
import { navLinks, navCtaText } from '../content';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-[#0a0e1a]/80 border-b hairline' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute inset-0 border border-amber-500/60 rounded-sm rotate-45" />
            <div className="absolute w-1.5 h-1.5 bg-amber-500 rounded-full" />
            <div className="absolute w-5 h-5 border border-amber-500/30 rounded-full" style={{ animation: 'pulse-ring-slow 3s ease-out infinite' }} />
          </div>
          <span className="font-display text-lg tracking-tight">IndoorNav<span className="text-amber-500"> PH</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-white transition">{link.label}</a>
          ))}
        </div>
        <a href="#cta" className="group flex items-center gap-1.5 text-sm px-4 py-2 bg-amber-500 text-[#0a0e1a] rounded-full font-medium hover:bg-amber-400 transition">
          {navCtaText}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </nav>
  );
}
