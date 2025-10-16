export interface Course {
  id: string;
  name: string;
  location: string;
  logoUrl?: string;
}

export interface Hole {
  id: string;
  number: number;
  par: number;
  yardage: number;
  courseId: string;
}

export interface TeeBox {
  id: string;
  name: string;
  color: 'white' | 'blue' | 'red' | 'gold';
  yardage: number;
  holeId: string;
}

export type SkillTier = 'sniper' | 'sharpshooter' | 'marksman' | 'novice';

export interface SkillTierInfo {
  id: SkillTier;
  name: string;
  distance: number;
  description: string;
  color: string;
  payout: number;
}

export interface WagerAmount {
  value: number;
  label: string;
  potential: number;
}

export interface ShotResult {
  outcome: 'hole-in-one' | 'within-tier' | 'close' | 'missed';
  distanceFromCup: number;
  tier: SkillTier;
  wagerAmount: number;
  payout: number;
  xpEarned: number;
  videoUrl?: string;
}

export interface Session {
  courseId: string;
  holeId: string;
  teeBoxId: string;
  skillTier: SkillTier;
  wagerAmount: number;
  timestamp: Date;
}
