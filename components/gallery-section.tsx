"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, Sparkles, Heart } from "lucide-react"

const galleryImages = [
  {
    src: "/IMG_0307.jpg",
    alt: "Dnyanesh and Pratiksha at sunset",
    title: "Pre-Wedding Shoot",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/IMG_8812.jpg",
    alt: "Engagement celebration",
    title: "Engagement Ceremony",
    span: "",
  },
  {
    src: "/IMG_0306.jpg",
    alt: "Coffee date",
    title: "Beautiful Moments",
    span: "",
  },
  {
    src: "/gallery-1.jpg",
    alt: "Adventure together",
    title: "Our Journey",
    span: "md:col-span-2",
  },
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-20 px-5 bg-gradient-to-b from-background via-[#fff8f5] to-secondary/5"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-6 h-48 w-48 rounded-full bg-[#b76e79]/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 -right-16 h-52 w-52 rounded-full bg-[#e6d7be]/25 blur-3xl animate-float-delayed" />
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4c2c2]/15 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[28%] text-2xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full border border-[#b76e79]/20 bg-white/60 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <ImageIcon className="w-3 h-3 text-[#b76e79]" />
            <p className="text-[10px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-light">
              Our Memories
            </p>
            <Sparkles className="w-3 h-3 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#8f4e58] mb-3 text-balance">
            Our Gallery
          </h2>

          <p className="max-w-lg mx-auto text-[#4a4a4a]/60 font-sans font-light leading-6 text-xs md:text-sm">
            Beautiful moments captured from our journey together.
          </p>

          <div className="relative w-16 h-px bg-[#b76e79]/30 mx-auto mt-6 mb-9">
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/60" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[120px] sm:auto-rows-[145px] md:auto-rows-[135px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/70 shadow-md shadow-[#b76e79]/10 ${image.span} transition-all duration-1000 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b76e79]/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={
                  image.span.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3f3434]/55 via-[#3f3434]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/25 blur-xl transition-transform duration-700 group-hover:scale-150" />

              <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/25 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <div className="translate-y-1.5 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="mb-0.5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/75 font-sans font-light">
                    Memory {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-serif text-base md:text-lg font-light text-white drop-shadow-sm">
                    {image.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="h-px w-7 bg-white/60" />
                    <Heart className="h-3 w-3 text-white/80 fill-white/20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-9 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#b76e79]/15 bg-white/60 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-[#b76e79] fill-[#b76e79]/20" />
            <span className="text-xs text-[#4a4a4a]/70 font-sans font-light">
              A glimpse of memories close to our hearts.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
