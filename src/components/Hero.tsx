import { BRAND_DATA } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[920px] flex items-center pt-12 pb-24 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-container/20 rounded-full blur-[80px] -z-10 animate-pulse-glow"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-5 flex flex-col gap-6 z-10 relative">
          <span className="text-xs font-semibold text-secondary uppercase tracking-[0.15em] flex items-center gap-2 lg:[writing-mode:vertical-rl] lg:absolute lg:-left-12 lg:top-0 lg:h-full lg:rotate-180">
            <span className="w-8 h-[1px] bg-secondary hidden lg:block"></span>
            SWEETFY BAZAAR
            <span className="w-8 h-[1px] bg-secondary hidden lg:block"></span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-on-surface leading-[1.1] tracking-tight">
            Pasti <br />
            <span className="text-primary italic font-serif">Ketagihan</span> <br />
            Dalam 1 Gigitan.
          </h1>

          <p className="text-lg text-on-surface-variant max-w-md font-normal leading-relaxed">
            {BRAND_DATA.subtagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-display font-bold text-base hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20 flex items-center gap-2 group"
            >
              <span>Pesan Sekarang</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href="#products"
              className="bg-transparent text-on-surface px-8 py-4 rounded-full font-display font-semibold text-base hover:bg-surface-container transition-colors duration-300 border border-outline-variant/40"
            >
              Lihat Produk
            </a>
          </div>
        </div>

        {/* Right Column Showcase */}
        <div className="lg:col-span-7 relative">
          <div className="absolute -inset-4 bg-tertiary-container/30 rounded-full blur-[60px] -z-10 mix-blend-multiply"></div>
          
          <div className="relative w-full h-[450px] sm:h-[600px] rounded-[40px] overflow-hidden shadow-2xl shadow-primary/10 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-4 border-surface">
            <img
              className="w-full h-full object-cover"
              alt="Sajian lezat Es Kulkul dan Es Teh Sweetfy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgc1wwX4oMms8Eqqct10WngQHvvoRZ-jeSy4nrB0O38yiPla0DGMq_YjRWo8Pdu6vRJjCtlwuXVsBSEdRuf_Hrevd2XMhytSTCR-dTPuTXnJLcBDDfuK3Lye1tPC6ICubShtjDvO1QDWfKoCkbpj20j-e0TJjQJgmIQLkqEeAxvrfrrzl3iMRt1Db4wVxllcVSl-MCSNh-Vt3QGq0sWSqsNyrYkCj4xjdbQRiqreImwqTndGeWWcpCPg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/25 to-transparent"></div>
          </div>

          {/* Floating Badge Card */}
          <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-surface/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-outline-variant/20 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-2xl">star</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Favorit Mahasiswa
                </p>
                <p className="font-display font-bold text-lg text-on-surface">
                  100% Menyegarkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
