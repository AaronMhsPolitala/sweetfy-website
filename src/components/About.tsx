export default function About() {
  return (
    <section id="about" className="py-section-gap px-margin-mobile lg:px-margin-desktop relative">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Lifestyle Photo */}
          <div className="order-2 md:order-1 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-lg shadow-on-background/5 border border-outline-variant/20 group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Happy university students enjoying Sweetfy drinks and treats"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDauqblydsn7SUH8-Aa0UPSSPw7VvmIRoYVhRhABEJfoGs_g88Tm6NEa36Ct1qxp6ZF_QgaRZ3xokEwDRlyEjbigLlxu8fMd5lQZY2b9odE22D2qnLdLeI9D2pcvnS9LM9RZfENIy2uwHMlxZCyxELpt3nSD7peCEjDVozKwWaetgUcg5eDWOv66wyEN2R5lklFArb7dE8cr7O7snZ_ipy5hCnllmTBjBenfOsYy1kIZMBM60I_W8tOJg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Story Text */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <span className="text-xs font-bold text-tertiary bg-tertiary-container/30 px-4 py-2 rounded-full self-start tracking-wider uppercase">
              ABOUT SWEETFY
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface leading-tight">
              Simple Treats, Made Sweeter.
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed">
              Lahir dari semangat kreativitas mahasiswa, Sweetfy hadir untuk membawa kesegaran di tengah padatnya aktivitas kampus. Kami percaya bahwa kebahagiaan kecil bisa didapatkan dari camilan sederhana yang dibuat dengan bahan segar dan penuh keceriaan.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center border-2 border-surface z-30 shadow-sm">
                  <span className="material-symbols-outlined text-sm">person</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center border-2 border-surface z-20 shadow-sm">
                  <span className="material-symbols-outlined text-sm">favorite</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center border-2 border-surface z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                </div>
              </div>
              <p className="text-base text-on-surface-variant font-semibold">
                Loved by 500+ students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
