// src/animations/time.tsx
import { AnimationRef } from '../../types/animation';

export const TIME = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Left hand - Initial position
      ["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/4, "-"],
      
      // Left arm - Initial position
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.5, "-"],
      ["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"],

      // Right hand - Initial position
      ["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"],
      
      // Right arm - Initial position
      ["mixamorigRightArm", "rotation", "z", Math.PI/3.5, "+"],
      ["mixamorigRightArm", "rotation", "y", Math.PI/9, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"],
      ["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"],
      ["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]
    ],
    [
      // Right forearm movement
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"]
    ],
    [
      // Right forearm return
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"]
    ],
    [
      // Left hand - Reset position
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
      ["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"],
      
      // Left arm - Reset position
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"],
      ["mixamorigLeftHand", "rotation", "x", 0, "-"],

      // Right hand - Reset position
      ["mixamorigRightHandIndex1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],
      
      // Right arm - Reset position
      ["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"],
      ["mixamorigRightArm", "rotation", "y", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightHand", "rotation", "x", 0, "-"],
      ["mixamorigRightHand", "rotation", "y", 0, "-"]
    ]
  ];

  ref.current.pending = true;
};