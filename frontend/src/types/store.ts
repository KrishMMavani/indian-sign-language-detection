// src/store.ts
import { create } from 'zustand';
import { AnimationState, AnimationStore, AnimationRef } from './types/animation';
// Manually import all alphabet animations as you prefer
import { A } from './animations/alphabets/A';
import { B } from './animations/alphabets/B';
import { C } from './animations/alphabets/C';
import { D } from './animations/alphabets/D';
import { E } from './animations/alphabets/E';
import { F } from './animations/alphabets/F';
import { G } from './animations/alphabets/G';
import { H } from './animations/alphabets/H';
import { I } from './animations/alphabets/I';
import { J } from './animations/alphabets/J';
import { K } from './animations/alphabets/K';
import { L } from './animations/alphabets/L';
import { M } from './animations/alphabets/M';
import { N } from './animations/alphabets/N';
import { O } from './animations/alphabets/O';
import { P } from './animations/alphabets/P';
import { Q } from './animations/alphabets/Q';
import { R } from './animations/alphabets/R';
import { S } from './animations/alphabets/S';
import { T } from './animations/alphabets/T';
import { U } from './animations/alphabets/U';
import { V } from './animations/alphabets/V';
import { W } from './animations/alphabets/W';
import { X } from './animations/alphabets/X';
import { Y } from './animations/alphabets/Y';
import { Z } from './animations/alphabets/Z';

const alphabetMap = {
  A, B, C, D, E, F, G, H, I, J, K, L, M,
  N, O, P, Q, R, S, T, U, V, W, X, Y, Z
};
// src/store.ts
export const useStore = create<AnimationStore>((set, get) => ({
  animationRef: null,
  processedText: '',
  
  setAnimationRef: (ref) => set({ animationRef: ref }),
  setProcessedText: (text) => set({ processedText: text }),
  clearProcessedText: () => set({ processedText: '' }),
  
  startAnimation: (letter) => {
    const { animationRef } = get();
    const upperLetter = letter.toUpperCase();
    
    if (animationRef && upperLetter in alphabetMap) {
      animationRef.animations = [];
      animationRef.pending = true;
      alphabetMap[upperLetter as keyof typeof alphabetMap](animationRef as AnimationRef);
    }
  },
  
  playTextAnimation: (letter) => {
    const { animationRef, setProcessedText } = get();
    const upperLetter = letter.toUpperCase();
    
    if (animationRef && upperLetter in alphabetMap) {
      // Clear existing animations
      animationRef.animations = [];
      animationRef.pending = true;
      
      // Execute the alphabet animation
      alphabetMap[upperLetter as keyof typeof alphabetMap](animationRef);
      
      // Update processed text when animation starts
      setProcessedText(get().processedText + upperLetter);
    }
  }
}));