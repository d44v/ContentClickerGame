import React from 'react';
import { Camera } from 'lucide-react';

interface ClickButtonProps {
  onClick: () => void;
  viewsPerClick: number;
}

export function ClickButton({ onClick, viewsPerClick }: ClickButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-200" />
      </div>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
        <span className="text-sm font-medium text-gray-600">+{viewsPerClick} views/click</span>
      </div>
    </button>
  );
}