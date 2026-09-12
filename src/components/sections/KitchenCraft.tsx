import React from 'react';
import { Button } from '../ui/Button';
import { getAssetUrl } from '../../utils/assetUrl';

interface KitchenCraftProps {
  onOpenReservation: () => void;
}

export const KitchenCraft: React.FC<KitchenCraftProps> = ({ onOpenReservation }) => {
  const craftPillars = [
    {
      title: 'HEIRLOOM GRAINS',
      desc: 'Stone-milled ancient Italian grano duro sourced directly from non-industrial heritage mills.',
    },
    {
      title: 'OPEN HEARTH',
      desc: 'Meats and wild fish seared over fragrant olive wood embers and vine shoots for pure smoke nuance.',
    },
    {
      title: '72H FERMENTATION',
      desc: 'Our sourdough and focaccia undergo slow, cold triple-stage fermentation for airy, digestible crusts.',
    },
    {
      title: 'SINGLE-ESTATE OLIVE OIL',
      desc: 'Cold-pressed extra virgin olive oils harvested in early October for peak polyphenols and peppery kick.',
    },
  ];

  return (
    <section id="kitchen" className="py-24 md:py-36 bg-parchment relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              04 / LA BRIGATA & MAESTRI
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950 leading-[0.95]">
              CRAFT<br />
              BEHIND<br />
              <span className="font-display italic text-olive-800">THE PLATE.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="font-display italic text-xl text-espresso-900">
              “Simple ingredients deserve serious attention.”
            </p>
            <p className="text-xs sm:text-sm text-stone-muted font-sans font-light">
              — Chef Luca Moretti, Executive Chef at Oliva
            </p>
          </div>
        </div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Chef Portrait & Plating Photos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Chef Luca Main Portrait */}
              <div className="col-span-7 overflow-hidden border border-espresso-900/15 shadow-xl bg-espresso-950">
                <img
                  src={getAssetUrl('images/chef-luca.jpg')}
                  alt="Chef Luca Moretti plating pasta at Oliva"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="p-4 bg-espresso-950 text-cream-100 text-xs font-sans">
                  <div className="font-serif text-base font-semibold text-cream-100">
                    LUCA MORETTI
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-terracotta-400">
                    Executive Chef & Founder
                  </div>
                </div>
              </div>

              {/* Handcraft Pasta Rolling Photo */}
              <div className="col-span-5 flex flex-col justify-between space-y-4">
                <div className="overflow-hidden border border-espresso-900/15 shadow-md bg-espresso-950 h-full">
                  <img
                    src={getAssetUrl('images/pasta-prep.jpg')}
                    alt="Daily fresh handmade pasta preparation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-3 bg-cream-100 border border-espresso-900/10 text-xs text-espresso-900 font-sans">
                  <span className="font-semibold block">08:00 DAILY</span>
                  <span className="text-[11px] text-stone-muted">Fresh Pasta Production</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Culinary Pillars & Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-widest2 uppercase text-stone-muted font-semibold">
                OUR METHOD
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-espresso-950">
                Honoring the Italian hearth through modern precision.
              </h3>
              <p className="text-xs sm:text-sm text-espresso-800/85 font-sans font-light leading-relaxed">
                Trained in Modena and Milan, Chef Luca Moretti brought his deep culinary roots to create a dining room where Italian gastronomy feels alive, sensory, and deeply grounded.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-espresso-900/10 font-sans">
              {craftPillars.map((pillar) => (
                <div key={pillar.title} className="space-y-1.5">
                  <h4 className="font-editorial text-xs tracking-widest uppercase font-bold text-olive-900">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-stone-muted leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenReservation}
              >
                RESERVE CHEF’S COUNTER SEATS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
