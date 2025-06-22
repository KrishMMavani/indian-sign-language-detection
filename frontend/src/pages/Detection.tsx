import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Target } from "lucide-react";
import WebcamCapture from "../components/WebcamCapture";
import WordPrediction from '../components/WordPrediction';

const DetectionPage: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<"word" | "alphabet" | null>(null);

  return (
    <div className="pt-24">
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Try <span className="text-accent neon-text">It Yourself</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Experience हस्तवाणी's sign language recognition technology right
                in your browser.
              </p>
            </div>

            {/* Mode Selector */}
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={() => setSelectedMode("word")}
                className={`btn-secondary flex items-center gap-2 ${
                  selectedMode === "word" ? "scale-105 shadow-lg shadow-accent/20" : ""
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Word Prediction
              </button>
              <button
                onClick={() => setSelectedMode("alphabet")}
                className={`btn-secondary flex items-center gap-2 ${
                  selectedMode === "alphabet" ? "scale-105 shadow-lg shadow-accent/20" : ""
                }`}
              >
                <Target className="w-5 h-5" />
                Alphabet Prediction
              </button>
            </div>

            {/* Render components based on selected mode */}
            <div className="max-w-3xl mx-auto">
              {selectedMode === "word" && <WordPrediction />}
              {selectedMode === "alphabet" && <WebcamCapture mode="alphabet" />}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DetectionPage;
