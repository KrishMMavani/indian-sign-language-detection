// src/animations/person.tsx
import { AnimationRef } from '../../types/animation';

export const PERSON = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Initial position
      ["mixamorigRightHandIndex1", "rotation", "z", Math.PI/9, "+"],
      ["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"],
      ["mixamorigRightHandIndex3", "rotation", "z", Math.PI/8, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"],
      
      // Right thumb - Initial position
      ["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"],
      ["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"],

      // Right hand and arm - Initial position
      ["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"],
      ["mixamorigRightHand", "rotation", "y", -Math.PI/3, "-"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/2.2, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/5, "-"]
    ],
    [
      // Arm movement
      ["mixamorigRightArm", "rotation", "x", Math.PI/90, "+"]
    ],
    [
      // Right hand fingers - Reset position
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
      
      // Right thumb - Reset position
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "-"],
      ["mixamorigRightHandThumb1", "rotation", "y", 0, "-"],
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],

      // Right hand and arm - Final position
      ["mixamorigRightHand", "rotation", "z", 0, "+"],
      ["mixamorigRightHand", "rotation", "y", 0, "+"],
      ["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};