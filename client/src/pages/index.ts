import { lazy } from 'react';

// Route-based lazy loading with better chunk naming
export const HomePage = lazy(() => import('@/pages/HomePage'));
export const SetupPage = lazy(() => import('@/pages/SetupPage'));
export const TierPage = lazy(() => import('@/pages/TierPage'));
export const WagerPage = lazy(() => import('@/pages/WagerPage'));
export const PaymentPage = lazy(() => import('@/pages/PaymentPage'));
export const TakeShotPage = lazy(() => import('@/pages/TakeShotPage'));
export const ResultPage = lazy(() => import('@/pages/ResultPage'));
export const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
export const LeaderboardPage = lazy(() => import('@/pages/LeaderBoardPage'));
export const NotFound = lazy(() => import('@/pages/not-found'));

// Preload critical routes (HomePage) for better UX
export const preloadHomePage = () => {
  import('@/pages/HomePage');
};
