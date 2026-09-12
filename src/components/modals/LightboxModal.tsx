import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

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

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/95 modal-backdrop p-4 md:p-8 select-none animate-fade-in">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between text-cream-100 z-10">
        <div className="flex items-center gap-3">
          <span className="font-editorial text-xs tracking-widest text-terracotta-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="text-stone-muted text-xs">•</span>
          <span className="font-serif text-lg tracking-wide hidden sm:inline text-cream-100">
            {currentItem.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 border border-cream-100/20 hover:border-terracotta-400 hover:text-terracotta-400 text-cream-100 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[78vh] w-full flex items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl border border-cream-100/10 transition-opacity duration-300"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-espresso-900/80 hover:bg-terracotta-500 border border-cream-100/20 text-cream-100 transition-all rounded-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-espresso-900/80 hover:bg-terracotta-500 border border-cream-100/20 text-cream-100 transition-all rounded-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso-950 via-espresso-950/80 to-transparent text-center text-cream-100">
        <div className="max-w-xl mx-auto space-y-1">
          <p className="font-serif text-lg md:text-xl text-cream-100">
            {currentItem.title}
          </p>
          <p className="text-xs text-stone-warm/80 font-sans leading-relaxed">
            {currentItem.caption}
          </p>
          {currentItem.subtext && (
            <span className="inline-block text-[10px] font-sans tracking-widest uppercase text-terracotta-400 pt-1 font-semibold">
              {currentItem.subtext}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
