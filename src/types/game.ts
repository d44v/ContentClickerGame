export interface GameState {
  views: number;
  likes: number;
  shares: number;
  followers: number;
  viewsPerClick: number;
  autoViewsPerSecond: number;
  trendPoints: number;
  lastUpdate: number;
  buildings: Record<BuildingType, number>;
  upgrades: Record<string, boolean>;
}

export type BuildingType = 
  | 'intern' 
  | 'memeMaker' 
  | 'videoEditor' 
  | 'adCampaign'
  | 'influencerManager'
  | 'brandPartnership'
  | 'celebrityEndorsement'
  | 'aiAlgorithm';

export interface Building {
  id: BuildingType;
  name: string;
  description: string;
  baseCost: number;
  baseOutput: number;
  icon: string;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: 'click' | 'building' | 'global';
  target?: BuildingType;
  multiplier: number;
  requirement?: {
    type: 'building' | 'views' | 'likes';
    id?: BuildingType;
    amount: number;
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  requirement: {
    type: 'views' | 'building' | 'likes' | 'shares';
    amount: number;
    buildingId?: BuildingType;
  };
  bonus: {
    type: 'production' | 'building';
    target?: BuildingType;
    multiplier: number;
  };
}