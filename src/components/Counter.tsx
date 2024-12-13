import React from 'react';

interface CounterProps {
  label: string;
  value: number;
  icon: React.ReactNode;
}

export function Counter({ label, value, icon, children }: React.PropsWithChildren<CounterProps>) {
  const formattedValue = value >= 1000000 
    ? `${(value / 1000000).toFixed(1)}M` 
    : value >= 1000 
    ? `${(value / 1000).toFixed(1)}K` 
    : value;

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-2xl font-bold text-indigo-600">{formattedValue}</div>
      {children}
    </div>
  );
}