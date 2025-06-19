// src/animations/alphabets/L.tsx
import { AnimationRef } from '../../types/animation';

export const L = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Sign formation
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandThumb1", "rotation", "z", Math.PI/4, "+"],

      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"],
      ["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]
    ],
    [
      // Right hand fingers - Reset animations
      ["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "z", 0, "-"],

      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};