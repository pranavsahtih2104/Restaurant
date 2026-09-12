import React, { useState } from 'react';
import { ArrowRight, Wine } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menuData';
import type { MenuCategory } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenFullMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('pasta');
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const categories: { id: MenuCategory; label: string; subtitle: string }[] = [
    { id: 'antipasti', label: 'ANTIPASTI', subtitle: 'To begin the table' },
    { id: 'pasta', label: 'PASTA FATTA A MANO', subtitle: 'Handmade daily at 08:00' },
    { id: 'secondi', label: 'SECONDI', subtitle: 'Wood hearth & sea' },
    { id: 'dolci', label: 'DOLCI', subtitle: 'Sweet finishes' },
    { id: 'cocktails', label: 'COCKTAILS', subtitle: 'Aperitivo & amari' },
    { id: 'wine', label: 'CARTA DEI VINI', subtitle: 'Natural & Italian reserves' },
  ];

  const currentCategoryItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 md:py-36 bg-parchment relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title & Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              03 / CUCINA CONTEMPORANEA
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950 leading-[0.95]">
              FROM THE<br />
              <span className="font-display italic text-olive-800">KITCHEN.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-xs sm:text-sm text-espresso-800/80 font-sans font-light leading-relaxed">
              Every morning our pastaio rolls fresh 30-yolk dough. Our menu changes subtly with the seasons, guided by Italian heritage and wild seasonal produce.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenFullMenu}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                VIEW FULL TASTING MENU
              </Button>
            </div>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 border-b border-espresso-900/10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setHoveredImage(null);
              }}
              className={`px-4 sm:px-6 py-3 font-editorial text-xs tracking-widest uppercase transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-olive-900 text-cream-100 border-olive-900 shadow-sm'
                  : 'bg-cream-50/60 text-espresso-800 border-espresso-900/10 hover:border-espresso-900/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Menu Layout: Two Columns with Hoverable Dish Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Menu Items List */}
          <div className="lg:col-span-7 space-y-8">
            {currentCategoryItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => item.image && setHoveredImage(item.image)}
                className="group relative pb-6 border-b border-espresso-900/10 hover:border-espresso-900/40 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-espresso-950 font-semibold group-hover:text-terracotta-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.highlight && (
                      <span className="text-[10px] font-sans tracking-widest uppercase text-terracotta-500 font-bold">
                        ★ HOUSE FAVORITE
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 font-serif text-xl sm:text-2xl font-bold text-olive-900 whitespace-nowrap">
                    <span>₹{item.price.toLocaleString()}</span>
                  </div>
                </div>

                {item.italianName && (
                  <p className="font-display italic text-sm text-stone-muted mt-1">
                    {item.italianName}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-espresso-800/80 mt-2.5 font-sans font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-1 font-sans">
                  {/* Dietary Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        size="xs"
                        variant={tag === 'Signature' ? 'terracotta' : 'olive'}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Wine Pairing */}
                  {item.pairing && (
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-muted italic">
                      <Wine className="w-3 h-3 text-terracotta-500" />
                      <span>Sommelier Pair: <strong className="text-espresso-900 font-normal">{item.pairing}</strong></span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenFullMenu}
                className="text-terracotta-600"
              >
                VIEW COMPLETE A LA CARTE CATALOG & WINES →
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Photo Card / Dynamic Spotlight */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="border border-espresso-900/15 shadow-2xl bg-espresso-950 overflow-hidden relative group">
              <img
                src={hoveredImage || (currentCategoryItems[0]?.image ?? '/images/signature-tartufo.jpg')}
                alt="Culinary highlight at Oliva"
                className="w-full h-[460px] object-cover object-center transition-all duration-700 ease-out filter brightness-95 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/95 via-espresso-950/30 to-transparent p-6 flex flex-col justify-end text-cream-100 font-sans">
                <span className="text-[10px] tracking-widest2 uppercase text-terracotta-400 font-semibold mb-1">
                  DAILY CULINARY FOCUS
                </span>
                <p className="font-serif text-xl text-cream-100">
                  Cooked to order with stone-milled flour & Italian olive oil.
                </p>
                <p className="text-xs text-stone-warm/70 mt-1">
                  Ask your server for our daily off-menu white truffle shavings and market fish specials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
