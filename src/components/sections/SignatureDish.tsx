import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { getAssetUrl } from '../../utils/assetUrl';

interface SignatureDishProps {
  onOpenReservation: () => void;
  onOpenFullMenu: () => void;
}

export const SignatureDish: React.FC<SignatureDishProps> = ({
  onOpenReservation,
  onOpenFullMenu,
}) => {
  return (
    <section className="relative py-28 md:py-40 bg-espresso-950 text-cream-100 overflow-hidden border-t border-b border-espresso-800">
      {/* Background Full-Width Photographic Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('images/signature-tartufo.jpg')}
          alt="Signature Tagliatelle al Tartufo with black truffles"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1] scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/75 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Card */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-terracotta-500 text-cream-50 font-sans text-[10px] tracking-widest2 uppercase px-3 py-1 font-semibold">
                SIGNATURE / 01
              </span>
              <span className="text-stone-muted text-xs font-sans uppercase tracking-widest">
                SINCE INCEPTION
              </span>
            </div>

            <div className="space-y-4">
              <span className="font-editorial text-xs sm:text-sm tracking-widest uppercase text-cream-200/70 block">
                THE DISH WE KEEP COMING BACK TO
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-cream-100 leading-[0.92]">
                TAGLIATELLE<br />
                <span className="font-display italic text-terracotta-400">
                  AL TARTUFO.
                </span>
              </h2>
            </div>

            <p className="text-stone-warm/85 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl">
              Hand-rolled 30-yolk ribbons tossed in cultured mountain butter, emulsified with aged Parmigiano Reggiano, and topped at the table with wild black winter truffles from Umbria.
            </p>

            {/* Tasting Notes & Provenance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-cream-100/15 font-sans">
              <div>
                <span className="text-[10px] text-terracotta-400 uppercase tracking-widest block font-semibold">
                  THE PASTA
                </span>
                <p className="text-xs text-cream-100 mt-1 font-medium">
                  30 egg yolks per kilo, rolled to 0.8mm silk thickness
                </p>
              </div>

              <div>
                <span className="text-[10px] text-terracotta-400 uppercase tracking-widest block font-semibold">
                  THE CHEESE
                </span>
                <p className="text-xs text-cream-100 mt-1 font-medium">
                  36-month mountain Parmigiano Reggiano DOP
                </p>
              </div>

              <div>
                <span className="text-[10px] text-terracotta-400 uppercase tracking-widest block font-semibold">
                  THE WINE
                </span>
                <p className="text-xs text-cream-100 mt-1 font-medium">
                  Paired with Barolo DOCG 2018
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                variant="terracotta"
                size="lg"
                onClick={onOpenReservation}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                RESERVE TO TASTE
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenFullMenu}
              >
                EXPLORE PASTA COLLECTION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
