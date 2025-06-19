// src/components/AnimationViewer/AnimationViewer.tsx
import { useEffect } from 'react';
import { useAnimationSystem } from '../../hooks/useAnimationSystem';
import { defaultPose } from '../../animations/defaultpose';
import { useStore } from '../../store';

// AnimationViewer.tsx
export const AnimationViewer = () => {
  const animationSystem = useAnimationSystem();
  const setAnimationRef = useStore((state) => state.setAnimationRef);

  useEffect(() => {
    setAnimationRef(animationSystem);
    const interval = setInterval(() => {
      if (animationSystem.current.avatar) {
        defaultPose(animationSystem);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animationSystem, setAnimationRef]);

  return <div id="animation-container" className="h-full w-full" />;
};