'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: '1',
    dietary: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('RSVP Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="rsvp" className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary">
            RSVP
          </h2>
          <p className="text-foreground/60 font-light">
            Please confirm your attendance by May 15, 2025
          </p>
        </div>

        {/* Form */}
        <div className="bg-secondary/5 border border-border rounded-lg p-8 md:p-12">
          {submitted ? (
            <div className="text-center space-y-6 py-12">
              <div className="flex justify-center">
                <Heart className="text-primary animate-pulse" size={48} />
              </div>
              <h3 className="font-serif text-2xl font-light text-primary">
                Thank You!
              </h3>
              <p className="text-foreground/70 font-light">
                We&apos;ve received your RSVP. We&apos;re excited to celebrate with you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                  placeholder="Your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Attendance & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Will you attend? *
                  </label>
                  <select
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                  >
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                    <option value="maybe">Maybe, I&apos;ll let you know</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light"
                  placeholder="e.g., Vegetarian, Gluten-free, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Special Message for the Couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-light resize-none"
                  placeholder="Share your wishes and blessings..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-light transition-colors"
                >
                  Submit RSVP
                </button>
                <button
                  type="reset"
                  className="px-6 bg-secondary/20 hover:bg-secondary/30 text-primary py-3 rounded-lg font-light transition-colors"
                >
                  Clear
                </button>
              </div>

              <p className="text-xs text-foreground/50 text-center font-light">
                * Required fields
              </p>
            </form>
          )}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-foreground/70 font-light">
            Questions? Feel free to contact us directly
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="mailto:dnyanesh.pratiksha@wedding.com" className="text-primary hover:underline">
              dnyanesh.pratiksha@wedding.com
            </a>
            <span className="text-foreground/30">•</span>
            <a href="tel:+15551234567" className="text-primary hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
