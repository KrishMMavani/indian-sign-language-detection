// src/animations/alphabets/C.tsx
import { AnimationRef, BoneAnimation } from '../../types/animation';

export const C = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers curl
      ["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"],
      
      // Right thumb positioning
      ["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"],
      ["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"],

      // Right hand/arm positioning
      ["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"],
      ["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]
    ],
    [
      // Reset right hand fingers
      ["mixamorigRightHandIndex1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandIndex2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandIndex3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],
      
      // Reset right thumb
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "y", 0, "-"],
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Reset right hand/arm
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};