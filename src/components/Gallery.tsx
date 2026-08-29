"use client";

import { useState } from "react";
import { GALLERY, GalleryItem } from "@/data/content";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold text-secondary bg-secondary-container/30 px-4 py-2 rounded-full inline-block mb-3 uppercase tracking-wider">
              GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface">
              Sweet Moments
            </h2>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline transition-all"
          >
            <span>Tag Us on Instagram</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`${item.colSpan} ${item.rowSpan} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative cursor-pointer group border border-outline-variant/20`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={item.alt}
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white flex items-center justify-between w-full">
                  <span className="font-display font-bold text-base">{item.title}</span>
                  <span className="material-symbols-outlined text-lg">fullscreen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="max-h-[75vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="p-6 bg-surface flex items-center justify-between border-t border-outline-variant/20">
              <div>
                <h4 className="font-display font-bold text-xl text-on-surface">{selectedImage.title}</h4>
                <p className="text-sm text-on-surface-variant">{selectedImage.alt}</p>
              </div>
              <span className="text-xs text-primary font-bold bg-primary-container/30 px-3 py-1.5 rounded-full uppercase">
                Sweetfy Moment
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
