import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { getAssetUrl } from '../../utils/assetUrl';

interface TheRoomProps {
  onOpenLightbox: (index: number) => void;
  onOpenReservation: () => void;
}

export const TheRoom: React.FC<TheRoomProps> = ({ onOpenLightbox, onOpenReservation }) => {
  return (
    <section id="the-room" className="py-24 md:py-36 bg-espresso-950 text-cream-100 relative overflow-hidden border-t border-b border-espresso-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-cream-100/15">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-400 block mb-2">
              05 / ATMOSPHERE & ARCHITECTURE
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-cream-100">
              THE ROOM
            </h2>
          </div>

          <p className="text-stone-warm/75 text-xs md:text-sm font-sans max-w-md font-light leading-relaxed">
            Designed to feel like a private Italian villa: tactile textures, warm shadows, linen drapery, and low analog acoustic ambiance.
          </p>
        </div>

        {/* Dynamic Multi-Size Architecture Gallery */}
        <div className="space-y-12">
          {/* Space 1: Full-Width Monumental Dining Hall */}
          <div
            onClick={() => onOpenLightbox(0)}
            className="group relative cursor-pointer overflow-hidden border border-cream-100/15 shadow-2xl bg-espresso-900"
          >
            <img
              src={getAssetUrl('images/room-dining.jpg')}
              alt="The Dining Room at Oliva"
              className="w-full h-[450px] sm:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.92]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent p-6 sm:p-10 flex flex-col justify-end">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <span className="bg-terracotta-500 text-cream-50 text-[10px] font-sans tracking-widest2 uppercase px-2.5 py-1 font-semibold inline-block mb-1">
                    THE DINING ROOM
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-cream-100 font-normal">
                    Warm Terracotta & Olive Plaster Hall
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-warm/80 font-sans font-light">
                    Terracotta tiled floors, olive green plaster walls, and hand-rubbed walnut wood tables lit with pure beeswax candles.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-sans text-cream-100/80 group-hover:text-terracotta-400 transition-colors uppercase tracking-widest">
                  <Eye className="w-4 h-4" />
                  <span>VIEW FULLSPACE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Space 2 & 3: Split Asymmetric Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* The Bar */}
            <div
              onClick={() => onOpenLightbox(2)}
              className="lg:col-span-6 group relative cursor-pointer overflow-hidden border border-cream-100/15 shadow-xl bg-espresso-900"
            >
              <img
                src={getAssetUrl('images/room-bar.jpg')}
                alt="The Bar & Aperitivo at Oliva"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 font-semibold mb-1">
                  THE BAR
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-cream-100 font-normal">
                  Fluted Walnut & Aperitivo Counter
                </h4>
                <p className="text-xs text-stone-warm/75 font-sans font-light mt-1">
                  Rare Italian amari, small-producer vermouths, and custom crystal ice blocks.
                </p>
              </div>
            </div>

            {/* After Dark Terrace */}
            <div
              onClick={() => onOpenLightbox(4)}
              className="lg:col-span-6 group relative cursor-pointer overflow-hidden border border-cream-100/15 shadow-xl bg-espresso-900"
            >
              <img
                src={getAssetUrl('images/room-terrace.jpg')}
                alt="After Dark Terrace at Oliva"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 font-semibold mb-1">
                  AFTER DARK
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-cream-100 font-normal">
                  Candlelit Garden Courtyard
                </h4>
                <p className="text-xs text-stone-warm/75 font-sans font-light mt-1">
                  Open-air tables beneath old olive trees and twinkling fairy lights for late-night pasta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 pt-8 border-t border-cream-100/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-terracotta-400" />
            <span className="font-serif text-xl sm:text-2xl text-cream-100">
              Planning a private gathering or celebration?
            </span>
          </div>

          <Button
            variant="terracotta"
            size="md"
            onClick={onOpenReservation}
          >
            INQUIRE PRIVATE DINING
          </Button>
        </div>
      </div>
    </section>
  );
};
