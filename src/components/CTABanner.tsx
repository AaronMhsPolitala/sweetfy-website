import { BRAND_DATA } from "@/data/content";

export default function CTABanner() {
  return (
    <section className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-primary-container text-on-primary-container text-center relative overflow-hidden">
      {/* Radiant Top Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent"></div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-8 py-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight">
          Craving Something <br />
          <span className="text-primary italic">Sweet & Fresh?</span>
        </h2>

        <p className="text-lg text-on-primary-container/80 max-w-md font-normal leading-relaxed">
          Jangan ditahan! Langsung chat kami buat pesan Es Kulkul atau Es Teh favoritmu sekarang.
        </p>

        <a
          className="bg-primary text-on-primary px-10 py-5 rounded-full font-display font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/30 flex items-center gap-3 group"
          href={BRAND_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-2xl group-hover:animate-bounce">
            chat
          </span>
          <span>Chat di WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
