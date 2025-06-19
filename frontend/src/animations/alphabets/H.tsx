// src/animations/alphabets/H.tsx
import { AnimationRef } from '../../types/animation';

export const H = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Right hand/arm - Sign formation
      ["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/6, "-"],
      ["mixamorigRightHandThumb1", "rotation", "z", -Math.PI/15, "-"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"],

      // Left hand/arm - Sign formation
      ["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"],
      ["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"],
      ["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"],
      ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]
    ],
    [
      // Right hand/arm - Reset animations
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "+"],
      ["mixamorigRightHandThumb1", "rotation", "z", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],

      // Left hand/arm - Reset animations
      ["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"],
      ["mixamorigLeftHand", "rotation", "x", 0, "+"],
      ["mixamorigLeftHand", "rotation", "z", 0, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "y", -2.0943951023931953, "+"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"],
      ["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]
    ]
  ];

  ref.current.pending = true;
};