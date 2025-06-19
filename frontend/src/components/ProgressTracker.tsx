import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ProgressTrackerProps {
  completed: number;
  total: number;
}

export function ProgressTracker({ completed, total }: ProgressTrackerProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-accent" />
          Progress Tracker
        </h3>
        <span className="text-accent">{completed}/{total} completed</span>
      </div>
      <div className="w-full h-2 bg-dark-lightest rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}