// src/animations/home.tsx
import { AnimationRef } from '../../types/animation';

export const HOME = (ref: AnimationRef) => {
  if (!ref.current?.avatar) return;

  ref.current.animations = [
    [
      // Left hand - Initial position
      ["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"],
      ["mixamorigLeftForeArm", "rotation", "x", Math.PI/70, "+"],
      ["mixamorigLeftForeArm", "rotation", "z", -Math.PI/7, "-"],
      ["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"],

      // Right hand - Initial position
      ["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/3, "-"],
      ["mixamorigRightForeArm", "rotation", "x", Math.PI/70, "+"],
      ["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"],
      ["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]
    ],
    [
      // Arm movement
      ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/2.5, "+"],
      ["mixamorigRightForeArm", "rotation", "y", Math.PI/2.5, "-"]
    ],
    [
      // Left hand - Reset position
      ["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"],
      ["mixamorigLeftForeArm", "rotation", "x", 0, "-"],
      ["mixamorigLeftForeArm", "rotation", "z", 0, "+"],
      ["mixamorigLeftArm", "rotation", "x", 0, "+"],

      // Right hand - Reset position
      ["mixamorigRightHandThumb1", "rotation", "x", 0, "+"],
      ["mixamorigRightForeArm", "rotation", "x", 0, "-"],
      ["mixamorigRightForeArm", "rotation", "z", 0, "-"],
      ["mixamorigRightArm", "rotation", "x", 0, "+"],

      // Final arm movement
      ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"],
      ["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]
    ]
  ];

  ref.current.pending = true;
};