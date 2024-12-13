import { Building } from '../types/game';
import { Users, Image, Video, Megaphone, Users2, Building2, Star, Brain } from 'lucide-react';

export const BUILDINGS: Building[] = [
  {
    id: 'intern',
    name: 'Intern',
    description: 'A beginner-level assistant for content.',
    baseCost: 15,
    baseOutput: 0.1,
    icon: Users.name
  },
  {
    id: 'memeMaker',
    name: 'Meme Maker',
    description: 'Generates low-effort viral memes.',
    baseCost: 100,
    baseOutput: 1,
    icon: Image.name
  },
  {
    id: 'videoEditor',
    name: 'Video Editor',
    description: 'Boosts content quality and views.',
    baseCost: 1000,
    baseOutput: 10,
    icon: Video.name
  },
  {
    id: 'adCampaign',
    name: 'Ad Campaign',
    description: 'Runs basic ad campaigns for views.',
    baseCost: 10000,
    baseOutput: 100,
    icon: Megaphone.name
  },
  {
    id: 'influencerManager',
    name: 'Influencer Manager',
    description: 'Manages mid-tier influencers.',
    baseCost: 100000,
    baseOutput: 1000,
    icon: Users2.name
  },
  {
    id: 'brandPartnership',
    name: 'Brand Partnership',
    description: 'Generates massive views via sponsorship.',
    baseCost: 1000000,
    baseOutput: 10000,
    icon: Building2.name
  },
  {
    id: 'celebrityEndorsement',
    name: 'Celebrity Endorsement',
    description: 'Unlocks views from global celebrities.',
    baseCost: 10000000,
    baseOutput: 100000,
    icon: Star.name
  },
  {
    id: 'aiAlgorithm',
    name: 'AI Algorithm Master',
    description: 'Dominates social media algorithms.',
    baseCost: 100000000,
    baseOutput: 1000000,
    icon: Brain.name
  }
];