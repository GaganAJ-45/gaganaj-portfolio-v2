import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaGithub } from 'react-icons/fa';

const Documentation = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const documents = [
    {
      title: 'AWS Fundamentals',
      description: 'S3 storage classes, permissions, versioning, CloudFront + OAC deployment, static hosting.',
      link: 'https://github.com/GaganAJ-45/AWS-Fundamentals',
    },
    {
      title: 'Web Technologies',
      description: 'Core frontend concepts documented while building production-ready UI foundations.',
      link: 'https://github.com/GaganAJ-45/Web-Programming-Language',
    },
  ];

  return (
    <section id="documentation" className="py-20 bg-gradient-to-br from-white via-blue-50/70 to-teal-50/70" data-testid="documentation-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-center mb-14">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Learning in Public</p>
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Technical Documentation</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.a
                key={index}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300 block group"
                data-testid={`doc-card-${index}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="text-3xl text-brand-blue">
                    <FaBook />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 group-hover:text-brand-blue transition-colors">
                    Documentation
                  </span>
                </div>

                <h3 className="text-xl font-syne font-bold text-slate-800 mb-3">{doc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{doc.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors bg-gradient-to-r from-blue-600 to-teal-500 px-3 py-2 rounded-xl shadow-md group-hover:from-blue-700 group-hover:to-teal-600">
                  <FaGithub />
                  <span>View on GitHub</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation;
