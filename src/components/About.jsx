import React from 'react';
import { resumeData } from '../data';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Area */}
          <div className="relative group hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-slate-900 p-1 rounded-lg">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-sm">Professional Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {resumeData.profile}
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold text-purple-400">Key Highlights</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Current Role', desc: 'Associate Software Engineer at Morgan Stanley' },
                  { title: 'Experience', desc: '3+ years in full-stack development & enterprise systems' },
                  { title: 'Specialization', desc: 'Financial Services, Trading Platforms & Compliance Systems' },
                  { title: 'Location', desc: 'Bengaluru, India' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/50">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-200">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
