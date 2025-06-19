// src/animations/alphabets/B.tsx
import { AnimationRef, BoneAnimation } from '../../types/animation';

export const B = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers
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
      
      // Right hand thumb
      ["mixamorigRightHandThumb1", "rotation", "x", Math.PI/6, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"],

      // Right hand/arm
      ["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"],
      ["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"],

      // Left hand fingers
      ["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/4.5, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/4.5, "-"],
      
      // Left hand thumb
      ["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/6, "+"],
      ["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/6, "+"],

      // Left hand/arm
      ["mixamorigLeftHand", "rotation", "z", Math.PI/10, "+"],
      ["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/9, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/6.5, "-"]
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
      
      // Reset right hand thumb
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],

      // Reset right hand/arm
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],

      // Reset left hand fingers
      ["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"],
      
      // Reset left hand thumb
      ["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"],

      // Reset left hand/arm
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "y", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"]
    ]
  ];
  
  ref.current.pending = true;
};