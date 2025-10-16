# ACE HUNTER - Golf Skill Wagering PWA

## Project Overview
ACE HUNTER is a premium Progressive Web App (PWA) for golf skill wagering. Golfers can test their precision on Par 3 holes, place wagers based on their skill tier, and win instant payouts with AI-powered shot verification and highlight videos.

## Current Status
**Frontend-Only Implementation** - All UI components and user flows are complete with mock data. No backend or database integration yet. **PWA-ready** with offline support, service worker caching, and install prompt.

## Tech Stack
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter
- **UI Components**: Shadcn UI
- **Fonts**: Outfit (display), Inter (body)
- **PWA**: Service Worker for offline support, installable app

## Project Structure
```
client/
├── public/
│   ├── sw.js            # Service worker for offline support
│   ├── manifest.json    # PWA manifest
│   └── icon.svg         # App icon
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn components
│   │   ├── Header.tsx   # App header with back/profile navigation
│   │   ├── ProgressStepper.tsx  # 7-step flow indicator
│   │   └── InstallPrompt.tsx    # PWA install prompt
│   ├── pages/
│   │   ├── HomePage.tsx      # Landing page with install prompt
│   │   ├── SetupPage.tsx     # Course/Hole/TeeBox selection
│   │   ├── TierPage.tsx      # Skill tier selection
│   │   ├── WagerPage.tsx     # Wager amount selection
│   │   ├── PaymentPage.tsx   # Payment flow (mock)
│   │   ├── TakeShotPage.tsx  # Camera activation & shot capture
│   │   ├── ResultPage.tsx    # Shot result display
│   │   └── ProfilePage.tsx   # User profile & stats
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
6. **Take Shot** - Camera activation with 3-second countdown and shot capture simulation
7. **Results** - Shot outcome, distance from cup, payout, and highlight video
8. **Profile** - User stats, achievements, XP progress, and recent shot history (accessible from header)

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

## PWA Features (NEW!)
- **Service Worker**: Caches app shell for offline access (cache version: ace-hunter-v1)
- **Offline Support**: App works without internet after first visit
- **Install Prompt**: Custom UI prompts users to install app to home screen
- **Session Dismissal**: Install prompt respects user preference within session
- **Standalone Mode**: Full-screen app experience when installed
- **Cache Strategies**: 
  - Cache-first for static assets (HTML, CSS, JS, images, fonts)
  - Network-first with cache fallback for dynamic content
  - Automatic cache cleanup on service worker updates

## Development Notes
- Frontend uses latest React 19 with Vite build system
- All components follow Shadcn design patterns
- Responsive mobile-first design
- Full PWA implementation with offline capability
- Service worker registered on app load with auto-updates
- No server folder or database - pure frontend implementation
- Smooth 300ms page transitions with accessibility support
- 7-step wagering flow: Setup → Position → Tier → Wager → Payment → Take Shot → Results
- Profile page with user stats, XP system, achievements, and recent activity
- Header includes profile button (User icon) for quick access to profile page
- All interactive elements have data-testid attributes for testing
- Camera activation page simulates 3-second countdown and shot capture
