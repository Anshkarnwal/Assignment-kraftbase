// ImageryAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const ImageryAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#9C27B0" // Purple background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the frame and elements
  const frameVariants = {
    initial: {
      fill: "#FFCDD2", // Light pink
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  const sunVariants = {
    initial: {
      fill: "#9C27B0", // Purple
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  const mountainVariants = {
    initial: {
      fill: "#9C27B0", // Purple
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-xs h-80 rounded-lg overflow-hidden cursor-pointer"
      variants={containerVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.4 }}
    >
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-pink-200'}`}>Imagery</h2>
      
      <div className="absolute bottom-8 right-8">
        <motion.svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {/* Image frame */}
          <motion.rect
            x="10"
            y="10"
            width="80"
            height="60"
            variants={frameVariants}
            transition={{ duration: 0.5 }}
          />
          
          {/* Sun circle */}
          <motion.circle
            cx="30"
            cy="30"
            r="8"
            variants={sunVariants}
            transition={{ duration: 0.5 }}
          />
          
          {/* Mountains/waves */}
          <motion.path
            d="M20,50 C30,35 40,45 50,40 C60,35 70,50 80,45"
            variants={mountainVariants}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ImageryAnimation;