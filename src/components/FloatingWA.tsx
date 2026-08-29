import { BRAND_DATA } from "@/data/content";

export default function FloatingWA() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-inverse-surface text-inverse-on-surface text-xs font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-white/10">
        Order via WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-inverse-surface rotate-45"></div>
      </div>

      {/* Floating Button */}
      <a
        className="w-16 h-16 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center shadow-2xl shadow-tertiary/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
        href={BRAND_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order via WhatsApp"
      >
        <span className="material-symbols-outlined text-[32px]">chat</span>
      </a>
    </div>
  );
}
