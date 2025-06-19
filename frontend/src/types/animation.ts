
// src/types/animation.ts
import * as THREE from 'three';

export type BoneAnimation = [
  boneName: string,
  action: 'rotation' | 'position',
  axis: 'x' | 'y' | 'z',
  targetValue: number,
  direction: '+' | '-',
  weight?: number
];

export interface AnimationSystem {
  animations: BoneAnimation[][];
  pending: boolean;
  animate: () => void;
  avatar?: THREE.Object3D;
  scene?: THREE.Scene;
  renderer?: THREE.WebGLRenderer;
  camera?: THREE.PerspectiveCamera;
  playSequentialAnimations?: (animations: BoneAnimation[][]) => void;
}

export interface AnimationRef {
  current: AnimationSystem;
}

export interface AnimationState extends AnimationSystem {
  playAnimation?: (animations: BoneAnimation[]) => void;
  resetToDefaultPose?: () => void;
  playSequentialAnimations?: (animations: BoneAnimation[][]) => void;
}

export interface AnimationStore {
  animationRef: AnimationState | null;
  setAnimationRef: (ref: AnimationState) => void;
  startAnimation: (letter: string) => void;
  playTextAnimation: (text: string) => void;
  processedText: string;
  setProcessedText: (text: string) => void;
  clearProcessedText: () => void;
}