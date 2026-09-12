import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Mail, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { InstagramIcon, FacebookIcon } from '../ui/Icons';

interface FooterProps {
  onOpenReservation: () => void;
  onShowToast: (type: 'success' | 'info' | 'error', title: string, message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('error', 'Invalid Email', 'Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('success', 'Newsletter Subscription', 'Grazie! You have been subscribed to stories from our kitchen.');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 relative overflow-hidden border-t border-espresso-800 pt-20 pb-12">
      {/* Background Subtle Monogram Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] select-none font-serif text-[380px] leading-none -mr-16 -mb-20 text-cream-100">
        OLIVA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Massive Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-100/15">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans tracking-widest2 uppercase text-terracotta-400 font-semibold block">
              CONTEMPORARY ITALIAN RESTAURANT • EST. 2018
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-cream-100">
              ROOTED<br />
              <span className="font-display italic font-light text-cream-200">IN FLAVOR.</span>
            </h2>
            <p className="text-stone-warm/80 text-sm md:text-base max-w-lg leading-relaxed font-sans font-light">
              At Oliva, Italian cooking is less about following rules and more about respecting ingredients, technique, and the people sitting around the table.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-espresso-900/60 p-8 border border-cream-100/10 backdrop-blur-sm">
            <div>
              <span className="text-[10px] font-sans tracking-widest2 uppercase text-stone-muted block mb-2">
                NEWSLETTER & RELEASES
              </span>
              <h3 className="font-serif text-2xl text-cream-100 mb-2">
                Stories from the kitchen.
              </h3>
              <p className="text-xs text-stone-warm/70 mb-6 leading-relaxed">
                Receive invitations to private seasonal tasting menus, wine masterclasses, and secret off-menu releases.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-espresso-950 border border-cream-100/20 px-4 py-3 text-xs text-cream-100 placeholder:text-stone-muted focus:outline-none focus:border-terracotta-400 font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-3 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] text-stone-muted block">
                Zero spam. Only culinary letters and seasonal invitations.
              </span>
            </form>
          </div>
        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-cream-100/15 text-xs font-sans">
          {/* Col 1: Sitemap */}
          <div className="space-y-4">
            <h4 className="font-editorial text-xs tracking-widest uppercase text-terracotta-400 font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-stone-warm/80">
              <li>
                <a href="#menu" className="hover:text-cream-100 transition-colors">
                  Menu & Tasting
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-cream-100 transition-colors">
                  Our Story & Roots
                </a>
              </li>
              <li>
                <a href="#kitchen" className="hover:text-cream-100 transition-colors">
                  The Kitchen & Craft
                </a>
              </li>
              <li>
                <a href="#the-room" className="hover:text-cream-100 transition-colors">
                  The Room & Ambiance
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cream-100 transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-cream-100 transition-colors">
                  Upcoming Gatherings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cream-100 transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Service Hours */}
          <div className="space-y-4">
            <h4 className="font-editorial text-xs tracking-widest uppercase text-terracotta-400 font-semibold">
              SERVICE HOURS
            </h4>
            <div className="space-y-3 text-stone-warm/80">
              <div>
                <p className="text-cream-100 font-medium">Monday — Thursday</p>
                <p className="text-stone-muted">12:00 — 23:00</p>
              </div>
              <div>
                <p className="text-cream-100 font-medium">Friday — Saturday</p>
                <p className="text-stone-muted">12:00 — 00:00</p>
              </div>
              <div>
                <p className="text-cream-100 font-medium">Sunday</p>
                <p className="text-stone-muted">12:00 — 22:00</p>
              </div>
            </div>
          </div>

          {/* Col 3: Location & Concierge */}
          <div className="space-y-4">
            <h4 className="font-editorial text-xs tracking-widest uppercase text-terracotta-400 font-semibold">
              VISIT US
            </h4>
            <div className="space-y-2 text-stone-warm/80 leading-relaxed">
              <p className="text-cream-100 font-serif text-sm">OLIVA Visakhapatnam</p>
              <p>18 Heritage Lane, Visakhapatnam</p>
              <p>Andhra Pradesh, India</p>
              <p className="pt-2 text-cream-200">hello@oliva.example</p>
              <p>+91 90000 00000</p>
            </div>
          </div>

          {/* Col 4: Social & Direct CTA */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-editorial text-xs tracking-widest uppercase text-terracotta-400 font-semibold mb-3">
                SOCIAL JOURNAL
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cream-100/20 hover:border-terracotta-400 hover:text-terracotta-400 flex items-center justify-center transition-colors"
                  aria-label="Instagram @olivakitchen"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cream-100/20 hover:border-terracotta-400 hover:text-terracotta-400 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@oliva.example"
                  className="w-10 h-10 border border-cream-100/20 hover:border-terracotta-400 hover:text-terracotta-400 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={onOpenReservation}
              className="w-full mt-4"
            >
              BOOK A TABLE
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-muted">
          <p>© {new Date().getFullYear()} OLIVA Ristorante. All rights reserved. Fictional culinary brand demonstration.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-widest uppercase text-cream-100/50">
              MILANO • ROMA • VISAKHAPATNAM
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-stone-warm hover:text-terracotta-400 transition-colors uppercase tracking-wider text-xs"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
