import { BRAND_DATA } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface-container py-section-gap border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <img
              alt="Sweetify Primary Logo"
              className="h-12 sm:h-14 w-auto self-start object-contain"
              src={BRAND_DATA.logoUrl}
            />
            <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Menyajikan makanan dan minuman manis nan segar untuk komunitas mahasiswa. Penuh keceriaan, rasa nikmat, dan kesegaran nyata.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-secondary hover:scale-110 transition-transform shadow-sm"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xl">photo_camera</span>
              </a>
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-tertiary hover:scale-110 transition-transform shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-lg text-on-surface">Tautan Cepat</h3>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Beranda</a>
              <a href="#about" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Tentang Kami</a>
              <a href="#products" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Menu Produk</a>
              <a href="#instant-order" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Form Pesanan</a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-lg text-on-surface">Informasi Kontak</h3>
            <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                <span>Jl. Ahmad Yani Km. 06, Pelaihari</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span>{BRAND_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>{BRAND_DATA.email}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Operating Hours */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-lg text-on-surface">Jam Operasional</h3>
            <div className="bg-surface-container-highest p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  {BRAND_DATA.operatingDays}
                </span>
              </div>
              <div className="text-2xl font-bold font-display text-primary">
                {BRAND_DATA.operatingHours}
              </div>
              <div className="text-xs text-on-surface-variant mt-1">
                Buka selama event bazar kampus
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Sweetfy Brand. Hak Cipta Dilindungi.</span>
          <span>Dibuat dengan Cinta untuk Mahasiswa</span>
        </div>
      </div>
    </footer>
  );
}
