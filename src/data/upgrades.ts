import { Upgrade } from '../types/game';

export const UPGRADES: Upgrade[] = [
  {
    id: 'betterThumbnails',
    name: 'Better Thumbnails',
    description: 'Clicks generate +1 view',
    cost: 50,
    type: 'click',
    multiplier: 1
  },
  {
    id: 'catchyCaptions',
    name: 'Catchy Captions',
    description: 'Clicks generate +5 views',
    cost: 500,
    type: 'click',
    multiplier: 5
  },
  {
    id: 'clickbaitMastery',
    name: 'Clickbait Mastery',
    description: 'Clicks generate 2x views',
    cost: 5000,
    type: 'click',
    multiplier: 2
  },
  {
    id: 'internMotivation',
    name: 'Motivational Posters',
    description: 'Interns generate +50% views',
    cost: 1000,
    type: 'building',
    target: 'intern',
    multiplier: 1.5
  },
  {
    id: 'dankMemeGenerator',
    name: 'Dank Meme Generator',
    description: 'Meme Makers generate +100% views',
    cost: 5000,
    type: 'building',
    target: 'memeMaker',
    multiplier: 2
  },
  {
    id: 'hashtagTrending',
    name: 'Hashtag Trending',
    description: '+5% views per second for all buildings',
    cost: 10000,
    type: 'global',
    multiplier: 1.05
  }
];