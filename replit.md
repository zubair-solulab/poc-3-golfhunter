# ACE HUNTER - Golf Skill Wagering PWA

## Project Overview
ACE HUNTER is a premium Progressive Web App (PWA) for golf skill wagering. Golfers can test their precision on Par 3 holes, place wagers based on their skill tier, and win instant payouts with AI-powered shot verification and highlight videos.

## Current Status
**Frontend-Only Implementation** - All UI components and user flows are complete with mock data. No backend or database integration yet.

## Tech Stack
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter
- **UI Components**: Shadcn UI
- **Fonts**: Outfit (display), Inter (body)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn components
│   │   ├── Header.tsx   # App header with navigation
│   │   └── ProgressStepper.tsx  # Multi-step flow indicator
│   ├── pages/
│   │   ├── HomePage.tsx      # Landing page
│   │   ├── SetupPage.tsx     # Course/Hole/TeeBox selection
│   │   ├── TierPage.tsx      # Skill tier selection
│   │   ├── WagerPage.tsx     # Wager amount selection
│   │   ├── PaymentPage.tsx   # Payment flow (mock)
│   │   └── ResultPage.tsx    # Shot result display
│   ├── types/
│   │   └── golf.ts      # TypeScript interfaces
│   └── lib/
│       └── mock-data.ts # Mock courses, holes, tiers, wagers
└── index.html
```

## User Journey
1. **Landing Page** - Overview of how ACE HUNTER works
2. **Setup** - Select course, hole number, and tee box position
3. **Skill Tier** - Choose from 4 tiers (Sniper/Sharpshooter/Marksman/Novice)
4. **Wager** - Select wager amount ($5-$100) with payout preview
5. **Payment** - Secure payment form (mock Stripe integration)
6. **Results** - Shot outcome, distance from cup, payout, and highlight video

## Design System
- **Primary Color**: Deep golf green (#1a4d2e) - trust and tradition
- **Accent Color**: Warm gold - premium and achievement
- **Typography**: Outfit for headings, Inter for body
- **Spacing**: 4px, 8px, 16px, 24px, 32px system
- **Components**: Premium cards with rounded-2xl, hover/active states
- **Mobile-First**: Optimized for on-course mobile usage

## Skill Tiers
- **Sniper** (≤3ft): 10x payout multiplier - Gold gradient
- **Sharpshooter** (≤6ft): 5x payout - Silver-blue gradient
- **Marksman** (≤9ft): 3x payout - Bronze gradient
- **Novice** (≤12ft): 2x payout - Soft green gradient

## Mock Data
- 3 sample courses (Pebble Beach, Augusta National, St. Andrews)
- Par 3 holes with multiple tee box options (White, Blue, Red)
- Wager amounts: $5, $10, $25, $50, $100
- Simulated payment processing and results

## Next Phase
- Backend API integration
- Real Stripe payment processing
- Database for courses, holes, and user sessions
- Real-time camera activation system
- Video processing and AI ball tracer
- User authentication and player profiles
- Leaderboards and XP system
- Social sharing capabilities

## Development Notes
- Frontend uses latest React 19 with Vite build system
- All components follow Shadcn design patterns
- Responsive mobile-first design
- PWA manifest included for app-like experience
- No server folder or database - pure frontend implementation
