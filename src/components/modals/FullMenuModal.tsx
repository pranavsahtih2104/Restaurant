import React, { useState, useEffect } from 'react';
import { X, Search, Wine, Printer } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menuData';
import type { MenuCategory } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [selectedCat, setSelectedCat] = useState<MenuCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  if (!isOpen) return null;

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'FULL CATALOG' },
    { id: 'antipasti', label: 'ANTIPASTI' },
    { id: 'pasta', label: 'PASTA' },
    { id: 'secondi', label: 'SECONDI' },
    { id: 'dolci', label: 'DOLCI' },
    { id: 'cocktails', label: 'COCKTAILS' },
    { id: 'wine', label: 'CARTA DEI VINI' },
  ];

  const dietaryOptions = ['all', 'Vegetarian', 'Gluten-Free', 'Signature', "Chef's Pick"];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCat === 'all' || item.category === selectedCat;
    const matchesDietary =
      dietaryFilter === 'all' || (item.tags && item.tags.includes(dietaryFilter));
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.italianName && item.italianName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDietary && matchesSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-espresso-950/85 modal-backdrop animate-fade-in">
      <div className="bg-parchment text-espresso-950 w-full max-w-5xl border border-espresso-900/20 shadow-2xl relative overflow-hidden h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 bg-espresso-950 text-cream-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cream-100/10 shrink-0">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-sans tracking-widest2 uppercase text-terracotta-400 font-semibold">
                AUTUMN / WINTER MENU • RISTORANTE OLIVA
              </span>
              <span className="text-stone-muted text-xs">•</span>
              <span className="text-[10px] font-sans tracking-wider uppercase text-stone-warm/70">
                DAILY FRESH PASTA
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-cream-100 mt-1">
              The Complete Culinary Catalog
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="p-2 border border-cream-100/20 text-cream-100 hover:text-terracotta-400 hover:border-terracotta-400 text-xs flex items-center gap-1.5 transition-colors font-sans"
              title="Print Menu"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">PRINT</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-cream-100/70 hover:text-cream-100 hover:bg-cream-100/10 border border-cream-100/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="p-4 md:px-8 bg-cream-100/80 border-b border-espresso-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 font-sans">
          {/* Categories */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 text-[11px] font-editorial tracking-widest uppercase transition-all whitespace-nowrap ${
                  selectedCat === cat.id
                    ? 'bg-olive-900 text-cream-100 font-semibold'
                    : 'text-espresso-800 hover:bg-cream-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Dietary */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-stone-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ingredients..."
                className="w-full pl-8 pr-3 py-1.5 bg-cream-50 border border-espresso-900/20 text-xs focus:outline-none focus:border-olive-800"
              />
            </div>

            {/* Dietary Filter */}
            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-cream-50 border border-espresso-900/20 px-3 py-1.5 text-xs text-espresso-900 focus:outline-none focus:border-olive-800"
            >
              {dietaryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'all' ? 'All Dietary' : opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 space-y-10">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-stone-muted space-y-2 font-sans">
              <p className="text-base font-serif text-espresso-900">No dishes matched your criteria</p>
              <p className="text-xs">Try clearing your search query or dietary filter.</p>
              <button
                onClick={() => {
                  setSelectedCat('all');
                  setDietaryFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-terracotta-600 font-semibold underline mt-2"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative pb-6 border-b border-espresso-900/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-serif text-xl tracking-tight text-espresso-950 font-semibold group-hover:text-terracotta-600 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1 font-serif text-lg font-bold text-olive-900 whitespace-nowrap">
                        <span>₹{item.price.toLocaleString()}</span>
                      </div>
                    </div>

                    {item.italianName && (
                      <p className="font-display italic text-xs text-stone-muted mt-0.5">
                        {item.italianName}
                      </p>
                    )}

                    <p className="text-xs text-espresso-800/80 mt-2 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-2">
                    {/* Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          size="xs"
                          variant={tag === 'Signature' ? 'terracotta' : 'parchment'}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Wine Pairing */}
                    {item.pairing && (
                      <div className="flex items-center gap-1.5 text-[11px] text-olive-900/80 font-sans italic">
                        <Wine className="w-3 h-3 text-terracotta-500" />
                        <span>Pair: {item.pairing}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Note & Table Booking */}
        <div className="p-4 md:px-8 bg-espresso-950 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-100/10 shrink-0 font-sans">
          <p className="text-xs text-stone-warm/70 text-center sm:text-left">
            Dishes are seasonal and subject to daily ingredient market availability.
          </p>

          <Button
            variant="terracotta"
            size="sm"
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
          >
            RESERVE A TABLE FOR DINING
          </Button>
        </div>
      </div>
    </div>
  );
};
