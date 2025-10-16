import type { Course, Hole, TeeBox, SkillTierInfo, WagerAmount } from '@/types/golf';

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
