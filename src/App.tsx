import React from 'react';
import { Eye, ThumbsUp, Share2, Users, TrendingUp } from 'lucide-react';
import { ClickButton } from './components/ClickButton';
import { Counter } from './components/Counter';
import { ProgressBar } from './components/ProgressBar';
import { BuildingList } from './components/BuildingList';
import { useGame } from './hooks/useGame';
import { formatNumber } from './utils/format';

function App() {
  const { gameState, handleClick, handleBuyBuilding } = useGame();
  const nextMilestone = 1000; // This would be dynamic based on progress

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Viral Clicker Challenge
          </h1>
          <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-purple-600">
              {formatNumber(gameState.trendPoints)} Trend Points
            </span>
          </div>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Counter 
            label="Views" 
            value={gameState.views} 
            icon={<Eye className="w-5 h-5" />}
          >
            <div className="text-xs text-gray-500 mt-1">
              +{formatNumber(gameState.autoViewsPerSecond)}/sec
            </div>
          </Counter>
          <Counter 
            label="Likes" 
            value={gameState.likes} 
            icon={<ThumbsUp className="w-5 h-5" />} 
          />
          <Counter 
            label="Shares" 
            value={gameState.shares} 
            icon={<Share2 className="w-5 h-5" />} 
          />
          <Counter 
            label="Followers" 
            value={gameState.followers} 
            icon={<Users className="w-5 h-5" />} 
          />
        </div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-12">
          <ProgressBar
            current={gameState.views}
            target={nextMilestone}
            label="Next Milestone"
          />
        </div>

        {/* Main Click Button */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <ClickButton
            onClick={handleClick}
            viewsPerClick={gameState.viewsPerClick}
          />
        </div>

        {/* Buildings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Buildings</h2>
          <BuildingList 
            gameState={gameState}
            onBuyBuilding={handleBuyBuilding}
          />
        </div>
      </div>
    </div>
  );
}

export default App;