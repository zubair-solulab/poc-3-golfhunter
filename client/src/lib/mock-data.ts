import type { Course, Hole, TeeBox, SkillTierInfo, WagerAmount, LeaderboardEntry } from '@/types/golf';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    name: 'Pebble Beach Golf Links',
    location: 'Pebble Beach, CA',
  },
  {
    id: '2',
    name: 'Augusta National Golf Club',
    location: 'Augusta, GA',
  },
  {
    id: '3',
    name: 'St. Andrews Links',
    location: 'St. Andrews, Scotland',
  },
];

export const MOCK_HOLES: Record<string, Hole[]> = {
  '1': [
    { id: '1-7', number: 7, par: 3, yardage: 106, courseId: '1' },
    { id: '1-17', number: 17, par: 3, yardage: 178, courseId: '1' },
  ],
  '2': [
    { id: '2-12', number: 12, par: 3, yardage: 155, courseId: '2' },
    { id: '2-16', number: 16, par: 3, yardage: 170, courseId: '2' },
  ],
  '3': [
    { id: '3-8', number: 8, par: 3, yardage: 178, courseId: '3' },
    { id: '3-11', number: 11, par: 3, yardage: 172, courseId: '3' },
  ],
};

export const MOCK_TEE_BOXES: Record<string, TeeBox[]> = {
  '1-7': [
    { id: '1-7-white', name: 'White Tees', color: 'white', yardage: 106, holeId: '1-7' },
    { id: '1-7-blue', name: 'Blue Tees', color: 'blue', yardage: 118, holeId: '1-7' },
    { id: '1-7-red', name: 'Red Tees', color: 'red', yardage: 95, holeId: '1-7' },
  ],
  '1-17': [
    { id: '1-17-white', name: 'White Tees', color: 'white', yardage: 178, holeId: '1-17' },
    { id: '1-17-blue', name: 'Blue Tees', color: 'blue', yardage: 188, holeId: '1-17' },
    { id: '1-17-red', name: 'Red Tees', color: 'red', yardage: 160, holeId: '1-17' },
  ],
  '2-12': [
    { id: '2-12-white', name: 'White Tees', color: 'white', yardage: 155, holeId: '2-12' },
    { id: '2-12-blue', name: 'Blue Tees', color: 'blue', yardage: 165, holeId: '2-12' },
    { id: '2-12-red', name: 'Red Tees', color: 'red', yardage: 140, holeId: '2-12' },
  ],
  '2-16': [
    { id: '2-16-white', name: 'White Tees', color: 'white', yardage: 170, holeId: '2-16' },
    { id: '2-16-blue', name: 'Blue Tees', color: 'blue', yardage: 180, holeId: '2-16' },
    { id: '2-16-red', name: 'Red Tees', color: 'red', yardage: 155, holeId: '2-16' },
  ],
  '3-8': [
    { id: '3-8-white', name: 'White Tees', color: 'white', yardage: 178, holeId: '3-8' },
    { id: '3-8-blue', name: 'Blue Tees', color: 'blue', yardage: 188, holeId: '3-8' },
    { id: '3-8-red', name: 'Red Tees', color: 'red', yardage: 165, holeId: '3-8' },
  ],
  '3-11': [
    { id: '3-11-white', name: 'White Tees', color: 'white', yardage: 172, holeId: '3-11' },
    { id: '3-11-blue', name: 'Blue Tees', color: 'blue', yardage: 182, holeId: '3-11' },
    { id: '3-11-red', name: 'Red Tees', color: 'red', yardage: 160, holeId: '3-11' },
  ],
};

export const SKILL_TIERS: SkillTierInfo[] = [
  {
    id: 'sniper',
    name: 'Sniper',
    distance: 3,
    description: 'Elite precision - within 3 feet',
    color: 'from-yellow-400 to-amber-500',
    payout: 10,
  },
  {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    distance: 6,
    description: 'Expert accuracy - within 6 feet',
    color: 'from-slate-300 to-slate-400',
    payout: 5,
  },
  {
    id: 'marksman',
    name: 'Marksman',
    distance: 9,
    description: 'Skilled shooter - within 9 feet',
    color: 'from-orange-400 to-orange-500',
    payout: 3,
  },
  {
    id: 'novice',
    name: 'Novice',
    distance: 12,
    description: 'Building skills - within 12 feet',
    color: 'from-emerald-300 to-emerald-400',
    payout: 2,
  },
];

export const WAGER_AMOUNTS: WagerAmount[] = [
  { value: 5, label: '$5', potential: 25 },
  { value: 10, label: '$10', potential: 50 },
  { value: 25, label: '$25', potential: 125 },
  { value: 50, label: '$50', potential: 250 },
  { value: 100, label: '$100', potential: 500 },
];

export const MOCK_LEADERBOARDS: Record<string, LeaderboardEntry[]> = {
  '1': [
    { rank: 1, playerName: 'Tiger Woods', bestDistance: 1.2, totalWins: 48, totalXP: 15000, tier: 'sniper' },
    { rank: 2, playerName: 'Jordan Spieth', bestDistance: 1.8, totalWins: 42, totalXP: 12500, tier: 'sniper' },
    { rank: 3, playerName: 'Rory McIlroy', bestDistance: 2.4, totalWins: 38, totalXP: 11000, tier: 'sniper' },
    { rank: 4, playerName: 'Phil Mickelson', bestDistance: 3.1, totalWins: 35, totalXP: 9800, tier: 'sharpshooter' },
    { rank: 5, playerName: 'Dustin Johnson', bestDistance: 3.8, totalWins: 31, totalXP: 8500, tier: 'sharpshooter' },
    { rank: 6, playerName: 'Justin Thomas', bestDistance: 4.5, totalWins: 28, totalXP: 7200, tier: 'sharpshooter' },
    { rank: 7, playerName: 'Brooks Koepka', bestDistance: 5.2, totalWins: 24, totalXP: 6100, tier: 'sharpshooter' },
    { rank: 8, playerName: 'Rickie Fowler', bestDistance: 6.8, totalWins: 20, totalXP: 5000, tier: 'marksman' },
    { rank: 9, playerName: 'Tony Finau', bestDistance: 7.5, totalWins: 16, totalXP: 4200, tier: 'marksman' },
    { rank: 10, playerName: 'Patrick Cantlay', bestDistance: 8.2, totalWins: 12, totalXP: 3500, tier: 'marksman' },
  ],
  '2': [
    { rank: 1, playerName: 'Jack Nicklaus', bestDistance: 0.8, totalWins: 52, totalXP: 18000, tier: 'sniper' },
    { rank: 2, playerName: 'Arnold Palmer', bestDistance: 1.5, totalWins: 45, totalXP: 14000, tier: 'sniper' },
    { rank: 3, playerName: 'Gary Player', bestDistance: 2.1, totalWins: 40, totalXP: 12000, tier: 'sniper' },
    { rank: 4, playerName: 'Ben Hogan', bestDistance: 2.9, totalWins: 36, totalXP: 10500, tier: 'sniper' },
    { rank: 5, playerName: 'Sam Snead', bestDistance: 3.5, totalWins: 32, totalXP: 9000, tier: 'sharpshooter' },
    { rank: 6, playerName: 'Tom Watson', bestDistance: 4.2, totalWins: 29, totalXP: 7800, tier: 'sharpshooter' },
    { rank: 7, playerName: 'Byron Nelson', bestDistance: 5.0, totalWins: 25, totalXP: 6500, tier: 'sharpshooter' },
    { rank: 8, playerName: 'Nick Faldo', bestDistance: 6.5, totalWins: 21, totalXP: 5400, tier: 'marksman' },
    { rank: 9, playerName: 'Seve Ballesteros', bestDistance: 7.8, totalWins: 17, totalXP: 4500, tier: 'marksman' },
    { rank: 10, playerName: 'Greg Norman', bestDistance: 8.5, totalWins: 13, totalXP: 3800, tier: 'marksman' },
  ],
  '3': [
    { rank: 1, playerName: 'Old Tom Morris', bestDistance: 1.0, totalWins: 50, totalXP: 16000, tier: 'sniper' },
    { rank: 2, playerName: 'Young Tom Morris', bestDistance: 1.6, totalWins: 44, totalXP: 13500, tier: 'sniper' },
    { rank: 3, playerName: 'Bobby Jones', bestDistance: 2.3, totalWins: 39, totalXP: 11500, tier: 'sniper' },
    { rank: 4, playerName: 'Harry Vardon', bestDistance: 3.0, totalWins: 34, totalXP: 10000, tier: 'sniper' },
    { rank: 5, playerName: 'James Braid', bestDistance: 3.6, totalWins: 30, totalXP: 8800, tier: 'sharpshooter' },
    { rank: 6, playerName: 'John H. Taylor', bestDistance: 4.4, totalWins: 27, totalXP: 7500, tier: 'sharpshooter' },
    { rank: 7, playerName: 'Willie Park Jr.', bestDistance: 5.1, totalWins: 23, totalXP: 6300, tier: 'sharpshooter' },
    { rank: 8, playerName: 'Gene Sarazen', bestDistance: 6.7, totalWins: 19, totalXP: 5200, tier: 'marksman' },
    { rank: 9, playerName: 'Walter Hagen', bestDistance: 7.6, totalWins: 15, totalXP: 4400, tier: 'marksman' },
    { rank: 10, playerName: 'Francis Ouimet', bestDistance: 8.4, totalWins: 11, totalXP: 3600, tier: 'marksman' },
  ],
};