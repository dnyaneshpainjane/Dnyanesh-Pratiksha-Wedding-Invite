# Dnyanesh & Pratiksha Wedding Website
## Rose-Gold-Blush Theme with Advanced Animations

---

## Project Overview
A premium, fully-animated wedding invitation website featuring elegant rose-gold-blush aesthetics, interactive animations, countdown timer, falling petals throughout, and background music with smart autoplay.

---

## Key Features Implemented

### 1. Interactive Door Opening Animation
- **Auto-opens** after 4 seconds on page load
- **Manual click** capability for users to open immediately
- **3D rotating door effect** with elegant rose-gold gradient (B76E79 → C87C85 → D4888F)
- Decorative floating particles that animate while doors open
- Smooth transition to main content with fade-in animation

### 2. Continuous Falling Petals Effect
- **45+ petals** falling simultaneously throughout the entire website
- Multiple colors: Blush pink (#F4C2C2), Champagne (#E6D7BE), Rose-gold variations
- **Complex sway animations** with randomized sizes (8-32px)
- Each petal performs 360° rotations while falling
- Infinite loop with periodic regeneration for continuous effect visible across all pages
- Fixed positioning ensures petals fall over all content sections

### 3. Live Countdown Timer
- **Days, Hours, Minutes, Seconds** display to May 30, 2025 at 4:00 PM
- Beautiful rose-gold gradient boxes with shadow effects
- Updates every second with smooth transitions
- Animated entrance with fade-in-up effect
- Responsive grid layout (2 columns mobile, 4 columns desktop)

### 4. Enhanced Event Cards
- **4 colorful event cards** (Mehndi, Haldi, Wedding Ceremony, Reception)
- Individual rose-gold gradient backgrounds for each event
- Hover effects with scale transformation (105%)
- Embedded icons, dates, times, and locations in stylized boxes
- Smooth staggered animations on page load
- Hover reveals decorative elements

### 5. Beautiful Gallery Section
- **6 interactive gallery items** with rotating emoji icons
- Individual gradient backgrounds for visual variety
- Hover animations: icon scales 125%, decorative lights appear
- Sparkle icons appear on hover
- Smooth fade-in-up animations with staggered timing
- "Coming Soon" message for professional photos

### 6. Premium Venue Cards
- **2 venue cards** with gradient backgrounds and hover effects
- Event type badges (Wedding Ceremony, Reception & Celebrations)
- Quick-access contact buttons (phone links)
- Map Pin icons with smooth animations
- Cards scale up on hover with enhanced shadows

### 7. Advanced Animation Library
Implemented multiple custom animations:
- `slide-up`: Text enters from bottom with bounce curve
- `fade-in-up`: Elements fade while sliding up
- `bounce-slow`: Gentle 3s bouncing effect
- `pulse-soft`: Smooth opacity pulsing
- `float`: Vertical floating motion
- `glow-pulse`: Rose-gold glow effect

### 8. Background Music System
- Royalty-free wedding instrumental music
- **Smart autoplay** (muted on load, unmutes on first interaction)
- Respects browser autoplay policies
- Play/pause/volume controls in sticky navigation
- Music icon in top-right corner with volume indication

### 9. Design System
**Color Palette:**
- Primary: Rose-Gold (#B76E79)
- Secondary: Blush Pink (#F4C2C2)
- Accent: Champagne Gold (#E6D7BE)
- Background: Cream (#FFF8F5)
- Text: Charcoal (#4A4A4A)

**Typography:**
- Headings: Playfair Display (elegant serif)
- Body: Geist (modern sans-serif)
- Line heights: 1.6 for readability

---

## Component Structure

```
app/
├── layout.tsx (AudioProvider wrapper)
├── page.tsx (Main entry point)
├── globals.css (Animations & design tokens)
└── components/
    ├── door-opening.tsx (3D door animation)
    ├── petal-animation.tsx (Falling petals)
    ├── countdown-timer.tsx (Live countdown)
    ├── audio-provider.tsx (Music context)
    ├── audio-player.tsx (Player controls)
    ├── navigation.tsx (Header navigation)
    ├── hero-section.tsx (Main hero with timer)
    ├── event-details.tsx (4 event cards)
    ├── venue-section.tsx (2 venue cards)
    ├── gallery-section.tsx (6 gallery items)
    ├── rsvp-section.tsx (RSVP form)
    └── footer.tsx (Footer content)
```

---

## Animation Timings

| Animation | Duration | Trigger |
|-----------|----------|---------|
| Door opening | 1s | Auto after 4s load |
| Petal fall | 8-14s | Continuous loop |
| Countdown timer | 1s update | Every second |
| Event cards | 0.8s stagger | Page load + 0-300ms |
| Gallery items | 0.8s stagger | Page load + 0-300ms |
| Hero content | 0.8s | Page load |
| Bounce effect | 3s | Infinite loop |

---

## Responsive Design

- **Mobile**: Full touch-friendly interface, stacked layouts
- **Tablet**: 2-column grids for events and gallery
- **Desktop**: 2-4 column layouts with enhanced spacing
- **Navigation**: Sticky header with scroll behavior
- **Petals**: Scale appropriately on all screen sizes

---

## Browser Compatibility

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

- CSS animations use `will-change` and `transform` for GPU acceleration
- Petal animation uses fixed positioning to prevent layout shifts
- Audio loads asynchronously with lazy loading
- Smooth scroll behavior for navigation
- Optimized gradient calculations

---

## Deployment Instructions

### Using GitHub:
```bash
# Connect repository
git init
git add .
git commit -m "Add wedding website"
git push origin main
```

### Deploy to Vercel:
1. Click "Publish" button in v0
2. Connect GitHub repository
3. Deploy automatically on each push

### Manual Installation:
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Customization Guide

### Change Wedding Date
Edit `/components/countdown-timer.tsx`:
```tsx
const weddingDate = new Date('2025-05-30T16:00:00').getTime()
```

### Change Colors
Edit `/app/globals.css`:
```css
--primary: 349 29% 56%; /* Rose-gold */
--secondary: 0 82% 85%; /* Blush pink */
```

### Change Music
Replace audio file in public folder and update path in `/components/audio-provider.tsx`

### Update Couple Names
Replace "Dnyanesh & Pratiksha" throughout components with your names

### Modify Events
Edit event data in `/components/event-details.tsx`

### Update Venue Info
Edit venue details in `/components/venue-section.tsx`

---

## What's Included

✅ Interactive door opening (auto + manual)
✅ Continuous falling petals (45+ at a time)
✅ Live countdown timer (Days/Hours/Minutes/Seconds)
✅ 4 beautiful event cards with animations
✅ 2 venue cards with hover effects
✅ 6 gallery items with smooth transitions
✅ Background music with smart autoplay
✅ Responsive design for all devices
✅ Rose-gold-blush color palette
✅ Advanced animation library (8+ custom animations)
✅ Smooth navigation with scroll effects
✅ RSVP form section
✅ Contact information
✅ SEO optimized metadata

---

## Next Steps

1. **Customize Content**: Update couple names, dates, venues, locations
2. **Add Photos**: Upload actual wedding photos to gallery section
3. **Configure RSVP**: Set up backend for RSVP form submissions
4. **Add Background Music**: Choose and add your preferred wedding instrumental
5. **Deploy**: Push to GitHub and deploy to Vercel
6. **Share**: Send invitation link to guests

---

## Support & Maintenance

All components are fully documented and modular. Easy to modify individual sections without affecting others. Animations are CSS-based for optimal performance.

**Created with v0 - Premium Wedding Web Design**
