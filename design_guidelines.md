# ACE HUNTER PWA - Design Guidelines

## Design Approach: Reference-Based Premium Golf Experience

Drawing inspiration from premium sports wagering platforms (DraftKings, FanDuel) combined with sophisticated golf app aesthetics (Golfshot, 18Birdies) and modern fintech payment flows (Stripe, Cash App). The design prioritizes trust, clarity, and excitement while maintaining golf's traditional elegance.

## Core Design Principles

1. **Premium Light Aesthetic** - Clean, sophisticated interface that builds trust for financial transactions
2. **Golf-First Visual Language** - Subtle golf course imagery and terminology throughout
3. **Clear Value Communication** - Transparent display of risks, rewards, and outcomes
4. **Mobile-Optimized Flow** - Thumb-friendly interactions for on-course usage

## Color Palette

### Light Mode (Primary Focus)
- **Background Base**: 0 0% 98% (soft off-white)
- **Surface Cards**: 0 0% 100% (pure white with subtle shadows)
- **Primary Brand**: 142 45% 25% (deep golf green - trust and tradition)
- **Secondary/Accent**: 45 90% 55% (warm gold - premium, achievement)
- **Success**: 142 70% 45% (vibrant green - winning)
- **Danger/Alert**: 0 70% 50% (controlled red for warnings)
- **Text Primary**: 220 15% 20% (near-black with warmth)
- **Text Secondary**: 220 10% 45% (muted gray)
- **Border/Divider**: 220 13% 91% (very light gray)

### Functional Colors
- **Tier Colors**: Each skill tier gets distinct color (Sniper: gold, Sharpshooter: silver-blue, Marksman: bronze, Novice: soft green)
- **Wager Indicators**: Green to red gradient showing risk level

## Typography

**Font Families** (Google Fonts CDN):
- **Display/Headings**: 'Outfit' (700, 600, 500) - modern, bold, sporty
- **Body/UI**: 'Inter' (400, 500, 600) - excellent readability, professional
- **Accent/Numbers**: 'Outfit' (700) - for wager amounts and distances

**Scale**:
- Hero/Page Titles: text-4xl md:text-5xl font-bold
- Section Headers: text-2xl md:text-3xl font-semibold  
- Card Titles: text-xl font-semibold
- Body: text-base
- Small/Meta: text-sm
- Micro/Labels: text-xs uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 8, 12, 16 for consistency
- Tight spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-4
- Section spacing: p-8, py-12, gap-8
- Large breaks: py-16, mb-12

**Container Widths**:
- Mobile-first: Full width with px-4
- Desktop: max-w-md mx-auto (single column flow for PWA)
- Cards: Full width within container

## Component Library

### Navigation
- **Header**: Sticky top bar with course info, hole number, back button (h-16, border-b)
- **Progress Stepper**: Visual flow indicator showing current step (Course → Tee → Tier → Payment → Results)
- **Tab Switcher**: Segmented control style for tier selection

### Cards & Containers
- **Selection Cards**: White bg, rounded-2xl, border, p-6, hover:shadow-lg, active state with ring-2 ring-primary
- **Info Cards**: Soft gray bg (bg-gray-50), rounded-xl, p-4, for contextual information
- **Stat Displays**: Grid layout with large numbers (text-3xl font-bold) and labels below

### Form Elements
- **Dropdowns**: Custom styled select with chevron, h-12, rounded-lg, border-2
- **Radio Cards**: Full-width cards with radio behavior, visual check indicator when selected
- **Toggle Groups**: Button group style for wager amounts (connected buttons, first/last rounded)
- **Primary CTA**: Full-width, h-14, rounded-xl, bg-primary text-white font-semibold, shadow-lg
- **Secondary CTA**: h-12, variant="outline", border-2

### Data Display
- **Leaderboard Rows**: Alternating bg colors, rank badge on left, avatar + name center, stats right
- **Distance Display**: Large circular indicator with distance in feet, colored ring based on tier
- **Outcome Badge**: Pill-shaped, colored background, centered text (Hole-in-One!, Within Tier, Close!)

### Video & Media
- **Highlight Preview**: 16:9 aspect ratio container, rounded-2xl, PIP indicator in bottom-right
- **Thumbnail Grid**: 2-column grid on mobile for video gallery

### Payment Flow
- **Payment Card**: Elevated white card (shadow-2xl), Stripe Elements styled to match (height, border-radius, colors)
- **Security Badges**: Small icons row showing security features (lock, shield, verified)
- **Amount Summary**: Large prominent display of wager amount above payment form

### Results Screen
- **Hero Result**: Full-height section with outcome (success/near-miss), animated confetti for wins
- **Stats Breakdown**: Distance from cup (cm precision), skill tier achieved, XP earned
- **Action Buttons**: Share social, Save highlight, Play again (stacked or side-by-side)

## Images

### Hero Sections
- **Homepage/Launch**: Subtle golf course background (fairway/green) with 40% opacity overlay, centered content
- **Tier Selection**: Icons/illustrations for each tier (target/crosshair themed), not photos
- **Results Success**: Celebratory golf imagery (ball near hole) or abstract success visual

### Placement Strategy
- Use subtle background images with overlays for context, not as primary focus
- Player avatars in circular frames (w-12 h-12) for leaderboards
- Course logos in header (h-8)
- Skill tier icons as visual anchors (w-16 h-16)

## Interactions & Animations

**Minimal & Purposeful**:
- **Card Selection**: Scale transform (scale-[1.02]) and shadow increase on tap
- **Button Press**: Slight scale down (active:scale-[0.98]) for tactile feedback  
- **Step Transitions**: Fade + slide (right to left for forward, left to right for back)
- **Success States**: Single confetti burst or check mark animation (via Lottie)
- **Loading States**: Subtle pulse on payment processing, spinner for results

**No Hover States**: Mobile-first means no hover animations, focus on tap/active states

## Accessibility & Dark Mode

While light mode is primary, maintain semantic color tokens for future dark mode:
- Use CSS variables for easy theme switching
- Ensure 4.5:1 contrast ratio minimum for all text
- Large tap targets (min 44x44px) for all interactive elements
- Focus rings (ring-2 ring-offset-2) for keyboard navigation

## Platform-Specific Considerations

### PWA Optimizations
- App-like header without browser chrome feel
- Bottom sheet style modals for selections
- Swipe gestures for step navigation
- Install prompt with custom branding
- Splash screen with ACE HUNTER logo on launch

### Golf Course Context
- Quick access to hole info (yardage, par) in header
- Weather widget option (temperature, wind)
- Battery indicator (PWA runs on course for hours)
- Offline capability messaging for poor connectivity areas

This design system creates a premium, trustworthy, and exciting experience that golfers will confidently use on the course while wagering real money.