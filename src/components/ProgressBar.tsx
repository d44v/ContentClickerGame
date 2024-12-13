import React from 'react';

interface ProgressBarProps {
  current: number;
  target: number;
  label: string;
}

export function ProgressBar({ current, target, label }: ProgressBarProps) {
  const progress = Math.min((current / target) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-700">{current}/{target}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}