import React, { useState, useEffect } from 'react';
import { Menu, UtensilsCrossed } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MENU', href: '#menu' },
    { label: 'OUR STORY', href: '#story' },
    { label: 'THE KITCHEN', href: '#kitchen' },
    { label: 'THE ROOM', href: '#the-room' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'EVENTS', href: '#events' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/90 backdrop-blur-md py-3.5 border-b border-espresso-900/10 shadow-sm'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Oliva Homepage"
        >
          <div className="w-9 h-9 border border-espresso-900/30 group-hover:border-terracotta-500 rounded-none flex items-center justify-center transition-colors duration-300">
            <span className="font-display italic text-2xl text-espresso-900 group-hover:text-terracotta-500">O</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl tracking-wider font-semibold text-espresso-950 leading-none">
              OLIVA
            </span>
            <span className="text-[9px] tracking-widest2 uppercase text-stone-muted font-sans font-medium">
              Italian Cuisine
            </span>
          </div>
        </a>

        {/* Center / Right Links: Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-editorial text-xs tracking-widest uppercase text-espresso-800 hover:text-terracotta-500 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-terracotta-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenReservation}
            className="hidden sm:inline-flex"
            icon={<UtensilsCrossed className="w-3.5 h-3.5" />}
          >
            RESERVE A TABLE
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-espresso-950 hover:text-terracotta-500 transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
