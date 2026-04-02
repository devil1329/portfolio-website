import React, { useEffect, useState } from 'react';

const SectionHeading = ({ activeSection }) => {
  const [displaySection, setDisplaySection] = useState(activeSection);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (activeSection !== displaySection) {
      setFade(false);
      const timeout = setTimeout(() => {
        setDisplaySection(activeSection);
        setFade(true);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [activeSection, displaySection]);

  return (
    <div className="fixed top-20 left-0 right-0 pointer-events-none z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent transition-opacity duration-300 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {displaySection.charAt(0).toUpperCase() + displaySection.slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeading;
