import React from 'react';
import { ArrowDownRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenMenu }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 md:py-32 flex flex-col justify-between overflow-hidden bg-parchment">
      {/* Background subtle grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />

      {/* Vertical Side Accent Text: Left */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20 select-none">
        <span className="vertical-rl font-sans text-[10px] tracking-widest3 uppercase text-stone-muted rotate-180">
          MILANO • ROMA • OLIVA
        </span>
        <div className="w-[1px] h-16 bg-espresso-900/20" />
        <span className="font-serif italic text-xs text-terracotta-500">
          N° 18
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        {/* Top Badges & Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="text-[11px] font-sans tracking-widest2 uppercase text-espresso-900 font-semibold">
              ITALIAN CUISINE • EST. 2018
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-sans text-stone-muted">
            <span className="tracking-widest uppercase">AUTUMN / WINTER SERVICE</span>
            <span>•</span>
            <span className="tracking-widest uppercase text-olive-800 font-medium">VISAKHAPATNAM</span>
          </div>
        </div>

        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Monumental Typography & CTAs */}
          <div className="lg:col-span-6 z-20 space-y-8 lg:-mr-12">
            <div className="space-y-2">
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-normal tracking-tight text-espresso-950 leading-[0.92]">
                ROOTED<br />
                <span className="font-display italic font-light text-terracotta-500 ml-1 sm:ml-4">
                  IN FLAVOR.
                </span>
              </h1>
            </div>

            <p className="text-espresso-800/85 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-md">
              Contemporary Italian cooking shaped by tradition, seasonality, and the pleasure of gathering around a table.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenReservation}
                icon={<ArrowDownRight className="w-4 h-4" />}
              >
                RESERVE A TABLE
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenMenu}
                icon={<UtensilsCrossed className="w-4 h-4" />}
              >
                EXPLORE THE MENU
              </Button>
            </div>

            {/* Quick Sourcing / Micro note */}
            <div className="pt-4 border-t border-espresso-900/10 flex items-center gap-6 text-xs text-stone-muted font-sans">
              <div className="flex items-center gap-2">
                <span className="text-olive-700 font-bold">100%</span>
                <span>Stone-ground flour</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span className="text-terracotta-600 font-bold">30</span>
                <span>Egg yolks per kg pasta</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-espresso-900/15 shadow-2xl bg-espresso-950">
              <img
                src="/images/hero-editorial.jpg"
                alt="Oliva candlelit evening dining setting with handmade pasta and Italian wine"
                className="w-full h-[420px] sm:h-[520px] md:h-[620px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* In-Image Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent text-cream-100 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 block mb-1">
                    ATMOSPHERE & AMBIANCE
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-cream-100">
                    The Sunset Terrace at Oliva
                  </p>
                </div>
                <span className="font-mono text-xs text-cream-100/60 hidden sm:inline">
                  17.6868° N, 83.2185° E
                </span>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-cream-100/95 border border-espresso-900/15 p-4 shadow-xl backdrop-blur-md hidden sm:block max-w-[180px]">
              <div className="flex items-center gap-1.5 text-terracotta-500 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[9px] font-sans tracking-widest uppercase font-bold">MICHELIN INSPIRED</span>
              </div>
              <p className="font-display italic text-xs text-espresso-900 leading-snug">
                “A contemporary love letter to Italian gastronomy.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Marquee Banner */}
      <div className="w-full border-t border-b border-espresso-900/10 py-3 bg-cream-100/60 overflow-hidden relative mt-12 select-none">
        <div className="flex whitespace-nowrap animate-marquee gap-12 font-editorial text-xs tracking-widest uppercase text-espresso-800/80">
          <span>PASTA FATTA A MANO</span>
          <span>•</span>
          <span>NATURAL & BIODYNAMIC WINES</span>
          <span>•</span>
          <span>36-MONTH PARMIGIANO REGGIANO</span>
          <span>•</span>
          <span>WOOD-FIRED HEARTH</span>
          <span>•</span>
          <span>ARTISANAL APERITIVO COCKTAILS</span>
          <span>•</span>
          <span>PASTA FATTA A MANO</span>
          <span>•</span>
          <span>NATURAL & BIODYNAMIC WINES</span>
          <span>•</span>
          <span>36-MONTH PARMIGIANO REGGIANO</span>
          <span>•</span>
          <span>WOOD-FIRED HEARTH</span>
          <span>•</span>
          <span>ARTISANAL APERITIVO COCKTAILS</span>
        </div>
      </div>
    </section>
  );
};
