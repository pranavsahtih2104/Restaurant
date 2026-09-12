import React, { useEffect } from 'react';
import { X, Calendar, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import type { EventItem } from '../../types';
import { Button } from '../ui/Button';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventItem | null;
  onReserveEvent: (eventTitle: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  isOpen,
  onClose,
  event,
  onReserveEvent,
}) => {
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

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-espresso-950/85 modal-backdrop animate-fade-in">
      <div className="bg-parchment text-espresso-950 w-full max-w-3xl border border-espresso-900/20 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-espresso-950/70 hover:bg-espresso-950 text-cream-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-cream-100">
            <span className="text-[10px] font-sans tracking-widest2 uppercase bg-terracotta-500 text-cream-50 px-2.5 py-1 font-semibold inline-block mb-2">
              {event.badge}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-cream-100">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 font-sans">
          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-cream-100/90 border border-espresso-900/10 text-xs">
            <div>
              <span className="text-stone-muted uppercase tracking-wider text-[10px] block">Date</span>
              <span className="font-semibold text-espresso-900 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                {event.date}
              </span>
            </div>
            <div>
              <span className="text-stone-muted uppercase tracking-wider text-[10px] block">Service Time</span>
              <span className="font-semibold text-espresso-900 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                {event.time}
              </span>
            </div>
            <div>
              <span className="text-stone-muted uppercase tracking-wider text-[10px] block">Ticket / Seat</span>
              <span className="font-serif font-bold text-olive-900 text-sm mt-0.5 block">
                ₹{event.price.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-stone-muted uppercase tracking-wider text-[10px] block">Availability</span>
              <span className="font-semibold text-terracotta-600 flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                {event.seatsLeft} Seats Remaining
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900">
              OVERVIEW & PHILOSOPHY
            </h4>
            <p className="text-xs sm:text-sm text-espresso-800/90 leading-relaxed font-light">
              {event.description}
            </p>
          </div>

          {/* Detailed Course Highlights */}
          {event.fullDetails && (
            <div className="space-y-3 pt-2">
              <h4 className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900">
                TASTING FLIGHT & HIGHLIGHTS
              </h4>
              <ul className="space-y-2.5">
                {event.fullDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso-800">
                    <div className="w-4 h-4 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-cream-100 border-t border-espresso-900/10 flex items-center justify-between gap-4 shrink-0 font-sans">
          <div>
            <span className="text-[10px] text-stone-muted uppercase tracking-wider block">Price per guest</span>
            <span className="font-serif text-2xl font-bold text-espresso-950">₹{event.price.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
            >
              CLOSE
            </Button>
            <Button
              variant="terracotta"
              size="sm"
              onClick={() => {
                onClose();
                onReserveEvent(event.title);
              }}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              RESERVE SEATS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
