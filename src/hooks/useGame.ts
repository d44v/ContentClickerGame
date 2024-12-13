import { useState, useEffect, useCallback } from 'react';
import { GameState, BuildingType } from '../types/game';
import { BUILDINGS } from '../data/buildings';

const AUTOSAVE_INTERVAL = 10000; // 10 seconds
const TICK_INTERVAL = 100; // 100ms

const INITIAL_STATE: GameState = {
  views: 0,
  likes: 0,
  shares: 0,
  followers: 0,
  viewsPerClick: 1,
  autoViewsPerSecond: 0,
  trendPoints: 0,
  lastUpdate: Date.now(),
  buildings: Object.fromEntries(BUILDINGS.map(b => [b.id, 0])), // Initialize all buildings with 0
  upgrades: {},
};

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(() => {
    try {
      const saved = localStorage.getItem('viralClickerState');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all buildings exist in loaded state
        const buildings = { ...Object.fromEntries(BUILDINGS.map(b => [b.id, 0])), ...parsed.buildings };
        return { ...INITIAL_STATE, ...parsed, buildings };
      }
    } catch (error) {
      console.error('Error loading game state:', error);
    }
    return INITIAL_STATE;
  });

  const calculateAutoViewsPerSecond = useCallback((buildings: Record<BuildingType, number>) => {
    return BUILDINGS.reduce((total, building) => {
      const owned = buildings[building.id] || 0;
      return total + (building.baseOutput * owned);
    }, 0);
  }, []);

  const handleClick = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      views: prev.views + prev.viewsPerClick,
    }));
  }, []);

  const handleBuyBuilding = useCallback((buildingId: string) => {
    setGameState(prev => {
      const building = BUILDINGS.find(b => b.id === buildingId);
      if (!building) return prev;

      const owned = prev.buildings[buildingId] || 0;
      const cost = Math.floor(building.baseCost * Math.pow(1.15, owned));
      
      if (prev.views < cost) return prev;

      const newBuildings = {
        ...prev.buildings,
        [buildingId]: owned + 1
      };

      return {
        ...prev,
        views: prev.views - cost,
        buildings: newBuildings,
        autoViewsPerSecond: calculateAutoViewsPerSecond(newBuildings)
      };
    });
  }, [calculateAutoViewsPerSecond]);

  // Auto-generation and conversion logic
  useEffect(() => {
    const tickInterval = setInterval(() => {
      setGameState(prev => {
        const now = Date.now();
        const deltaSeconds = (now - prev.lastUpdate) / 1000;
        
        // Calculate new views from auto-generation
        const newViews = prev.views + (prev.autoViewsPerSecond * deltaSeconds);
        
        // Convert views to likes (1 like per 10 views)
        const newLikes = Math.floor(newViews / 10);
        
        // Convert likes to shares (1 share per 5 likes)
        const newShares = Math.floor(newLikes / 5);
        
        // Convert shares to followers (1 follower per 3 shares)
        const newFollowers = Math.floor(newShares / 3);

        return {
          ...prev,
          views: newViews,
          likes: newLikes,
          shares: newShares,
          followers: newFollowers,
          lastUpdate: now,
        };
      });
    }, TICK_INTERVAL);

    return () => clearInterval(tickInterval);
  }, []);

  // Autosave
  useEffect(() => {
    const saveInterval = setInterval(() => {
      localStorage.setItem('viralClickerState', JSON.stringify(gameState));
    }, AUTOSAVE_INTERVAL);

    return () => clearInterval(saveInterval);
  }, [gameState]);

  return {
    gameState,
    handleClick,
    handleBuyBuilding,
  };
}
