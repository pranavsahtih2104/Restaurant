import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';
import type { ReservationFormData } from '../../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillEvent?: string;
  onShowToast: (type: 'success' | 'info' | 'error', title: string, message: string) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  prefillEvent,
  onShowToast,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState<ReservationFormData>({
    guests: 2,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '20:00',
    zone: 'Main Dining Room',
    name: '',
    phone: '',
    email: '',
    specialRequests: prefillEvent ? `Event: ${prefillEvent}` : '',
    occasion: 'Dinner',
  });

  useEffect(() => {
    if (prefillEvent) {
      setFormData((prev) => ({
        ...prev,
        specialRequests: `Event Request: ${prefillEvent}`,
        occasion: 'Special Event',
      }));
    }
  }, [prefillEvent]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state on close
      setTimeout(() => {
        setIsSubmitted(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const diningZones = [
    { id: 'main', name: 'Main Dining Room', desc: 'Candlelit olive plaster hall & linen tables' },
    { id: 'counter', name: "Chef's Pass Counter", desc: 'Front-row view of the live kitchen' },
    { id: 'terrace', name: 'Garden Courtyard', desc: 'Under olive trees & fairy lights' },
    { id: 'cellar', name: 'Private Wine Vault', desc: 'Surrounded by Italian reserve vintages' },
  ];

  const occasions = ['Dinner', 'Birthday Celebration', 'Anniversary', 'Business Dining', 'Romantic Date', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      onShowToast('error', 'Missing Information', 'Please provide your name, phone number, and email.');
      return;
    }

    const ref = `OLV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#233825', '#C4573B', '#F4EEDA', '#DDD6CA'],
      });
    } catch {
      // Confetti fallback
    }

    onShowToast(
      'success',
      'Table Request Received',
      `Reference: ${ref}. Our concierge will contact you shortly.`
    );
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OLIVA Ristorante//Table Reservation//EN
BEGIN:VEVENT
SUMMARY:Table Reservation at OLIVA (${formData.guests} Guests)
DESCRIPTION:Reservation for ${formData.name} at OLIVA Ristorante.\\nZone: ${formData.zone}\\nRef: ${bookingRef}\\nAddress: 18 Heritage Lane, Visakhapatnam.
LOCATION:18 Heritage Lane, Visakhapatnam, Andhra Pradesh
DTSTART:${formData.date.replace(/-/g, '')}T${formData.time.replace(':', '')}00
DURATION:PT2H
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `OLIVA-Reservation-${formData.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-espresso-950/80 modal-backdrop animate-fade-in">
      <div className="bg-parchment text-espresso-950 w-full max-w-2xl border border-espresso-900/20 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 bg-espresso-950 text-cream-100 flex items-center justify-between border-b border-cream-100/10 shrink-0">
          <div>
            <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 font-semibold block">
              TABLE RESERVATION • OLIVA
            </span>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-cream-100">
              {isSubmitted ? 'Table Requested' : 'Reserve Your Table'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-cream-100/70 hover:text-cream-100 hover:bg-cream-100/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 font-sans">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Guests, Date & Time */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-espresso-900/10 pb-2">
                  <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                    1. Party Size, Date & Time
                  </span>
                  <span className="text-xs text-stone-muted">Step 1 of 2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Private Dining)'].map((num, i) => (
                        <option key={i} value={typeof num === 'number' ? num : 9}>
                          {typeof num === 'number' ? `${num} ${num === 1 ? 'Guest' : 'Guests'}` : num}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time} {Number(time.split(':')[0]) < 17 ? '(Lunch)' : '(Dinner)'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Preference */}
              <div className="space-y-3">
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800">
                  Preferred Seating Zone
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {diningZones.map((zone) => (
                    <button
                      type="button"
                      key={zone.id}
                      onClick={() => setFormData({ ...formData, zone: zone.name })}
                      className={`text-left p-3 border transition-all text-xs ${
                        formData.zone === zone.name
                          ? 'border-olive-800 bg-olive-900/10 text-olive-950 font-medium'
                          : 'border-espresso-900/15 bg-cream-50/70 hover:border-espresso-900/40 text-espresso-800'
                      }`}
                    >
                      <div className="font-semibold text-espresso-950">{zone.name}</div>
                      <div className="text-[11px] text-stone-muted mt-0.5">{zone.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Contact Details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-espresso-900/10 pb-2">
                  <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-terracotta-500" />
                    2. Guest Information
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alessandro Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alessandro@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Dining Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>{occ}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-espresso-800 mb-1.5">
                      Dietary / Special Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Gluten allergy, Quiet table"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full bg-cream-50 border border-espresso-900/20 px-3.5 py-2.5 text-xs text-espresso-900 focus:outline-none focus:border-terracotta-500 font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-espresso-900/5 p-3.5 border border-espresso-900/10 text-[11px] text-stone-muted leading-relaxed">
                <span className="font-semibold text-espresso-900">Please Note:</span> This is a frontend demonstration booking request. Our maître d’ contacts every guest directly to confirm seating availability.
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={onClose}
                >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  REQUEST A TABLE
                </Button>
              </div>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="py-6 space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-olive-900/10 border border-olive-900/30 text-olive-800 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-olive-700" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-600 font-bold">
                  RESERVATION REQUEST RECEIVED
                </span>
                <h4 className="font-serif text-3xl md:text-4xl text-espresso-950">
                  Thank You, {formData.name.split(' ')[0]}
                </h4>
                <p className="text-xs md:text-sm text-stone-muted max-w-md mx-auto leading-relaxed">
                  Your table request has been registered in our kitchen ledger. Our maître d’ will contact you at <span className="font-semibold text-espresso-900">{formData.phone}</span> to confirm your seating.
                </p>
              </div>

              {/* Receipt / Details Card */}
              <div className="bg-cream-100 border border-espresso-900/15 p-6 max-w-md mx-auto text-left space-y-3 font-sans text-xs">
                <div className="flex justify-between border-b border-espresso-900/10 pb-2">
                  <span className="text-stone-muted uppercase tracking-wider text-[10px]">Reference Code</span>
                  <span className="font-mono font-bold text-olive-900">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-muted">Guests</span>
                  <span className="font-medium text-espresso-950">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-muted">Date & Time</span>
                  <span className="font-medium text-espresso-950">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-muted">Seating Zone</span>
                  <span className="font-medium text-espresso-950">{formData.zone}</span>
                </div>
                {formData.occasion && (
                  <div className="flex justify-between">
                    <span className="text-stone-muted">Occasion</span>
                    <span className="font-medium text-espresso-950">{formData.occasion}</span>
                  </div>
                )}
              </div>

              {/* Post-actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleDownloadCalendar}
                  icon={<Download className="w-3.5 h-3.5" />}
                >
                  ADD TO CALENDAR (.ICS)
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  onClick={onClose}
                >
                  DONE
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
