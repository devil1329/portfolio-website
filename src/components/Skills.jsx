import React, { useRef, useEffect } from 'react';
import { resumeData } from '../data';

const Skills = () => {
  const carouselRef = useRef(null);

  const skillCategories = Object.entries(resumeData.skills);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // card width + gap
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      const scrollAmount = 320;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const currentScroll = carousel.scrollLeft;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const atLeftEnd = currentScroll <= 0;
      const atRightEnd = currentScroll >= maxScroll - 10; // 10px tolerance

      // Only allow page scroll if at the respective end
      if ((isScrollingDown && atRightEnd) || (isScrollingUp && atLeftEnd)) {
        // Allow page scroll - don't prevent default
        return;
      }

      // Prevent default and scroll carousel
      e.preventDefault();
      const newScrollAmount = isScrollingDown ? scrollAmount : -scrollAmount;
      carousel.scrollBy({ left: newScrollAmount, behavior: 'smooth' });
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });

    // Add listener to carousel wrapper to catch bubbling events
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built from years of experience in enterprise development
        </p>

        {/* Carousel Container */}
        <div className="relative z-30 group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/30 rounded-full transition-all duration-200 opacity-30 group-hover:opacity-80"
          >
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/30 rounded-full transition-all duration-200 opacity-30 group-hover:opacity-80"
          >
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-6 px-4 py-8 min-w-min">
              {skillCategories.map(([category, skills], idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="relative h-full bg-slate-900/80 border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 flex flex-col">
                    <h3 className="text-lg font-bold text-purple-400 mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 flex-grow">
                      {skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="inline-flex items-center justify-center px-3 py-2 h-10 bg-purple-500/20 border border-purple-400/50 text-slate-200 text-sm rounded-full hover:bg-purple-500/30 hover:border-purple-300 transition-all duration-200 flex-shrink-0"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-400/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Backend Development',
                items: ['Java Spring Boot', 'Microservices Architecture', 'REST APIs', 'Database Design']
              },
              {
                title: 'Frontend Development',
                items: ['React', 'Angular', 'Responsive Design', 'Modern JavaScript']
              },
              {
                title: 'DevOps & Cloud',
                items: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Deployments']
              },
              {
                title: 'Enterprise Skills',
                items: ['System Design', 'Performance Optimization', 'Production Support', 'Team Leadership']
              },
            ].map((competency, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-200">{competency.title}</h4>
                <ul className="space-y-2">
                  {competency.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3 text-gray-400">
                      <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
