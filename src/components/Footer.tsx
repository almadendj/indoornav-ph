import { footerContent } from '../content';

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <div className="flex items-center gap-2.5">
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div className="absolute inset-0 border border-amber-500/60 rounded-sm rotate-45" />
            <div className="absolute w-1 h-1 bg-amber-500 rounded-full" />
          </div>
          <span className="font-display">{footerContent.brand}</span>
        </div>
        <div className="font-mono text-xs">{footerContent.copyright}</div>
      </div>
    </footer>
  );
}
