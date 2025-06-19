import React from 'react';
import { motion } from 'framer-motion';
import {  BookOpen, Hand, ClipboardList, Brain, Bot, MessagesSquare, CircleUserRound, HandHeart } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Hand className="w-10 h-10 text-accent" />,
      title: "AI Gesture Recognition",
      description: "Real-time Indian Sign Language detection with instant text & speech conversion."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      title: "Learning Module",
      description: "Interactive ISL dictionary with video tutorials for alphabets, numbers & words."
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-accent" />,
      title: "Engaging Quiz",
      description: "Level-based and topic-based quizzes to test Indian Sign Language knowledge."
    },
    {
      icon: <Bot className="w-10 h-10 text-accent" />,
      title: "Sign Animator",
      description: "Type or speak text to see Indian Sign Language animations letter-by-letter."
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "Mind-Mapping Match Game",
      description: "A memory-boosting Indian Sign Language game!"
    },
    {
      icon: <MessagesSquare className="w-10 h-10 text-accent" />,
      title: "Multilingual Chatbot Support",
      description: "Get instant help with Indian Sign Language-related queries in multiple languages."
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-accent neon-text">Key Features</span> of हस्तवाणी
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with user-centered design to create a seamless sign language recognition experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="card card-hover absolute inset-0 hero-gradient z-0"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                 
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;