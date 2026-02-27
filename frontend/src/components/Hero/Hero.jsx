import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-12"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.h1
              className="font-syne font-extrabold text-slate-900 leading-[1.1]"
              style={{ fontSize: 'clamp(2.8rem, 5.6vw, 5.6rem)', fontWeight: 800 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              data-testid="hero-heading"
            >
              Hi, I'm{' '}
              <span className="text-accent">Gagan A J</span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-slate-500 font-medium h-12" data-testid="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    'Data Analyst',
                    'BI Developer',
                    'AI Assisted Analytics',
                    'Python & SQL Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <motion.p
              className="text-base text-slate-500 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building data-driven solutions with Python, SQL, and Power BI. Specializing in ETL pipelines and interactive dashboards that drive business decisions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                data-testid="view-work-button"
              >
                View My Work <FaArrowDown />
              </button>
              <a
                href="/assets/Gagan_CV.pdf"
                download
                className="btn-outline"
                data-testid="download-resume-button"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="glass-card p-3 rounded-3xl" data-testid="hero-photo">
                <img
                  src="/assets/gagan.jpeg"
                  alt="Gagan A J - Data Analyst"
                  className="rounded-2xl w-full max-w-sm h-auto object-cover"
                />
              </div>
              {/* Soft decorative blobs */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-brand-blue/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
