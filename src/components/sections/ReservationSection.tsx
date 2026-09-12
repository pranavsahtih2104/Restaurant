import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import type { ReservationFormData } from '../../types';

interface ReservationSectionProps {
  onShowToast: (type: 'success' | 'info' | 'error', title: string, message: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    guests: 2,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '20:00',
    zone: 'Main Dining Room',
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
    occasion: 'Dinner',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      onShowToast('error', 'Missing Required Fields', 'Please enter your name, phone number, and email.');
      return;
    }

    const ref = `OLV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#233825', '#C4573B', '#F4EEDA', '#DDD6CA'],
      });
    } catch {
      // Fallback
    }

    onShowToast(
      'success',
      'Reservation Request Submitted',
      `Thank you! Reference: ${ref}. Our team will contact you to confirm availability.`
    );
  };

  return (
    <section id="reservations" className="py-24 md:py-36 bg-parchment relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Hospitality Principles */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
                08 / PRENOTAZIONI
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950 leading-[0.95]">
                YOUR TABLE<br />
                <span className="font-display italic text-olive-800">IS WAITING.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-espresso-800/85 font-sans font-light leading-relaxed">
              We welcome reservations up to 30 days in advance. For large parties, private hire of the wine vault, or bespoke chef tasting experiences, please book with our concierge directly.
            </p>

            {/* Dining Guidelines */}
            <div className="space-y-4 pt-4 border-t border-espresso-900/10 text-xs font-sans text-stone-muted">
              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-olive-900 text-sm">01</span>
                <div>
                  <strong className="text-espresso-900 block font-medium">TABLE ALLOCATION</strong>
                  <span>Tables are held for 15 minutes past reservation time.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-olive-900 text-sm">02</span>
                <div>
                  <strong className="text-espresso-900 block font-medium">DIETARY REQUESTS</strong>
                  <span>Please advise us of allergies at the time of booking.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-serif font-bold text-olive-900 text-sm">03</span>
                <div>
                  <strong className="text-espresso-900 block font-medium">DRESS CODE</strong>
                  <span>Smart casual dining room attire.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inline Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-100 border border-espresso-900/20 shadow-2xl p-6 sm:p-10 relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div className="flex items-center justify-between border-b border-espresso-900/10 pb-3">
                    <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900">
                      REQUEST TABLE RESERVATION
                    </span>
                    <span className="text-[10px] text-terracotta-500 font-semibold uppercase tracking-wider">
                      LUNCH & DINNER SERVICE
                    </span>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time} {Number(time.split(':')[0]) < 17 ? '(Lunch)' : '(Dinner)'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name, Phone, Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Matteo Conti"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="matteo@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                        Special Requests / Dietary Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any allergies, anniversary notes, or seating preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full bg-parchment border border-espresso-900/20 px-3.5 py-2 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full py-4"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      REQUEST A TABLE
                    </Button>
                  </div>

                  <p className="text-[11px] text-stone-muted text-center leading-relaxed">
                    Demo Notice: Our team will contact you to confirm availability.
                  </p>
                </form>
              ) : (
                /* Submission confirmation */
                <div className="py-8 space-y-6 text-center animate-fade-in font-sans">
                  <div className="w-16 h-16 bg-olive-900/10 border border-olive-900/30 text-olive-800 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-olive-700" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-600 font-bold">
                      CONFIRMATION SENT
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-espresso-950">
                      Grazie, {formData.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-muted max-w-md mx-auto leading-relaxed">
                      Thank you. Your reservation request has been received. Our team will contact you to confirm availability.
                    </p>
                  </div>

                  <div className="bg-parchment border border-espresso-900/15 p-4 max-w-sm mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-stone-muted">Reference:</span>
                      <span className="font-mono font-bold text-olive-900">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-muted">Details:</span>
                      <span className="font-medium text-espresso-950">{formData.guests} Guests • {formData.date} @ {formData.time}</span>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        guests: 2,
                        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                        time: '20:00',
                        zone: 'Main Dining Room',
                        name: '',
                        phone: '',
                        email: '',
                        specialRequests: '',
                        occasion: 'Dinner',
                      });
                    }}
                  >
                    MAKE ANOTHER RESERVATION
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
