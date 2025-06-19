import { AnimationState } from '../types/animation';

export const defaultPose = (animationRef: { current: AnimationState }) => {
  if (!animationRef.current.avatar) return;

  animationRef.current.animations = [
    [
      // Reset major arm/neck bones
      ["mixamorigNeck", "rotation", "x", Math.PI / 12, "+"],
      ["mixamorigLeftArm", "rotation", "z", -Math.PI / 3, "-"],
      ["mixamorigLeftForeArm", "rotation", "y", -Math.PI / 1.5, "-"],
      ["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"],
      ["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"],
      
      ]
  ];
  animationRef.current.pending = true;
};