// src/hooks/useAnimationSystem.ts
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationState } from '../types/animation';
import { defaultPose } from '../animations/defaultpose';
export const useAnimationSystem = () => {
  const animationRef = useRef<AnimationState>({
    animations: [],
    pending: false,
    animate: () => {},
    avatar: undefined,
    scene: undefined,
    renderer: undefined,
    camera: undefined,
  });

  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const animationStateRef = useRef({
    lastFrameTime: performance.now(),
    shouldReturnToDefault: false,
  });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // camera.position.set(0, 0.5, 1.9);
    camera.position.set(0, 0.7, 1.6);
  camera.lookAt(0, 0.6, 0); // Focus on upper torso
    
const renderer = new THREE.WebGLRenderer({ 
  antialias: true, 
  alpha: true,
  powerPreference: "high-performance"
});
// Set initial size based on container
const initialWidth = 500;
const initialHeight = 400;
renderer.setSize(initialWidth, initialHeight);
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
renderer.domElement.style.display = 'block';
renderer.domElement.style.objectFit = 'contain';

    // Mount to DOM
    const container = document.getElementById('animation-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
    }

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      '/models/ybot.glb',
      (gltf) => {
        mixerRef.current = new THREE.AnimationMixer(gltf.scene);

        gltf.scene.traverse((child) => {
          if ('isSkinnedMesh' in child && child.isSkinnedMesh) {
            child.castShadow = true;
            child.frustumCulled = false;
          }
        });

        gltf.scene.position.set(0, -1.1, 0);
        gltf.scene.scale.set(1.3, 1.24, 2.0);

        animationRef.current.avatar = gltf.scene;
        scene.add(gltf.scene);

        // Animation loop
        const animate = () => {
          const now = performance.now();
          const deltaTime = (now - animationStateRef.current.lastFrameTime) / 1000;
          animationStateRef.current.lastFrameTime = now;

          if (mixerRef.current) {
            mixerRef.current.update(deltaTime);
          }

          if (animationRef.current.pending && animationRef.current.animations.length > 0) {
            const currentAnimations = animationRef.current.animations[0];
            let allDone = true;

            currentAnimations?.forEach(([boneName, action, axis, target, direction]) => {
              const bone = animationRef.current.avatar?.getObjectByName(boneName);
              if (bone) {
                const speed = 0.019 * deltaTime * 60; // Frame-rate independent speed
                const currentValue = bone[action][axis];

                if (direction === '+') {
                  if (currentValue < target) {
                    bone[action][axis] = Math.min(currentValue + speed, target);
                    allDone = false;
                  }
                } else {
                  if (currentValue > target) {
                    bone[action][axis] = Math.max(currentValue - speed, target);
                    allDone = false;
                  }
                }
              }
            });

            if (allDone) {
              animationRef.current.animations.shift();
              if (animationRef.current.animations.length === 0) {
                animationRef.current.pending = false;
                animationStateRef.current.shouldReturnToDefault = true;
              }
            }
          } 
          // Return to default pose after animations complete
          else if (animationStateRef.current.shouldReturnToDefault) {
            defaultPose(animationRef);
            animationStateRef.current.shouldReturnToDefault = false;
          }

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    const handleResize = () => {
  const container = document.getElementById('animation-container');
  if (container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Maintain fixed aspect ratio of the container
    const containerAspect = width / height;
    camera.aspect = containerAspect;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(width, height, false);
    
    // Adjust camera position based on aspect ratio
    if (containerAspect > 1.25) { // Wider than 5:4
      camera.position.z = 1.8;
    } else { // Taller than 5:4
      camera.position.z = 1.5;
    }
  }
};
    window.addEventListener('resize', handleResize);
    setTimeout(() => handleResize(), 0);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, []);

  return animationRef;
};