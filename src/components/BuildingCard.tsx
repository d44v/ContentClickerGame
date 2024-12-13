import React from 'react';
import { Building } from '../types/game';
import { formatNumber } from '../utils/format';

interface BuildingCardProps {
  building: Building;
  icon: React.ReactNode;
  owned: number;
  cost: number;
  canAfford: boolean;
  onBuy: () => void;
}

export function BuildingCard({ building, icon, owned, cost, canAfford, onBuy }: BuildingCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{building.name}</h3>
          <p className="text-sm text-gray-500">Owned: {owned}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{building.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p className="text-gray-600">Produces:</p>
          <p className="font-medium text-indigo-600">
            +{formatNumber(building.baseOutput)}/sec
          </p>
        </div>
        
        <button
          onClick={onBuy}
          disabled={!canAfford}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${canAfford 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
        >
          {formatNumber(cost)} views
        </button>
      </div>
    </div>
  );
}