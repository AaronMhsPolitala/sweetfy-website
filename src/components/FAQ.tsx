"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-section-gap px-margin-mobile lg:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Headline Column */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <span className="text-xs font-bold text-primary bg-primary-container/30 px-4 py-2 rounded-full self-start mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-on-surface mb-4">
            Ada Pertanyaan?
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Hal yang sering ditanyakan teman-teman mengenai produk dan pemesanan Sweetfy.
          </p>
        </div>

        {/* Right Accordions List */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/20 transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex justify-between items-center text-left font-display font-bold text-lg text-on-surface focus:outline-none gap-4"
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 text-primary ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-base text-on-surface-variant leading-relaxed animate-in fade-in duration-200 border-t border-outline-variant/10 pt-4">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
