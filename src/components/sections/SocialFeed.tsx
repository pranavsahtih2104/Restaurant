import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { getAssetUrl } from '../../utils/assetUrl';

interface SocialFeedProps {
  onOpenLightbox: (index: number) => void;
}

export const SocialFeed: React.FC<SocialFeedProps> = ({ onOpenLightbox }) => {
  const posts = [
    {
      id: 'p1',
      image: getAssetUrl('images/signature-tartufo.jpg'),
      likes: '1,420',
      comments: '84',
      caption: 'The art of the 30-yolk ribbon and freshly shaved black truffles. #oliva #tartufo',
      lightboxIndex: 1,
    },
    {
      id: 'p2',
      image: getAssetUrl('images/dish-cocktail.jpg'),
      likes: '930',
      comments: '42',
      caption: 'Golden hour Negroni Affumicato with rosemary wood smoke. #aperitivo',
      lightboxIndex: 10,
    },
    {
      id: 'p3',
      image: getAssetUrl('images/room-dining.jpg'),
      likes: '2,180',
      comments: '112',
      caption: 'When evening falls in our olive hall. Ready for dinner service. #olivarestaurant',
      lightboxIndex: 0,
    },
    {
      id: 'p4',
      image: getAssetUrl('images/pasta-prep.jpg'),
      likes: '1,750',
      comments: '95',
      caption: 'Morning flour, golden yolks, and Piedmontese agnolotti. #handmade',
      lightboxIndex: 6,
    },
    {
      id: 'p5',
      image: getAssetUrl('images/dish-burrata.jpg'),
      likes: '1,290',
      comments: '63',
      caption: 'Puglia burrata and heirloom tomatoes picked at peak ripeness. #cucina',
      lightboxIndex: 5,
    },
    {
      id: 'p6',
      image: getAssetUrl('images/room-terrace.jpg'),
      likes: '3,410',
      comments: '204',
      caption: 'Candlelight and jazz under the olive trees. #afterdark',
      lightboxIndex: 4,
    },
  ];

  return (
    <section className="py-20 bg-parchment border-b border-espresso-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-espresso-900/10">
          <div>
            <span className="font-editorial text-xs tracking-widest uppercase font-semibold text-terracotta-500 block mb-1">
              DIGITAL JOURNAL
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-espresso-950">
              FOLLOW THE TABLE
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-semibold text-olive-900 hover:text-terracotta-500 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@olivakitchen</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* 6-Grid Curated Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onOpenLightbox(post.lightboxIndex)}
              className="group relative cursor-pointer overflow-hidden border border-espresso-900/15 shadow-sm bg-espresso-950 aspect-square"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.95]"
              />

              {/* Hover Stats Overlay */}
              <div className="absolute inset-0 bg-espresso-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-cream-100 text-center font-sans">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="flex items-center gap-1 text-terracotta-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-cream-200">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-stone-warm/80 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
