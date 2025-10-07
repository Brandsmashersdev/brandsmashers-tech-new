import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalCard = ({
  name,
  icon: Icon,
  url,
  color,
  hoverColor,
  followers,
  isCalendly,
  onClick,
  index,
  type = 'action'
}) => {
  const handleClick = (e) => {
    if (isCalendly && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  const iconVariants = {
    idle: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="group relative"
    >
      <motion.a
        href={isCalendly ? '#' : url}
        target={url?.startsWith('tel:') || url?.startsWith('mailto:') ? '_self' : '_blank'}
        rel={url?.startsWith('tel:') || url?.startsWith('mailto:') ? '' : 'noopener noreferrer'}
        onClick={handleClick}
        className="block relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 h-32 sm:h-36 md:h-40 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10"
      >
        {/* Subtle Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-3 sm:space-y-4">
          {/* Icon with Professional Styling */}
          <motion.div
            variants={iconVariants}
            initial="idle"
            whileHover="hover"
            className="relative"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl group-hover:scale-110 transition-all duration-300" />

            {/* Icon Container */}
            <div className="relative bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/30 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:text-white/95 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="space-y-1"
          >
            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-white/95 transition-colors duration-300 leading-tight">
              {name}
            </h3>
            {followers && (
              <p className="text-white/70 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">
                {followers}
              </p>
            )}
          </motion.div>
        </div>

        {/* Professional Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Subtle Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/30 transition-colors duration-300"
          initial={false}
          animate={{ borderColor: 'rgba(255, 255, 255, 0)' }}
          whileHover={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
        />
      </motion.a>
    </motion.div>
  );
};

export default ProfessionalCard;