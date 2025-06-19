// src/animations/alphabets/F.tsx
import { AnimationRef } from '../../types/animation';

export const F = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      ["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"],
      ["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"],
      ["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"],
      ["mixamorigRightHand", "rotation", "z", Math.PI/4, "+"],
      ["mixamorigRightHand", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"],
      ["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"],
      ["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"],
      ["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"],
      ["mixamorigLeftHand", "rotation", "z", -Math.PI/3, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/9, "-"]
    ],
    [
      ["mixamorigRightHandRing1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandRing3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky1", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky2", "rotation", "z", 0, "-"],
      ["mixamorigRightHandPinky3", "rotation", "z", 0, "-"],
      ["mixamorigRightHandThumb2", "rotation", "y", 0, "+"],
      ["mixamorigRightHandThumb3", "rotation", "y", 0, "+"],
      ["mixamorigRightHand", "rotation", "z", 0, "-"],
      ["mixamorigRightHand", "rotation", "x", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigLeftHandRing1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandRing3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"],
      ["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"],
      ["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"],
      ["mixamorigLeftHand", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"]
    ]
  ];

  ref.current.pending = true;
};