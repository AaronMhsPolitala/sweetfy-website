import { BRAND_DATA } from "@/data/content";

export default function Location() {
  return (
    <section id="contact" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact & Location Details */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold text-tertiary bg-tertiary-container/30 px-4 py-2 rounded-full self-start uppercase tracking-wider">
            LOCATION & CONTACT
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface">
            Find Us Here.
          </h2>

          <div className="flex items-start gap-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/20 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <div>
              <p className="font-display font-bold text-lg text-on-surface">
                {BRAND_DATA.locationName}
              </p>
              <p className="text-base text-on-surface-variant mt-1 leading-relaxed">
                {BRAND_DATA.locationAddress}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              className="px-6 py-3.5 border border-outline-variant rounded-full font-display font-semibold text-sm text-on-surface hover:bg-surface-container hover:border-primary transition-all flex items-center gap-2 shadow-sm"
              href={BRAND_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open in Google Maps</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>

            <a
              className="px-6 py-3.5 bg-primary text-on-primary rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-md"
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Contact via WhatsApp</span>
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
          </div>
        </div>

        {/* Map Preview Card */}
        <div className="h-[360px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 relative group bg-surface-variant/40 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">map</span>
          </div>
          
          <h3 className="font-display font-bold text-xl text-on-surface mb-2">
            Pelaihari, Kalimantan Selatan
          </h3>
          
          <p className="text-sm text-on-surface-variant max-w-xs mb-6">
            Kunjungi booth Sweetfy saat event bazar kampus di area Pelaihari!
          </p>

          <a
            href={BRAND_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface text-primary border border-primary/30 px-5 py-2.5 rounded-full text-xs font-bold font-display hover:bg-primary hover:text-on-primary transition-all shadow-sm"
          >
            View Live Map Location
          </a>
        </div>
      </div>
    </section>
  );
}
