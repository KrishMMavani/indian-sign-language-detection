import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatisticsSection from '../components/StatisticsSection';
import TechnologySection from '../components/TechnologySection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Chatbot from '../components/Chatbot/Chatbot';
const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TechnologySection />
      <FeaturesSection />
      <StatisticsSection />
    

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-dark-lighter to-dark-lightest rounded-2xl p-8 md:p-12 border border-dark-lightest">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Ready to break communication barriers?
                </h2>
                <p className="text-gray-300 mb-6 md:mb-0">
                  Join us in making the world more accessible through Indian Sign Language recognition.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/technology" className="btn-primary">Get Started</Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
    </div>
  );
};

export default HomePage;