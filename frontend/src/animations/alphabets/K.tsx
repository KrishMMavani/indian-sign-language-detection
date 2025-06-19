// src/animations/alphabets/K.tsx
import { AnimationRef } from '../../types/animation';

export const K = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Sign formation
      ["mixamorigRightHandIndex1", "rotation", "z", Math.PI/12, "+"],
      ["mixamorigRightHandIndex2", "rotation", "z", Math.PI/1.7, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"],

      // Right thumb - Sign formation
      ["mixamorigRightHandThumb1", "rotation", "y", Math.PI/2, "+"],
      ["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/6, "-"],
      
      // Right hand/arm - Sign formation
      ["mixamorigRightHand", "rotation", "z", Math.PI/5, "+"],
      ["mixamorigRightHand", "rotation", "x", Math.PI/8, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/9, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"],

      // Left hand fingers - Sign formation
      ["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"],
      ["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"],

      // Left hand/arm - Sign formation
      ["mixamorigLeftHand", "rotation", "z", Math.PI/4.1, "+"],
      ["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]
    ],
    [
      // Right hand fingers - Reset animations
      ["mixamorigRightHandIndex1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandIndex2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],

      // Right thumb - Reset animations
      ["mixamorigRightHandThumb1", "rotation", "y", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "+"],
      
      // Right hand/arm - Reset animations
      ["mixamorigRightHand", "rotation", "z", 0, "-"],
      ["mixamorigRightHand", "rotation", "x", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
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
      ["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"],
      ["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"],

      // Left hand/arm - Reset animations
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "y", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "y", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]
    ]
  ];

  ref.current.pending = true;
};