'use client'

import { useState } from 'react'
import { DoorOpening } from '@/components/door-opening'
import { PetalAnimation } from '@/components/petal-animation'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { EventDetails } from '@/components/event-details'
import { VenueSection } from '@/components/venue-section'
import { GallerySection } from '@/components/gallery-section'
import { RSVPSection } from '@/components/rsvp-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const [doorOpened, setDoorOpened] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PetalAnimation />
      
      {!doorOpened && (
        <DoorOpening onClose={() => setDoorOpened(true)} />
      )}

      {doorOpened && (
        <>
          <Navigation />
          <HeroSection />
          <EventDetails />
          <VenueSection />
          <GallerySection />
          <RSVPSection />
          <Footer />
        </>
      )}
    </main>
  )
}
