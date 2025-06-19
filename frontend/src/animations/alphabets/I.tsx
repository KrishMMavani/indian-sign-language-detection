// src/animations/alphabets/I.tsx
import { AnimationRef } from '../../types/animation';

export const I = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Left hand fingers - Sign formation
      ["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"],
      ["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"],
      ["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"],
      ["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"],

      // Left hand/arm - Sign formation
      ["mixamorigLeftHand", "rotation", "x", Math.PI/1.55, "+"],
      ["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"],
      ["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"],
      ["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"],

      // Right hand fingers - Sign formation
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"],

      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"],
      ["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"],
      ["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/13, "-"]
    ],
    [
      // Left hand fingers - Reset animations
      ["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"],
      ["mixamorigLeftHandMiddle1", "rotation", "y", 0, "+"],
      ["mixamorigLeftHandRing1", "rotation", "y", 0, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"],

      // Left hand/arm - Reset animations
      ["mixamorigLeftHand", "rotation", "x", 0, "-"],
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "y", 0, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "y", 0, "+"],

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
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "x", 0, "+"],
      ["mixamorigRightHand", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "+"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};