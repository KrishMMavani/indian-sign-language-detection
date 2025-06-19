// src/animations/alphabets/R.tsx
import { AnimationRef } from '../../types/animation';

export const R = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Sign formation
      ["mixamorigRightHandIndex2", "rotation", "z", Math.PI/8, "+"],
      ["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.2, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"],
      ["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"],
      ["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"],

      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "x", -Math.PI/2.3, "-"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"],

      // Left hand - Sign formation
      ["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"],
      ["mixamorigLeftHand", "rotation", "x", -Math.PI/1.3, "-"],
      ["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"],

      // Left arm - Sign formation
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"],
      ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]
    ],
    [
      // Right hand fingers - Reset animations
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
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "x", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],

      // Left hand - Reset animations
      ["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "x", 0, "+"],
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],

      // Left arm - Reset animations
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "y", -2.0943951023931953, "+"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]
    ]
  ];

  ref.current.pending = true;
};