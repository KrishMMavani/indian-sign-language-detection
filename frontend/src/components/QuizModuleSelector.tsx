import React from 'react';
import { BookOpen, Target } from 'lucide-react';

interface QuizModuleSelectorProps {
  selectedModule: 'learning' | 'level' | null;
  onModuleSelect: (module: 'learning' | 'level') => void;
}

export function QuizModuleSelector({ selectedModule, onModuleSelect }: QuizModuleSelectorProps) {
  return (
    <div className="flex gap-4 justify-center mb-8">
      <button
        onClick={() => onModuleSelect('learning')}
        className={`btn-secondary flex items-center gap-2 ${
          selectedModule === 'learning' ? 'scale-105 shadow-lg shadow-accent/20' : ''
        }`}
      >
        <BookOpen className="w-5 h-5" />
        Learning-Based Quiz
      </button>
      <button
        onClick={() => onModuleSelect('level')}
        className={`btn-secondary flex items-center gap-2 ${
          selectedModule === 'level' ? 'scale-105 shadow-lg shadow-accent/20' : ''
        }`}
      >
        <Target className="w-5 h-5" />
        Level-Based Quiz
      </button>
    </div>
  );
}