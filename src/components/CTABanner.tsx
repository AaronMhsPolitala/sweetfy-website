"use client";

import { useState, useEffect } from "react";
import { BRAND_DATA, PRODUCTS } from "@/data/content";

export default function CTABanner() {
  const [customerName, setCustomerName] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0]?.id || "es-kulkul");
  const [juiceFlavor, setJuiceFlavor] = useState<"Alpukat" | "Mangga">("Alpukat");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const handleProductSelect = (e: CustomEvent<string>) => {
      if (e.detail) {
        setSelectedProductId(e.detail);
      }
    };

    window.addEventListener("selectProductOrder" as any, handleProductSelect as any);
    return () => window.removeEventListener("selectProductOrder" as any, handleProductSelect as any);
  }, []);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const unitPrice = selectedProduct?.numericPrice || 3000;
  const totalPrice = unitPrice * quantity;

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      alert("Harap masukkan nama pemesan terlebih dahulu.");
      return;
    }

    const productName = selectedProductId === "jus-buah"
      ? `${selectedProduct.name} (${juiceFlavor})`
      : selectedProduct.name;

    const message =
      `Halo Sweetify! Saya ingin membuat pesanan:\n\n` +
      `👤 *Nama*: ${customerName}\n` +
      `🍹 *Menu*: ${productName} (${selectedProduct.price})\n` +
      `🔢 *Jumlah*: ${quantity} porsi\n` +
      `💰 *Estimasi Total*: Rp ${totalPrice.toLocaleString("id-ID")}\n` +
      (notes.trim() ? `📝 *Catatan*: ${notes}\n\n` : `\n`) +
      `Apakah pesanan bisa diproses sekarang? Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="instant-order" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold text-primary bg-primary-container/40 px-4 py-2 rounded-full self-start tracking-wider uppercase">
              PESAN CEPAT
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-on-surface leading-tight">
              Formulir Pesanan Instant
            </h2>

            <p className="text-base text-on-surface-variant leading-relaxed">
              Silakan isi form di samping untuk membuat draf pesanan langsung ke WhatsApp booth Sweetify.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="p-5 bg-surface rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  <h4 className="font-display font-bold text-base text-on-surface">
                    Lokasi Booth Utama
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {BRAND_DATA.locationAddress}
                </p>
              </div>

              <div className="p-5 bg-surface rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                  <h4 className="font-display font-bold text-base text-on-surface">
                    Jadwal Stand Buka
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {BRAND_DATA.operatingDays} ( {BRAND_DATA.operatingHours} )
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form Card */}
          <div className="lg:col-span-7 bg-surface p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-md">
            <h3 className="text-2xl font-bold font-display text-on-surface mb-1">
              Isi Detail Pesanan
            </h3>
            <p className="text-xs text-on-surface-variant mb-6">
              Total estimasi akan dihitung secara otomatis.
            </p>

            <form onSubmit={handleSendOrder} className="flex flex-col gap-5">
              {/* Nama Pemesan */}
              <div className="flex flex-col gap-2">
                <label htmlFor="customerName" className="text-xs font-bold uppercase tracking-wider text-on-surface">
                  NAMA PEMESAN <span className="text-primary">*</span>
                </label>
                <input
                  id="customerName"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Pilihan Menu */}
              <div className="flex flex-col gap-2">
                <label htmlFor="productSelect" className="text-xs font-bold uppercase tracking-wider text-on-surface">
                  PILIHAN MENU <span className="text-primary">*</span>
                </label>
                <select
                  id="productSelect"
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                >
                  {PRODUCTS.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} — {product.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub-pilihan Varian khusus Jus Buah */}
              {selectedProductId === "jus-buah" && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                    VARIAN JUS BUAH <span className="text-primary">* (Default: Alpukat)</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setJuiceFlavor("Alpukat")}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                        juiceFlavor === "Alpukat"
                          ? "bg-primary text-on-primary border-primary shadow-sm"
                          : "bg-surface-container-low text-on-surface-variant border-outline-variant/50 hover:bg-surface-container"
                      }`}
                    >
                      <span>🥑 Jus Alpukat</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setJuiceFlavor("Mangga")}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                        juiceFlavor === "Mangga"
                          ? "bg-primary text-on-primary border-primary shadow-sm"
                          : "bg-surface-container-low text-on-surface-variant border-outline-variant/50 hover:bg-surface-container"
                      }`}
                    >
                      <span>🥭 Jus Mangga</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Jumlah Porsi & Estimasi Total */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                {/* Counter Porsi */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                    JUMLAH PORSI
                  </label>
                  <div className="flex items-center justify-between bg-surface-container-low border border-outline-variant/50 rounded-xl p-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center font-bold text-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      -
                    </button>
                    <span className="font-display font-bold text-base text-on-surface">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center font-bold text-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Estimasi Total Box */}
                <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    ESTIMASI TOTAL
                  </span>
                  <span className="text-2xl font-extrabold font-display text-primary mt-0.5">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Catatan Tambahan */}
              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-on-surface">
                  CATATAN TAMBAHAN
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Contoh: Es sedikit saja / Topping meses cokelat..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl p-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit WhatsApp Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-primary text-on-primary py-4 rounded-xl font-display font-bold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/25 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>KIRIM PESANAN KE WHATSAPP</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
