// src/animations/alphabets/Z.tsx
import { AnimationRef, BoneAnimation } from '../../types/animation';

export const Z = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers
      ["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"],

      // Right hand/arm
      ["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"],
      ["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"],

      // Left hand/arm
      ["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"],
      ["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"],
      ["mixamorigLeftHand", "rotation", "y", -Math.PI/9, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]
    ],
    [
      // Reset right hand fingers
      ["mixamorigRightHandIndex1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],

      // Reset right hand/arm
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"],

      // Reset left hand/arm
      ["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"],
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "y", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]
    ]
  ];
  
  ref.current.pending = true;
};