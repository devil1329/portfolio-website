import React from 'react';
import { resumeData } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Education & Certifications
          </span>
        </h2>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Academic Background</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-purple-500/20 rounded-lg p-6 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-100 mb-2">{edu.degree}</h4>
                      <p className="text-purple-400 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.duration}</p>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm text-gray-400">CGPA/Score</p>
                      <p className="text-lg font-bold text-purple-400">{edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-violet-500/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-400/50 group-hover:bg-purple-500/30 transition-colors">
                        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-100 group-hover:text-purple-300 transition-colors">
                        {cert}
                      </h4>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="pt-8 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-400/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Continuous Learning</h3>
            <p className="text-gray-300 mb-4">
              Committed to staying updated with the latest technologies and best practices in software development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI/ML Development', 'Cloud Architecture', 'System Design', 'DevOps', 'Enterprise Patterns'].map((topic, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-400/50 text-purple-300 text-sm rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
