import React from 'react';
import { useStore } from '../../store';
import { AlphabetButton } from './AlphabetButton';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const words = ['time', 'home', 'person', 'you'];

export function AlphabetGrid() {
  const startAnimation = useStore((state) => state.startAnimation);

  return (
    <div className=" p-6 rounded-xl flex flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-x-4 gap-y-3 w-full">
        {letters.map((letter) => (
          <AlphabetButton
            key={letter}
            letter={letter}
            onClick={() => startAnimation(letter)}
          />
        ))}
      </div>
      
      {/* Add word buttons below the alphabet grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 w-full">
        {words.map((word) => (
          <button
            key={word}
            className="btn-secondary w-full py-3 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
            onClick={() => startAnimation(word)}
            aria-label={`Show ${word} in sign language`}
          >
            <span className="text-xl font-bold text-accent capitalize">{word}</span>
          </button>
        ))}
      </div>
    </div>
  );
}