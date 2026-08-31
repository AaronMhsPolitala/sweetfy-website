import { FEATURES } from "@/data/content";

export default function WhySweetfy() {
  return (
    <section id="why-sweetfy" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface relative">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface mb-4">
            Mengapa Memilih Sweetfy?
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Lebih dari sekadar jajanan, ini alasan kenapa kamu harus coba.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-surface-container-low/50 hover:bg-surface border border-outline-variant/20 shadow-none hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center ${feature.bgClass} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <span className="material-symbols-outlined text-4xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface mt-2">
                {feature.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
