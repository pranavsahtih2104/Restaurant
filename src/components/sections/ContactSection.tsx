import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, UtensilsCrossed } from 'lucide-react';

interface ContactProps {
  onOpenReservation: () => void;
  onShowToast: (type: 'success' | 'info' | 'error', title: string, message: string) => void;
}

export const ContactSection: React.FC<ContactProps> = ({ onOpenReservation, onShowToast }) => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=18+Heritage+Lane+Visakhapatnam+Andhra+Pradesh', '_blank');
  };

  const handleWhatsApp = () => {
    onShowToast('info', 'WhatsApp Concierge', 'Opening direct chat with Oliva reservation concierge (+91 90000 00000).');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919000000000';
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-cream-100 relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              09 / CONTATTI & POSIZIONE
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950">
              LOCATION & HOURS
            </h2>
          </div>

          <p className="text-stone-muted text-xs md:text-sm font-sans max-w-sm font-light">
            Located in the serene heritage quarters of Visakhapatnam, offering dedicated valet parking and quiet garden courtyards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Address, Phone, Email & Action Buttons */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                  OLIVA
                </h3>
                <p className="text-xs uppercase tracking-widest text-terracotta-500 font-sans font-semibold mt-1">
                  Contemporary Italian Restaurant
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs sm:text-sm font-sans text-espresso-900">
                <div className="flex items-start gap-3.5 p-4 bg-parchment border border-espresso-900/10">
                  <MapPin className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso-950">Address</strong>
                    <span className="text-stone-muted leading-relaxed">
                      18 Heritage Lane, Visakhapatnam, Andhra Pradesh 530003, India
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5 p-4 bg-parchment border border-espresso-900/10">
                    <Phone className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-medium text-espresso-950">Telephone</strong>
                      <a href="tel:+919000000000" className="text-stone-muted hover:text-terracotta-500 transition-colors">
                        +91 90000 00000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-parchment border border-espresso-900/10">
                    <Mail className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-medium text-espresso-950">Email</strong>
                      <a href="mailto:hello@oliva.example" className="text-stone-muted hover:text-terracotta-500 transition-colors">
                        hello@oliva.example
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="p-4 bg-parchment border border-espresso-900/10 space-y-2">
                  <div className="flex items-center gap-2 font-medium text-espresso-950 pb-2 border-b border-espresso-900/10">
                    <Clock className="w-4 h-4 text-terracotta-500" />
                    <span>Opening Hours</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1 text-stone-muted">
                    <div>
                      <span className="font-medium text-espresso-900 block">Mon — Thu</span>
                      <span>12:00 — 23:00</span>
                    </div>
                    <div>
                      <span className="font-medium text-espresso-900 block">Fri — Sat</span>
                      <span>12:00 — 00:00</span>
                    </div>
                    <div>
                      <span className="font-medium text-espresso-900 block">Sunday</span>
                      <span>12:00 — 22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
              <button
                onClick={handleDirections}
                className="p-3 bg-parchment border border-espresso-900/20 hover:border-olive-800 text-[11px] font-editorial tracking-wider uppercase font-semibold text-espresso-900 flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-4 h-4 text-olive-800" />
                <span>DIRECTIONS</span>
              </button>

              <button
                onClick={handleCall}
                className="p-3 bg-parchment border border-espresso-900/20 hover:border-olive-800 text-[11px] font-editorial tracking-wider uppercase font-semibold text-espresso-900 flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-olive-800" />
                <span>CALL</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="p-3 bg-parchment border border-espresso-900/20 hover:border-olive-800 text-[11px] font-editorial tracking-wider uppercase font-semibold text-espresso-900 flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-olive-800" />
                <span>WHATSAPP</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="p-3 bg-olive-900 text-cream-100 hover:bg-terracotta-500 text-[11px] font-editorial tracking-wider uppercase font-semibold flex flex-col items-center justify-center gap-1.5 transition-colors"
              >
                <UtensilsCrossed className="w-4 h-4 text-cream-100" />
                <span>RESERVE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map & Architectural Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="relative h-80 sm:h-96 w-full border border-espresso-900/15 overflow-hidden shadow-xl bg-espresso-950 group">
              {/* Map stylized graphic presentation */}
              <iframe
                title="Oliva Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121617.98687704257!2d83.2184815!3d17.6868159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943138902b19f%3A0xb4a4a82199f7d2f!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale-[70%] contrast-[1.2] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-4 left-4 bg-espresso-950/90 text-cream-100 p-3 border border-cream-100/20 backdrop-blur-sm text-xs font-sans">
                <span className="text-[10px] text-terracotta-400 font-bold block uppercase tracking-wider">
                  VISITOR PARKING
                </span>
                <span>Complimentary Valet Service on Arrival</span>
              </div>
            </div>

            {/* Note & Demo details */}
            <div className="p-4 bg-espresso-900/5 border border-espresso-900/10 text-[11px] text-stone-muted leading-relaxed font-sans">
              <strong className="text-espresso-900">Demonstration Notice:</strong> All addresses, phone numbers, and reservation ledgers are created for artistic design presentation purposes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
