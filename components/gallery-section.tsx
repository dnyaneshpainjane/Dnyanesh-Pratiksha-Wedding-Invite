'use client'

import { Image as ImageIcon, Sparkles } from 'lucide-react'

export function GallerySection() {
  const galleryItems = [
    { id: 1, title: 'Pre-Wedding Shoot', icon: '📸', color: 'from-[#E6D7BE] to-[#F0DDD8]' },
    { id: 2, title: 'Engagement Ceremony', icon: '💑', color: 'from-[#F4C2C2] to-[#E8D4D0]' },
    { id: 3, title: 'Mehndi Night', icon: '🎨', color: 'from-[#D9A39E] to-[#E8B8B8]' },
    { id: 4, title: 'Haldi Celebration', icon: '✨', color: 'from-[#E8D4D0] to-[#F4C2C2]' },
    { id: 5, title: 'Wedding Day', icon: '💍', color: 'from-[#E8B8B8] to-[#D9A39E]' },
    { id: 6, title: 'Reception Moments', icon: '🎉', color: 'from-[#F0DDD8] to-[#E6D7BE]' },
  ]

  return (
    <section id="gallery" className="py-16 md:py-28 bg-gradient-to-b from-background via-[#FFF8F5] to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#B76E79]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E6D7BE]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 md:mb-20 space-y-4 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-light text-primary uppercase tracking-widest">Our Memories</span>
            <ImageIcon className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary tracking-tight">
            Gallery
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            Beautiful moments captured from our journey together
          </p>
        </div>

        {/* Gallery grid - Staggered beautiful layout */}
        <div className="space-y-8 md:space-y-0">
          {/* Row 1: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {galleryItems.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#B76E79]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative light */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="text-7xl md:text-8xl group-hover:scale-125 transition-transform duration-500 will-change-transform animate-glow-pulse">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4A4A4A] font-light">
                      {item.title}
                    </h3>
                    <div className="h-px w-8 bg-[#B76E79]/40 mx-auto group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-white animate-bounce" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:mt-8">
            {galleryItems.slice(2, 4).map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${(index + 2) * 80}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#B76E79]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative light */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="text-7xl md:text-8xl group-hover:scale-125 transition-transform duration-500 will-change-transform animate-glow-pulse">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4A4A4A] font-light">
                      {item.title}
                    </h3>
                    <div className="h-px w-8 bg-[#B76E79]/40 mx-auto group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-white animate-bounce" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 2 items - Centered on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:mt-8 md:max-w-2xl md:mx-auto">
            {galleryItems.slice(4, 6).map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105`}
                style={{ animationDelay: `${(index + 4) * 80}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#B76E79]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative light */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="text-7xl md:text-8xl group-hover:scale-125 transition-transform duration-500 will-change-transform animate-glow-pulse">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-[#4A4A4A] font-light">
                      {item.title}
                    </h3>
                    <div className="h-px w-8 bg-[#B76E79]/40 mx-auto group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-white animate-bounce" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
