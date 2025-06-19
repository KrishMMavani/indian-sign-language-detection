import React, { useState, useCallback } from 'react';
import { MemoryMatchGame } from '../components/MemoryMatchGame';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Hash as Numbers, 
  Type as AlphabetIcon,
  Trophy,
  ChevronDown,
  Gamepad2,
  BarChart2,
  Settings
} from 'lucide-react';

export const Game: React.FC = () => {
  const [currentGame, setCurrentGame] = useState<'memory-match' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'numbers' | 'alphabets' | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);

  const handleGameComplete = useCallback(() => {
    // Handle game completion logic here if needed
  }, []);

  const handleRestart = () => {
    setCurrentGame(null);
    setSelectedCategory(null);
    setDifficulty(null);
  };

  const difficultyOptions = [
    { value: 'easy', label: 'Level 1 - Beginner', icon: <BarChart2 className="w-5 h-5" /> },
    { value: 'medium', label: 'Level 2 - Advanced', icon: <BarChart2 className="w-5 h-5" /> },
    { value: 'hard', label: 'Level 3 - Expert', icon: <Trophy className="w-5 h-5" /> }
  ];

  if (currentGame === 'memory-match' && selectedCategory && difficulty) {
    return (
      <MemoryMatchGame
        category={selectedCategory}
        difficulty={difficulty}
        onGameComplete={handleGameComplete}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle floating" style={{ top: '20%', left: '10%', width: '10px', height: '10px' }}></div>
        <div className="particle floating-delay-1" style={{ top: '70%', left: '80%', width: '15px', height: '15px' }}></div>
        <div className="particle floating-delay-2" style={{ top: '40%', left: '60%', width: '8px', height: '8px' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="holographic-panel p-12 rounded-3xl max-w-2xl w-full relative overflow-hidden"
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-purple rounded-br-xl"></div>

        <div className="flex flex-col items-center justify-center mb-8">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl"
          ></motion.div>
          
          <div className="relative z-10 flex items-center justify-center mb-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-accent/20 p-3 rounded-full backdrop-blur-sm"
            >
              <Brain className="w-12 h-12 text-accent" />
            </motion.div>
          </div>

          <h1 className="text-5xl text-accent neon-text ">
            Memory Match Game
          </h1>
          <p className="text-white/70 mt-2">Train your brain with this memory challenge</p>
        </div>

        {currentGame === 'memory-match' ? (
          <div className="space-y-8">
            <h2 className="text-2xl text-center neon-text-purple mb-6 flex items-center justify-center gap-2">
              <Gamepad2 className="w-6 h-6" />
              Select Category
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('numbers')}
                className="btn-holographic py-8 flex flex-col items-center gap-4 relative group"
              >
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-all duration-300 rounded-lg"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <Numbers className="w-8 h-8 text-accent" />
                  </div>
                  <span className="text-xl font-medium">Numbers</span>
                  <span className="text-sm text-white/60">Match the digits</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('alphabets')}
                className="btn-holographic py-8 flex flex-col items-center gap-4 relative group"
              >
                <div className="absolute inset-0 bg-accent-purple/5 group-hover:bg-accent-purple/10 transition-all duration-300 rounded-lg"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-3 bg-accent-purple/20 rounded-full">
                    <AlphabetIcon className="w-8 h-8 text-accent-purple" />
                  </div>
                  <span className="text-xl font-medium">Alphabets</span>
                  <span className="text-sm text-white/60">Match the letters</span>
                </div>
              </motion.button>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRestart}
              className="btn-secondary w-full py-3 flex items-center justify-center gap-2 mt-6"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
              Back to Start
            </motion.button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl text-center neon-text-purple mb-6 flex items-center justify-center gap-2">
                <Settings className="w-6 h-6" />
                Select Difficulty
              </h2>
              
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowDifficultyDropdown(!showDifficultyDropdown)}
                  className="btn-holographic w-full py-4 flex items-center justify-between px-6 group"
                >
                  <div className="flex items-center gap-3">
                    {difficulty ? (
                      difficultyOptions.find(opt => opt.value === difficulty)?.icon
                    ) : (
                      <BarChart2 className="w-5 h-5" />
                    )}
                    <span>
                      {difficulty ? 
                        difficultyOptions.find(opt => opt.value === difficulty)?.label : 
                        'Select Difficulty Level'}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showDifficultyDropdown ? 'rotate-180' : ''}`} />
                </motion.button>
                
                {showDifficultyDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full mt-2 bg-dark-lighter rounded-lg shadow-lg border border-white/10 backdrop-blur-lg"
                  >
                    {difficultyOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          setDifficulty(option.value as 'easy' | 'medium' | 'hard');
                          setShowDifficultyDropdown(false);
                        }}
                        className={`w-full text-left px-6 py-3 hover:bg-white/5 transition-colors flex items-center gap-3 ${
                          difficulty === option.value ? 'bg-accent/10 text-accent' : ''
                        }`}
                      >
                        {option.icon}
                        {option.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => difficulty && setCurrentGame('memory-match')}
              disabled={!difficulty}
              className={`btn-primary w-full py-6 text-xl flex items-center justify-center gap-3 ${
                !difficulty ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Gamepad2 className="w-6 h-6" />
              Start Game
            </motion.button>
            
            <div className="flex justify-center mt-4">
              <div className="text-sm text-white/60 flex items-center gap-1">
                <span>Memory training game</span>
                <Brain className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};