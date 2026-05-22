"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Image as ImageIcon, Sparkles, Heart } from "lucide-react"

const galleryImages = [
  {
    src: "/IMG_0307.jpg",
    // alt: "Dnyanesh and Pratiksha at sunset",
    // title: "Pre-Wedding Shoot",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/IMG_8812.jpg",
    // alt: "Engagement celebration",
    // title: "Engagement Ceremony",
    span: "",
  },
  {
    src: "/IMG_0306.jpg",
    // alt: "Coffee date",
    // title: "Beautiful Moments",
    span: "",
  },
  {
    src: "/gallery-1.jpg",
    // alt: "Adventure together",
    // title: "Our Journey",
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
      className="relative overflow-hidden py-16 md:py-24 px-5 bg-[radial-gradient(circle_at_top,#fff8f5_0%,#fffaf8_42%,#f8ebe6_100%)]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#f4c2c2]/25 blur-3xl animate-float" />
        <div className="absolute top-36 -right-24 h-64 w-64 rounded-full bg-[#e6d7be]/30 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#b76e79]/10 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-2xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[26%] text-3xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-2xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#b76e79]/20 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <ImageIcon className="w-3.5 h-3.5 text-[#b76e79]" />
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-medium">
              Our Memories
            </p>
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#8f4e58] mb-4 text-balance">
            Our Gallery
          </h2>

          <p className="max-w-xl mx-auto text-[#4a4a4a]/70 font-sans font-normal leading-7 text-sm md:text-base">
            Beautiful moments captured from our{" "}
            <span className="font-semibold text-[#8f4e58]">journey</span>{" "}
            together, filled with{" "}
            <span className="font-semibold text-[#8f4e58]">love</span>, smiles,
            and memories.
          </p>

          <div className="relative w-20 h-px bg-[#b76e79]/35 mx-auto mt-7 mb-10">
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/70" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[145px] sm:auto-rows-[170px] md:auto-rows-[160px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl border border-white/70 shadow-lg shadow-[#b76e79]/10 ${image.span} transition-all duration-1000 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b76e79]/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <Image
                {/* src={image.src}
                alt={image.alt} */}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={
                  image.span.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3f3434]/65 via-[#3f3434]/15 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/25 blur-xl transition-transform duration-700 group-hover:scale-150" />

              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12">
                <Sparkles className="h-4 w-4 text-white" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <div className="translate-y-1.5 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="mb-1 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/80 font-sans font-semibold">
                    Memory {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-serif text-xl md:text-2xl font-medium text-white drop-shadow-sm">
                    {image.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="h-px w-8 bg-white/70" />
                    <Heart className="h-3.5 w-3.5 text-white/90 fill-white/25" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-10 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#b76e79]/15 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Heart className="w-4 h-4 text-[#b76e79] fill-[#b76e79]/20" />
            <span className="text-sm text-[#4a4a4a]/75 font-sans font-medium">
              A glimpse of memories close to our hearts.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
