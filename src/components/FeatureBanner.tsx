import { TOPPINGS } from "@/data/content";

export default function FeatureBanner() {
  return (
    <section className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-primary text-on-primary relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column Content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-[1.15]">
            Es Kulkul, <br />
            <span className="text-primary-fixed italic font-normal">But Make It More Fun.</span>
          </h2>

          <p className="text-lg text-primary-fixed-dim max-w-md leading-relaxed font-normal">
            Bukan cuma buah lapis cokelat biasa. Di Sweetfy, kamu bebas pilih topping favoritmu biar makin seru!
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xs font-bold text-primary-fixed uppercase tracking-widest">
              Add Some Sweetness (Free Toppings)
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {TOPPINGS.map((topping) => (
                <div
                  key={topping.name}
                  className="bg-on-primary/10 px-5 py-2.5 rounded-full border border-on-primary/25 backdrop-blur-md text-sm font-semibold flex items-center gap-2 hover:bg-on-primary/20 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                  <span>{topping.name}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-primary-fixed/70 italic mt-1">
              *Pilihan topping gratis dapat dipilih saat memesan di booth/WhatsApp.
            </p>
          </div>
        </div>

        {/* Right Column Macro Imagery */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-fixed/20 rounded-full blur-[80px] -z-10"></div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="h-56 md:h-64 rounded-3xl overflow-hidden mt-8 shadow-2xl border-2 border-white/20 group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Rich chocolate dip macro view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAo_6XB3Pojvtt4Q7graaxxwAficbPYzMgjCaokuGeABoXKTwSacN_2yDVCfleQ_iowc8jwg2CxZNuiLTULkFHdZ9NvPyCe9a-3yyKXzgBlZ-ouWZL3qNFUShAG0U0Vz6vCNgJZLoN18VBoKwXzc0l2HpxO7-PLvmqLIwyquvw-oAJeqsh0VJbz0-WKg-b4dCxhIhWpA8OIVICcrg0hs6q75jQld2xhcu2UgHjEizALOZm0MtMn_UqNg"
              />
            </div>

            <div className="h-56 md:h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl border-2 border-white/20 group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Colorful sprinkles topping macro shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnZDF_3ImJUM7Px1JirpTR6LXgOrzhep0kF27mWMYWGTy9NvadDhPqrXH1t_7tVQCEok_P9ZIXoT1QrqHqJRDE6pr1zf55DPdkCsp3MlmAiellwY5rCMrb9xHqSeGbwPOSbV1GRv5AciIPnx6gH1djTmLxcljMT8KOnajx-4gvYSyBmP_UO-c5AORkbMaLjp1Ed0Za1PYC9Vyd687oBwN4Tch-UAexVmYH9NFQ_Bm_iLESEgNDSHuT8Q"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
