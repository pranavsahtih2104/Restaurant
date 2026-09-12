import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import type { GalleryCategory } from '../../types';

interface GallerySectionProps {
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'ALL MOMENTS' },
    { id: 'food', label: 'FOOD & CRAFT' },
    { id: 'the-room', label: 'THE ROOM' },
    { id: 'people', label: 'THE PEOPLE' },
    { id: 'nights', label: 'NIGHTS' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 md:py-36 bg-parchment relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              06 / VISUAL ESSAY
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950">
              MOMENTS AT OLIVA
            </h2>
          </div>

          <p className="text-stone-muted text-xs md:text-sm font-sans max-w-sm font-light">
            A visual documentation of daily morning pasta rolls, cellar discoveries, evening candlelight, and gatherings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 font-editorial text-xs tracking-widest uppercase transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-olive-900 text-cream-100 border-olive-900 font-semibold'
                  : 'bg-cream-50/70 text-espresso-800 border-espresso-900/15 hover:border-espresso-900/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredItems.map((item) => {
            // Find global index for lightbox
            const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
            
            // Asymmetric layout spans
            const spanClass =
              item.aspect === 'wide'
                ? 'lg:col-span-8'
                : item.aspect === 'portrait'
                ? 'lg:col-span-4'
                : 'lg:col-span-6';

            const heightClass =
              item.aspect === 'portrait'
                ? 'h-[440px] sm:h-[480px]'
                : item.aspect === 'wide'
                ? 'h-[360px] sm:h-[420px]'
                : 'h-[320px] sm:h-[380px]';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className={`${spanClass} group relative cursor-pointer overflow-hidden border border-espresso-900/15 shadow-md bg-espresso-950`}
              >
                <div className={`w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                  />
                </div>

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/95 via-espresso-950/40 to-transparent p-6 flex flex-col justify-end opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream-100">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-sans tracking-widest uppercase text-terracotta-400 block font-semibold mb-0.5">
                        {item.subtext || item.category.toUpperCase()}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-cream-100 font-medium">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-warm/80 max-w-sm mt-1 line-clamp-2 font-sans font-light">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2 border border-cream-100/20 text-cream-100 group-hover:border-terracotta-400 group-hover:text-terracotta-400 transition-colors">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
