// src/animations/alphabets/Q.tsx
import { AnimationRef } from '../../types/animation';

export const Q = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Sign formation
      ["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.2, "+"],
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
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/10, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"],

      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"],

      // Left hand fingers - Sign formation
      ["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/3, "-"],
      ["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/3, "-"],
      ["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"],
      ["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/10, "+"],
      ["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/10, "+"],

      // Left hand/arm - Sign formation
      ["mixamorigLeftHand", "rotation", "y", Math.PI/2.8, "+"],
      ["mixamorigLeftHand", "rotation", "x", Math.PI/3, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/8.3, "-"]
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
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"],

      // Left hand fingers - Reset animations
      ["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"],

      // Left hand/arm - Reset animations
      ["mixamorigLeftHand", "rotation", "y", 0, "-"],
      ["mixamorigLeftHand", "rotation", "x", 0, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "y", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};