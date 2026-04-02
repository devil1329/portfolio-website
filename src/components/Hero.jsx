import React from 'react';
import { resumeData } from '../data';

const Hero = () => {
  const handleDownloadCV = () => {
    // Link to the resume PDF in the portfolio directory
    window.open('/Vishnu_Kumar_Singh_Resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fadeIn">
          {/* Main Title */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Vishnu Kumar Singh
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Full Stack Developer
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable enterprise applications with a passion for clean code and innovative solutions.
            Specialized in Java, Spring Boot, React, and cloud-native technologies.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-300">
            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              {resumeData.email}
            </a>
            <a href={`tel:${resumeData.phone}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.934 1.42 2.496 2.982.562.562 1.423 1.235 1.98 1.495l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.835 0-16-7.165-16-16V3z"></path>
              </svg>
              {resumeData.phone}
            </a>
            <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.005 1.437-.103.25-.129.598-.129.946v5.422h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.372v5.51zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.953.77-1.71 1.964-1.71 1.192 0 1.915.757 1.94 1.71 0 .951-.748 1.71-1.989 1.71zm1.566 11.597H3.771V9.504h3.132v10.948zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 transform hover:scale-105"
            >
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
