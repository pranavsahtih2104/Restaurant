import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Compass } from 'lucide-react';
import { STORY_MILESTONES } from '../../data/storyData';
import { Button } from '../ui/Button';

interface StoryProps {
  onOpenReservation: () => void;
}

export const Story: React.FC<StoryProps> = ({ onOpenReservation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeMilestone = STORY_MILESTONES[activeTab];

  return (
    <section id="story" className="py-24 md:py-36 bg-cream-100 relative overflow-hidden border-b border-espresso-900/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-2">
              02 / OUR STORY & ROOTS
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-espresso-950">
              OUR STORY
            </h2>
          </div>

          <p className="text-stone-muted text-xs md:text-sm font-sans max-w-sm font-light">
            “Born from a love of Italian food and long evenings around the table, Oliva brings classic flavors into a contemporary dining room.”
          </p>
        </div>

        {/* Split Interactive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Numbered Milestones Accordion / Tabs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {STORY_MILESTONES.map((milestone, idx) => (
                <button
                  key={milestone.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 transition-all duration-300 border flex flex-col gap-3 ${
                    activeTab === idx
                      ? 'bg-parchment border-olive-900 shadow-md translate-x-2'
                      : 'bg-transparent border-espresso-900/10 hover:border-espresso-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="font-editorial text-xs tracking-widest font-bold text-terracotta-500">
                        {milestone.number}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-medium">
                        {milestone.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-espresso-900 transition-transform duration-300 ${
                        activeTab === idx ? 'rotate-90 text-terracotta-500' : 'opacity-40'
                      }`}
                    />
                  </div>

                  {activeTab === idx && (
                    <div className="pt-2 space-y-3 font-sans text-xs sm:text-sm text-espresso-800/90 animate-fade-in font-light leading-relaxed">
                      <p className="font-medium text-olive-900 font-sans">
                        {milestone.subtitle}
                      </p>
                      <p>{milestone.description}</p>
                      <p className="text-stone-muted text-xs leading-relaxed border-t border-espresso-900/10 pt-2">
                        {milestone.details}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenReservation}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                EXPERIENCE OLIVA
              </Button>

              <a
                href="#kitchen"
                className="font-editorial text-xs tracking-widest uppercase font-semibold text-espresso-900 hover:text-terracotta-500 transition-colors"
              >
                MEET THE CHEF →
              </a>
            </div>
          </div>

          {/* Right Column: Large Dynamic Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-espresso-900/15 shadow-2xl bg-espresso-950">
              <img
                key={activeMilestone.image}
                src={activeMilestone.image}
                alt={activeMilestone.title}
                className="w-full h-[460px] sm:h-[540px] object-cover object-center animate-fade-in filter brightness-95"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent text-cream-100 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 block mb-1">
                    MILESTONE {activeMilestone.number}
                  </span>
                  <p className="font-serif text-xl text-cream-100">
                    {activeMilestone.title} — {activeMilestone.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural note badge */}
            <div className="absolute -bottom-5 -right-5 bg-olive-900 text-cream-100 p-4 border border-cream-100/15 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2 text-[10px] font-sans tracking-widest uppercase text-terracotta-300">
                <Compass className="w-3.5 h-3.5" />
                <span>ORIGIN & ARCHITECTURE</span>
              </div>
              <p className="font-serif text-sm mt-1">Visakhapatnam • Contemporary Cucina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
