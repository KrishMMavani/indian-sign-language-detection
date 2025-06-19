import React, { useState, useEffect } from 'react';
import { AnimationViewer } from '../components/AnimationViewer/AnimationViewer';
import { AlphabetGrid } from '../components/AnimationViewer/AlphabetGrid';
import { SpeechTextInput } from '../components/AnimationViewer/SpeechTextInput';
import { useStore } from '../store';
import { motion } from 'framer-motion';

const AnimateLearn: React.FC = () => {
  const startAnimation = useStore((state) => state.startAnimation);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Learn', 'Animate', 'Sign'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1500); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleTextAnimation = (text: string) => {
    const uppercaseText = text.toUpperCase();
    for (const char of uppercaseText) {
      if (/^[A-Z]$/.test(char)) {
        startAnimation(char);
      }
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12" // Reduced margin-bottom to accommodate new text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4"> {/* Reduced margin-bottom */}
            <span className="text-accent neon-text">हस्तवाणी</span> Animator
          </h1>
          <div className="text-5xl font-serif text-gray-300 h-10"> {/* Fixed height for smooth transition */}
            <motion.p
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-accent  italic"
              style={{ 
                fontFamily: 'Lobster', 
                
                fontStyle: 'italic'
              }}
            >
              {words[currentWord]}
            </motion.p>
          </div>
          
        </motion.div>

        {/* Rest of your existing code remains unchanged */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Alphabet Grid - Left */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-xl  h-full border border-accent/30 justify-center align-center">
              <h2 className="text-2xl font-bold mb-6 text-white text-center neon-text">
                Select an Alphabet
              </h2>
              <AlphabetGrid />
            </div>
          </div>
{/* bg-gray-800/50 */}
          {/* Animation Viewer - Center */}
          <div className="w-full lg:w-2/4">
            <div className="flex flex-col items-center h-full">
              <div className="relative rounded-xl w-full h-full p-6 border border-accent/30 ">
                
                <div className="w-full h-[500px] flex items-center justify-center">
                  <AnimationViewer />
                </div>
              </div>
            </div>
          </div>

          {/* Speech/Text Input - Right */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-xl p-6 h-full border border-accent/30 ">
              <h2 className="text-2xl font-bold mb-6 text-white text-center neon-text">
                Process Speech/Text
              </h2>
              <SpeechTextInput onStartAnimation={handleTextAnimation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateLearn;