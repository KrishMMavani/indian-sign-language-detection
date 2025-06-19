// src/animations/alphabets/T.tsx
import { AnimationRef, BoneAnimation } from '../../types/animation';

export const T = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", Math.PI/2.5, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", Math.PI/2.5, "-"],

      // Right hand/arm
      ["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"],
      ["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/2.5, "+"],

      // Left hand fingers
      ["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"],
      ["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/5.5, "+"],
      ["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"],
      ["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"],

      // Left hand/arm
      ["mixamorigLeftHand", "rotation", "z", -Math.PI/2.7, "-"],
      ["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", Math.PI/30, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/8.5, "+"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]
    ],
    [
      // Reset right hand fingers
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

      // Reset right hand/arm
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"],

      // Reset left hand fingers
      ["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"],
      ["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"],
      ["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"],

      // Reset left hand/arm
      ["mixamorigLeftHand", "rotation", "z", 0, "+"],
      ["mixamorigLeftHand", "rotation", "y", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]
    ]
  ];
  
  ref.current.pending = true;
};