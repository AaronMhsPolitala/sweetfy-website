"use client";

import { useState } from "react";
import { PRODUCTS, BRAND_DATA, Product } from "@/data/content";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredProducts =
    selectedCategory === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOrder = (product: Product) => {
    const text = encodeURIComponent(
      `Halo Sweetfy! Saya ingin memesan ${product.name} (${product.price}). Apakah ready?`
    );
    window.open(`https://wa.me/${BRAND_DATA.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="products" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-primary bg-primary-container/30 px-4 py-2 rounded-full self-start tracking-wider uppercase">
              MENU KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface">
              Favorit Manis & Segar
            </h2>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 bg-surface p-1.5 rounded-full border border-outline-variant/30 shadow-sm">
            {["Semua", "Es Kulkul", "Es Teh"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-surface rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden border border-outline-variant/20"
            >
              {/* Background Tint Shape */}
              <div className={`absolute top-0 right-0 w-36 h-36 ${product.containerBg} rounded-bl-full -z-0 group-hover:scale-125 transition-transform duration-500`}></div>

              {/* Product Image Box */}
              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative z-10">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.alt}
                  src={product.image}
                />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md text-on-surface px-4 py-1.5 rounded-full text-sm font-bold shadow-md font-display border border-outline-variant/30">
                  {product.price}
                </div>
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow z-10">
                <h3 className="text-2xl font-bold font-display text-on-surface mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* WhatsApp Order Button */}
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-surface-container text-on-surface py-3.5 rounded-full text-center font-display font-semibold text-sm hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Pesan via WhatsApp</span>
                  <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
