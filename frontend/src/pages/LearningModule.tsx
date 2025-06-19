import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericDown, faSortAlphaDown, faSearch, faBook, faArrowLeft, faArrowRight, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import WordGrid from '../components/WordGrid';


// Reusable BackButton Component
const BackButton: React.FC<{ onClick: () => void; label: string; className?: string }> = ({ onClick, label, className }) => (
  <button
    className={`btn-primary px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
    {label}
  </button>
);

// Simple Button Component
const SimpleButton: React.FC<{ onClick: () => void; label: string; className?: string }> = ({ onClick, label, className }) => (
  <button
    className={`px-6 py-3 rounded-lg shadow-md bg-gray-200 hover:bg-gray-300 transition-transform duration-300 ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

// Navigation Button Component
const NavButton: React.FC<{ onClick: () => void; direction: 'left' | 'right'; className?: string }> = ({ onClick, direction, className }) => (
  <button
    className={`p-2 rounded-full bg-dark-lighter hover:bg-accent transition-colors duration-300 ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon 
      icon={direction === 'left' ? faArrowAltCircleLeft : faArrowAltCircleRight} 
      className="w-6 h-6 text-white" 
    />
  </button>
);

// Animation Variants
const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 }
};

const categories = [
  "Everyday",
  "Academic",
  "Agriculture",
  "Countries",
  "Finance and Banking",
  "Idioms",
  "Legal",
  "Medical",
  "Numbers",
  "Regional",
  "States And Cities",
  "Technical"
];

const LearningModule: React.FC = () => {
  const [showNumberCards, setShowNumberCards] = useState(false);
  const [showAlphabetCards, setShowAlphabetCards] = useState(false);
  const [showSearchAlphabet, setShowSearchAlphabet] = useState(false);
  const [showSearchWords, setShowSearchWords] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNumberClick = () => {
    setShowNumberCards(true);
    setShowAlphabetCards(false);
    setShowSearchAlphabet(false);
    setShowSearchWords(false);
  };

  const handleAlphabetClick = () => {
    setShowAlphabetCards(true);
    setShowNumberCards(false);
    setShowSearchAlphabet(false);
    setShowSearchWords(false);
  };

  const handleSearchAlphabetClick = () => {
    setShowSearchAlphabet(true);
    setShowNumberCards(false);
    setShowAlphabetCards(false);
    setShowSearchWords(false);
  };

  const handleSearchWordsClick = () => {
    setShowSearchWords(true);
    setShowNumberCards(false);
    setShowAlphabetCards(false);
    setShowSearchAlphabet(false);
  };

  const handleBackToLearningModule = () => {
    setShowNumberCards(false);
    setShowAlphabetCards(false);
    setShowSearchAlphabet(false);
    setShowSearchWords(false);
    setSelectedLetter(null);
    setSelectedCategory(null);
    setCurrentPage(0);
  };

  const handleBackToAlphabets = () => {
    setSelectedLetter(null);
    setCurrentPage(0);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentPage(0);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(0);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const getTagline = () => {
    if (showNumberCards) {
      return (
        <>
          <strong><span className="text-accent neon-text">Count</span>, 
          <span className="text-accent neon-text"> Play</span> and 
          <span className="text-accent neon-text"> Learn!</span></strong>
        </>
      );
    } else if (showAlphabetCards) {
      return (
        <>
          <strong>Step Into the <span className="text-accent neon-text">World of Letters!</span></strong>
        </>
      );
    } else if (showSearchAlphabet) {
      return selectedLetter ? (
        <>
          Words starting with <span className="text-accent neon-text">{selectedLetter}</span>
        </>
      ) : (
        <>
          <strong>Search & Explore <span className="text-accent neon-text">Alphabetically!</span></strong>
        </>
      );
    } else if (showSearchWords) {
      return selectedCategory ? (
        <>
          Words related to <span className="text-accent neon-text">{selectedCategory}</span>
        </>
      ) : (
        <>
          <strong className="text-2xl md:text-3xl">Dive Into <span className="text-accent neon-text">Words!</span></strong>
        </>
      );
    }
    return (
      <>
        <strong>Welcome to <span className="text-accent neon-text">Learning Module</span></strong>
      </>
    );
  };

  const numberCards = (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="flex flex-wrap justify-center items-center gap-4 mt-8"
    >
      {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((char) => (
        <motion.div 
          key={char} 
          className="bg-dark-lighter p-4 rounded-xl border border-dark-lightest"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={`/images/${char}.jpg`} alt={char} className="w-full h-auto" />
          <p className="text-center mt-2 text-white">{char}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  const alphabetCards = (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="flex flex-wrap justify-center items-center gap-4 mt-8"
    >
      {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((char) => (
        <motion.div 
          key={char} 
          className="bg-dark-lighter p-4 rounded-xl border border-dark-lightest cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleLetterClick(char)}
        >
          <img src={`/images/${char}.jpg`} alt={char} className="w-full h-auto" />
          <p className="text-center mt-2 text-white">{char}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  const searchAlphabetCards = (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((char) => (
        <motion.div 
          key={char} 
          className="bg-dark-lighter p-6 rounded-xl border border-dark-lightest cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleLetterClick(char)}
        >
          <p className="text-center mt-2">{char}</p>
        </motion.div>
      ))}
    </div>
  );

  const categoryCards = (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8"
    >
      {categories.map((category, index) => (
        <motion.div 
          key={category} 
          className={`bg-dark-lighter p-4 rounded-xl border border-dark-lightest cursor-pointer h-24 flex items-center justify-center text-lg font-bold ${index >= 10 ? 'col-span-2 md:col-span-1' : ''}`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleCategoryClick(category)}
        >
          <p className="text-center text-white">{category}</p>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center pt-20 p-4 bg-transparent opacity-90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Tagline Section */}
        <div className="text-center mb-0">
          <h2 className="text-3xl md:text-4xl font-display text-white">
            {getTagline()}
          </h2>
        </div>

        {/* Back to Navigation Buttons */}
        {(showNumberCards || showAlphabetCards || showSearchAlphabet || showSearchWords) && (
          <div className="flex justify-center gap-4 mt-6 mb-6">
            <BackButton onClick={handleBackToLearningModule} label="Back to Learning Module" />
            {showSearchAlphabet && selectedLetter && (
              <SimpleButton
                onClick={handleBackToAlphabets}
                label="Back to Alphabets"
                className="gradient-bg neon-border"
              />
            )}
            {showSearchWords && selectedCategory && (
              <SimpleButton
                onClick={handleBackToCategories}
                label="Back to Categories"
                className="gradient-bg neon-border glow-reduced" // Added "glow-reduced" class to reduce glow
              />
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!showNumberCards && !showAlphabetCards && !showSearchAlphabet && !showSearchWords ? (
            <motion.div
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              key="main-cards"
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-0"
            >
              {/* Card 1: Learning Numbers */}
              <motion.div
                className="p-6 rounded-xl border border-white/20 flex flex-col justify-between items-center text-center relative overflow-hidden bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-20 pointer-events-none"></div>

                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <FontAwesomeIcon icon={faSortNumericDown} className="text-accent text-4xl" />
                </div>

                <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
                  Learning Numbers
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full mb-3"></div>

                <p className="text-gray-200 text-lg leading-snug mb-4">
                  Learn numbers from <span className="font-bold text-accent">1 to 9</span>.
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    className="btn-primary px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={handleNumberClick}
                  >
                    Start Learning
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Learning Alphabets */}
              <motion.div
                className="p-6 rounded-xl border border-white/20 flex flex-col justify-between items-center text-center relative overflow-hidden bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-20 pointer-events-none"></div>

                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <FontAwesomeIcon icon={faSortAlphaDown} className="text-accent text-4xl" />
                </div>

                <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
                  Learning Alphabets
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full mb-3"></div>

                <p className="text-gray-200 text-lg leading-snug mb-4">
                  Learn alphabets from <span className="font-bold text-accent">A to Z</span>.
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    className="btn-primary px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={handleAlphabetClick}
                  >
                    Start Learning
                  </button>
                </div>
              </motion.div>

              {/* Card 3: Search by Alphabets */}
              <motion.div
                className="p-6 rounded-xl border border-white/20 flex flex-col justify-between items-center text-center relative overflow-hidden bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-20 pointer-events-none"></div>

                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <FontAwesomeIcon icon={faSearch} className="text-accent text-4xl" />
                </div>

                <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
                  Search by Alphabets
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full mb-3"></div>

                <p className="text-gray-200 text-lg leading-snug mb-4">
                  Search content by <span className="font-bold text-accent">alphabets</span>.
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    className="btn-primary px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={handleSearchAlphabetClick}
                  >
                    Search
                  </button>
                </div>
              </motion.div>

              {/* Card 4: Search by Words */}
              <motion.div
                className="p-6 rounded-xl border border-white/20 flex flex-col justify-between items-center text-center relative overflow-hidden bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-20 pointer-events-none"></div>

                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                  <FontAwesomeIcon icon={faBook} className="text-accent text-4xl" />
                </div>

                <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
                  Search by Words
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full mb-3"></div>

                <p className="text-gray-200 text-lg leading-snug mb-4">
                  Search content by <span className="font-bold text-accent">words</span>.
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    className="btn-primary px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    onClick={handleSearchWordsClick}
                  >
                    Search
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : showNumberCards ? (
            <>
              {numberCards}
            </>
          ) : showAlphabetCards ? (
            <>
              {alphabetCards}
            </>
          ) : showSearchAlphabet ? (
            <>
              {selectedLetter ? (
                <motion.div
                  variants={animationVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="mt-0"
                >
                  <div className="bg-dark-lighter rounded-xl border-2 border-accent p-4 shadow-lg max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {/* Removed the letter display */}
                      </h3>
                    </div>
                    <WordGrid letter={selectedLetter} page={currentPage} />
                  </div>
                </motion.div>
              ) : (
                searchAlphabetCards
              )}
            </>
          ) : showSearchWords ? (
            <>
              {selectedCategory ? (
                <motion.div
                  variants={animationVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <div className="bg-dark-lighter rounded-xl border-2 border-accent p-6 shadow-lg max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-2">
                      {/* Removed the arrows */}
                    </div>
                    <WordGrid category={selectedCategory} page={currentPage} />
                  </div>
                </motion.div>
              ) : (
                categoryCards
              )}
            </>
          ) : null}
        </AnimatePresence>
      </div>
      {/* Add the chatbot */}
      
    </motion.section>
  );
};

export default LearningModule;