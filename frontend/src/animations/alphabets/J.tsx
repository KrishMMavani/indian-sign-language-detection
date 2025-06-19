// src/animations/alphabets/J.tsx
import { AnimationRef } from '../../types/animation';

export const J = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Sign formation
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"],
      ["mixamorigRightHandThumb1", "rotation", "z", Math.PI/2, "+"],

      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"],
      ["mixamorigRightHand", "rotation", "z", Math.PI/6, "+"],
      ["mixamorigRightArm", "rotation", "y", Math.PI/6, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/36, "-"],

      // Left hand fingers - Sign formation
      ["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/2, "-"],

      // Left hand/arm - Sign formation
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/3.7, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", -Math.PI/6, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"],
      ["mixamorigLeftHand", "rotation", "z", -Math.PI/7, "-"],
      ["mixamorigLeftHand", "rotation", "x", -Math.PI/3, "-"],
      ["mixamorigLeftHand", "rotation", "y", Math.PI/12, "+"]
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
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "z", 0, "-"],

      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "y", 0, "+"],
      ["mixamorigRightHand", "rotation", "z", 0, "-"],
      ["mixamorigRightArm", "rotation", "y", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],

      // Left hand fingers - Reset animations
      ["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"],

      // Left hand/arm - Reset animations
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"],
      ["mixamorigLeftHand", "rotation", "z", 0, "+"],
      ["mixamorigLeftHand", "rotation", "x", 0, "+"],
      ["mixamorigLeftHand", "rotation", "y", 0, "-"]
    ]
  ];

  ref.current.pending = true;
};