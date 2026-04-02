import React from 'react';
import { resumeData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="space-y-8">
          {resumeData.experience.map((job, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 md:-left-12 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-purple-400">{job.position}</h3>
                <p className="text-gray-400 flexjustify-between items-center">
                  <span className="text-lg">{job.company}</span>
                  <span className="text-sm ml-4 text-gray-500 hidden md:inline">{job.duration}</span>
                </p>
                <p className="text-sm text-gray-500 md:hidden mt-2">{job.duration}</p>
              </div>

              <ul className="space-y-3">
                {job.achievements.map((achievement, achIdx) => (
                  <li key={achIdx} className="flex gap-4 text-gray-300">
                    <span className="text-purple-400 font-bold flex-shrink-0">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Delivered', value: '15+' },
            { label: 'Technologies', value: '20+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-400/30 rounded-lg p-6 text-center hover:border-purple-400/60 transition-all"
            >
              <p className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
