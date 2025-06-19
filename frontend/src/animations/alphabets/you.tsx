// src/animations/you.tsx
import { AnimationRef } from '../../types/animation';

export const YOU = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand fingers - Initial position
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
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2, "-"],
      
      // Right arm and hand - Initial position
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"],
      ["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"],
      ["mixamorigRightHand", "rotation", "z", Math.PI/3, "+"],
      ["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]
    ],
    [
      // Right hand fingers - Reset position
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
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      
      // Right arm and hand - Reset position
      ["mixamorigRightArm", "rotation", "x", 0, "+"],
      ["mixamorigRightHand", "rotation", "x", 0, "-"],
      ["mixamorigRightHand", "rotation", "z", 0, "-"],
      ["mixamorigRightHand", "rotation", "y", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};