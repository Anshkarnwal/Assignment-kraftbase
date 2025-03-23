// VoiceToneAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const VoiceToneAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the opening quote
  const openingQuoteVariants = {
    initial: {
      fill: "#5D4037",
      stroke: "transparent",
      strokeWidth: 0,
      y: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2,
      y: -5
    }
  };

  // Define the variants for the closing quote
  const closingQuoteVariants = {
    initial: {
      fill: "#5D4037",
      stroke: "transparent",
      strokeWidth: 0,
      y: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2,
      y: 5
    }
  };

  return (
    <div
      className={`relative w-full max-w-xs h-40 rounded-lg overflow-hidden transition-colors duration-500 ${isHovered ? 'bg-black' : 'bg-amber-300'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={`text-2xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-amber-900'}`}>Voice & Tone</h2>
      
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 150"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Opening quote */}
        <motion.path
          d="M40,80 C40,68 48,60 60,60 L60,80 L40,80 Z M68,80 C68,68 76,60 88,60 L88,80 L68,80 Z"
          variants={openingQuoteVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Closing quote */}
        <motion.path
          d="M240,80 C240,92 232,100 220,100 L220,80 L240,80 Z M212,80 C212,92 204,100 192,100 L192,80 L212,80 Z"
          variants={closingQuoteVariants}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </div>
  );
};

export default VoiceToneAnimation;