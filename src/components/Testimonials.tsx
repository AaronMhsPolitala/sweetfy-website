import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface relative">
      <div className="max-w-container-max mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold text-secondary bg-secondary-container/30 px-4 py-2 rounded-full inline-block mb-6 uppercase tracking-wider">
          DARI MAHASISWA
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface mb-6">
          Dari Kampus, Untuk Semua.
        </h2>

        <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          Berawal dari project bazar kampus, Sweetfy tumbuh dari keinginan sederhana: menghadirkan jajanan yang jujur, segar, dan terjangkau untuk sesama mahasiswa. Kami bukan brand korporat; kami adalah teman sekelasmu yang kebetulan bikin es enak.
        </p>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface-container p-8 rounded-3xl relative border border-outline-variant/20 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-outline-variant/30 text-[64px] -z-0 group-hover:text-primary/20 transition-colors">
                format_quote
              </span>

              <p className="text-base text-on-surface italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <div
                  className={`w-11 h-11 rounded-full ${testimonial.colorClass} flex items-center justify-center font-bold font-display text-lg shadow-inner`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-sm font-bold font-display text-on-surface">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
