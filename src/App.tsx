import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Philosophy } from './components/sections/Philosophy';
import { Story } from './components/sections/Story';
import { MenuSection } from './components/sections/MenuSection';
import { SignatureDish } from './components/sections/SignatureDish';
import { KitchenCraft } from './components/sections/KitchenCraft';
import { TheRoom } from './components/sections/TheRoom';
import { GallerySection } from './components/sections/GallerySection';
import { EventsSection } from './components/sections/EventsSection';
import { ReservationSection } from './components/sections/ReservationSection';
import { ContactSection } from './components/sections/ContactSection';
import { SocialFeed } from './components/sections/SocialFeed';

import { ReservationModal } from './components/modals/ReservationModal';
import { FullMenuModal } from './components/modals/FullMenuModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { EventDetailModal } from './components/modals/EventDetailModal';
import { ToastContainer } from './components/ui/Toast';

import { GALLERY_ITEMS } from './data/galleryData';
import type { EventItem, ToastMessage } from './types';

export function App() {
  // Modal states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0,
  });
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [prefillEventName, setPrefillEventName] = useState<string | undefined>(undefined);

  // Toast state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'info' | 'error', title: string, message: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random()}`,
      type,
      title,
      message,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenReservation = (eventName?: string) => {
    setPrefillEventName(eventName);
    setIsReservationModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxState({
      isOpen: true,
      index,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-parchment text-espresso-950 font-sans selection:bg-olive-900 selection:text-cream-100">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Fullscreen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => handleOpenReservation()}
          onOpenMenu={() => setIsFullMenuOpen(true)}
        />

        {/* 01 Philosophy */}
        <Philosophy
          onOpenReservation={() => handleOpenReservation()}
          onOpenStory={() => {
            const el = document.getElementById('story');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 02 Story */}
        <Story
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 03 Menu Section */}
        <MenuSection
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Signature Dish Spotlight */}
        <SignatureDish
          onOpenReservation={() => handleOpenReservation()}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
        />

        {/* 04 Kitchen Craft & Chef Luca */}
        <KitchenCraft
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 05 The Room & Atmosphere */}
        <TheRoom
          onOpenLightbox={handleOpenLightbox}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 06 Visual Gallery */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 07 Upcoming Events & Gatherings */}
        <EventsSection
          onSelectEvent={(event) => setSelectedEvent(event)}
          onReserveEventDirect={(title) => handleOpenReservation(title)}
        />

        {/* 08 Table Reservation Form */}
        <ReservationSection
          onShowToast={addToast}
        />

        {/* 09 Location & Contact */}
        <ContactSection
          onOpenReservation={() => handleOpenReservation()}
          onShowToast={addToast}
        />

        {/* Social Feed Grid */}
        <SocialFeed
          onOpenLightbox={handleOpenLightbox}
        />
      </main>

      {/* Monumental Footer */}
      <Footer
        onOpenReservation={() => handleOpenReservation()}
        onShowToast={addToast}
      />

      {/* Global Interactive Modals */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => {
          setIsReservationModalOpen(false);
          setPrefillEventName(undefined);
        }}
        prefillEvent={prefillEventName}
        onShowToast={addToast}
      />

      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onOpenReservation={() => {
          setIsFullMenuOpen(false);
          handleOpenReservation();
        }}
      />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        currentIndex={lightboxState.index}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxState({ isOpen: false, index: 0 })}
        onNavigate={(newIdx) => setLightboxState((prev) => ({ ...prev, index: newIdx }))}
      />

      <EventDetailModal
        isOpen={selectedEvent !== null}
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onReserveEvent={(title) => {
          setSelectedEvent(null);
          handleOpenReservation(title);
        }}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default App;
