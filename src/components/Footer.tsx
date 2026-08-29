import { BRAND_DATA } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface-container py-section-gap border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <img
              alt="Sweetfy Primary Logo"
              className="h-10 w-auto self-start"
              src={BRAND_DATA.logoUrl}
            />
            <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Crafting youthful, high-energy food and beverages for the student community. Fresh editorial aesthetics meet professional clarity.
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
            <h3 className="font-display font-bold text-lg text-on-surface">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm text-on-surface-variant hover:text-primary transition-colors">About Us</a>
              <a href="#products" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Products Menu</a>
              <a href="#gallery" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Gallery</a>
              <a href="#faq" className="text-sm text-on-surface-variant hover:text-primary transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-lg text-on-surface">Contact Info</h3>
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
            <h3 className="font-display font-bold text-lg text-on-surface">Operating Hours</h3>
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
                Open during campus bazaar events
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Sweetfy Brand. All Rights Reserved.</span>
          <span>Made with Love for Students</span>
        </div>
      </div>
    </footer>
  );
}
