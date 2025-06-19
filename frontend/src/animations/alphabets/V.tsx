// src/animations/alphabets/V.tsx
import { AnimationRef, BoneAnimation } from '../../types/animation';

export const V = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers
      ["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "y", -Math.PI/16, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/3, "-"],

      // Right hand/arm
      ["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"],
      ["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]
    ],
    [
      // Reset right hand fingers
      ["mixamorigRightHandIndex1", "rotation", "y", 0, "-"],
      ["mixamorigRightHandMiddle1", "rotation", "y", 0, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Reset right hand/arm
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"]
    ]
  ];
  
  ref.current.pending = true;
};