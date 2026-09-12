import React, { useEffect } from 'react';
import { X, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { label: 'MENU', href: '#menu', sub: 'Seasonal Cucina' },
    { label: 'OUR STORY', href: '#story', sub: 'Philosophy & Roots' },
    { label: 'THE KITCHEN', href: '#kitchen', sub: 'Chef Luca & Craft' },
    { label: 'THE ROOM', href: '#the-room', sub: 'Atmosphere & Architecture' },
    { label: 'GALLERY', href: '#gallery', sub: 'Food & Moments' },
    { label: 'EVENTS', href: '#events', sub: 'Tastings & Gatherings' },
    { label: 'CONTACT', href: '#contact', sub: 'Hours & Location' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleReservationClick = () => {
    onClose();
    setTimeout(() => {
      onOpenReservation();
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 bg-espresso-950 text-cream-100 flex flex-col justify-between p-6 md:p-12 overflow-y-auto animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-cream-100/15 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-cream-100/30 flex items-center justify-center">
            <span className="font-display italic text-xl text-cream-100">O</span>
          </div>
          <span className="font-serif text-2xl tracking-wider font-semibold text-cream-100">
            OLIVA
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-cream-100 hover:text-terracotta-400 transition-colors border border-cream-100/20"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="py-8 my-auto space-y-4">
        {links.map((link, idx) => (
          <div key={link.label} className="group">
            <button
              onClick={() => handleLinkClick(link.href)}
              className="w-full text-left flex items-baseline justify-between py-2 border-b border-cream-100/10 group-hover:border-terracotta-500 transition-all duration-300"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-sans tracking-widest text-stone-muted">
                  0{idx + 1}
                </span>
                <span className="font-serif text-3xl md:text-5xl tracking-wide group-hover:text-terracotta-400 group-hover:translate-x-2 transition-all duration-300">
                  {link.label}
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-sans tracking-wider text-cream-100/40 uppercase">
                {link.sub}
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Footer Info & CTA */}
      <div className="pt-6 border-t border-cream-100/15 space-y-6">
        <Button
          variant="terracotta"
          size="lg"
          className="w-full py-4"
          onClick={handleReservationClick}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          RESERVE A TABLE
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-warm/70 pt-2 font-sans">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>18 Heritage Lane, Visakhapatnam</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>Open Daily from 12:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
            <span>+91 90000 00000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
