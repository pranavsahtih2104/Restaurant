import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { UPCOMING_EVENTS } from '../../data/eventsData';
import type { EventItem } from '../../types';
import { Button } from '../ui/Button';

interface EventsSectionProps {
  onSelectEvent: (event: EventItem) => void;
  onReserveEventDirect: (eventTitle: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onSelectEvent,
  onReserveEventDirect,
}) => {
  return (
    <section id="events" className="py-24 md:py-36 bg-cream-100 relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              07 / EXPERIENCES & CALENDAR
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950">
              UPCOMING AT OLIVA
            </h2>
          </div>

          <p className="text-stone-muted text-xs md:text-sm font-sans max-w-sm font-light">
            Curated evenings: guest winemaker tastings, intimate pass-side dinners with Chef Luca, and jazz garden aperitivi.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-parchment border border-espresso-900/15 shadow-lg flex flex-col justify-between group hover:border-olive-900 transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-60 overflow-hidden bg-espresso-950">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-espresso-950/90 backdrop-blur-sm text-cream-100 text-[10px] font-sans tracking-widest2 uppercase px-2.5 py-1 font-semibold border border-cream-100/20">
                    {event.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-terracotta-500 text-cream-50 text-xs font-serif font-bold px-2.5 py-1">
                  ₹{event.price.toLocaleString()} / seat
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Date & Time */}
                  <div className="flex items-center gap-3 text-xs font-sans text-stone-muted border-b border-espresso-900/10 pb-3">
                    <span className="font-semibold text-espresso-900 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-muted" />
                      {event.time.split('—')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-medium group-hover:text-terracotta-600 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-espresso-800/80 font-sans font-light leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso-900/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectEvent(event)}
                    className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900 hover:text-terracotta-500 transition-colors"
                  >
                    FULL DETAILS →
                  </button>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onReserveEventDirect(event.title)}
                  >
                    RESERVE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
