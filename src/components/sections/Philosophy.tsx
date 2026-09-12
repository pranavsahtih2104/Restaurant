import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PhilosophyProps {
  onOpenReservation: () => void;
  onOpenStory: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = () => {
  return (
    <section id="philosophy" className="py-24 md:py-36 bg-parchment relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500">
            01 / OUR PHILOSOPHY
          </span>
          <div className="w-12 h-[1px] bg-terracotta-500/40" />
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Headline & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950 leading-[0.96]">
              FOOD IS<br />
              <span className="font-display italic text-olive-800">A REASON</span><br />
              TO GATHER.
            </h2>

            <div className="space-y-6 text-espresso-800/90 font-sans font-light text-base sm:text-lg leading-relaxed max-w-lg">
              <p className="border-l-2 border-terracotta-500 pl-4 italic font-display text-xl sm:text-2xl text-espresso-900">
                “At Oliva, Italian cooking is less about following rules and more about respecting ingredients, technique, and the people sitting around the table.”
              </p>

              <p className="text-sm sm:text-base text-stone-muted leading-relaxed">
                In a world that hurries, we invite you to linger. We believe that true luxury lies in unhurried conversations, a bottle of Piedmontese red uncorked without pretense, hand-rolled pasta finished with aged butter, and the warmth of a candle slowly burning down through dessert.
              </p>
            </div>

            {/* Editorial Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-espresso-900/10 font-sans">
              <div>
                <span className="font-serif text-3xl font-bold text-olive-900 block">30+</span>
                <span className="text-xs uppercase tracking-wider text-stone-muted font-medium">
                  Artisanal Italian Vineyards
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-terracotta-500 block">72h</span>
                <span className="text-xs uppercase tracking-wider text-stone-muted font-medium">
                  Fermented Sourdough
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2 font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-950 hover:text-terracotta-500 transition-colors group"
              >
                <span>DISCOVER OUR FULL STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Asymmetric Image Duo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Large Image */}
              <div className="w-full sm:w-10/12 ml-auto overflow-hidden border border-espresso-900/15 shadow-xl bg-espresso-950">
                <img
                  src="/images/dish-burrata.jpg"
                  alt="Fresh Burrata Pugliese with blistered heirloom cherry tomatoes and cold pressed basil oil"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="p-4 bg-cream-100/90 text-xs text-espresso-900 flex justify-between items-center border-t border-espresso-900/10 font-sans">
                  <span className="font-medium">Burrata Pugliese & Heirloom Confit</span>
                  <span className="text-stone-muted font-mono">01.1 / PRIMI</span>
                </div>
              </div>

              {/* Secondary Overlapping Detail Image */}
              <div className="sm:absolute -bottom-10 -left-6 w-8/12 sm:w-64 mt-6 sm:mt-0 overflow-hidden border-2 border-parchment shadow-2xl bg-espresso-900">
                <img
                  src="/images/room-details.jpg"
                  alt="Candlelit olive oil dish and wine at Oliva"
                  className="w-full h-56 sm:h-72 object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="p-3 bg-espresso-950 text-cream-100 text-[11px] font-sans">
                  <span className="font-editorial uppercase tracking-wider text-terracotta-400 block text-[9px]">
                    TABLECRAFT
                  </span>
                  <span>Beeswax Candlelight & Single-Estate Olive Oil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
