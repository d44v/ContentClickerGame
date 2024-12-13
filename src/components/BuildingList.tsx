import React from 'react';
import { BUILDINGS } from '../data/buildings';
import { BuildingCard } from './BuildingCard';
import { GameState } from '../types/game';
import * as Icons from 'lucide-react';

interface BuildingListProps {
  gameState: GameState;
  onBuyBuilding: (buildingId: string) => void;
}

export function BuildingList({ gameState, onBuyBuilding }: BuildingListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {BUILDINGS.map(building => {
        const Icon = Icons[building.icon as keyof typeof Icons];
        const owned = gameState.buildings[building.id] || 0;
        const cost = Math.floor(building.baseCost * Math.pow(1.15, owned));
        const canAfford = gameState.views >= cost;

        return (
          <BuildingCard
            key={building.id}
            building={building}
            icon={<Icon className="w-6 h-6" />}
            owned={owned}
            cost={cost}
            canAfford={canAfford}
            onBuy={() => onBuyBuilding(building.id)}
          />
        );
      })}
    </div>
  );
}