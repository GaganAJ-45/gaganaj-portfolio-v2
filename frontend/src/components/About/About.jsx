import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaChartBar, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    { icon: <FaCode />, title: 'Data Engineering', desc: 'ETL Pipelines & Data Processing' },
    { icon: <FaChartBar />, title: 'Visualization', desc: 'Power BI & Interactive Dashboards' },
    { icon: <FaLightbulb />, title: 'Analysis', desc: 'KPI-Driven Insights & Analytics' },
    { icon: <FaRocket />, title: 'AI Automation', desc: 'Exploring Modern AI Tools' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" data-testid="about-section">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-14">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Who I Am</p>
            <motion.h2 
              className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="section-line mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl mb-10 space-y-5"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm <span className="text-accent font-bold text-xl">Gagan A J</span>, a Data Analyst aspirant with a strong foundation in Python, SQL, and Power BI, and a background in Electronics & Communication Engineering.
              </p>
              
              {/* Inline Text Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 py-2">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  6+ Analytics Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Power BI | SQL | Python
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ECE → Data Analytics
                </span>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                I specialize in transforming raw data into meaningful insights through <span className="text-brand-teal font-semibold">ETL pipelines</span>, <span className="text-brand-teal font-semibold">interactive dashboards</span>, and <span className="text-brand-teal font-semibold">KPI-driven analysis</span>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Alongside data analytics, I've started exploring <span className="text-brand-blue font-semibold">AI automation</span> and modern AI tools to enhance workflows and improve productivity.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I've built real-world analytics projects in sales, healthcare, and education, delivering insights through Power BI dashboards and SQL-driven analysis.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl text-brand-blue mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="font-syne font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Location</p>
                <p className="text-lg font-semibold text-slate-800">Karnataka, India</p>
              </div>
              <div className="glass-card p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Email</p>
                <p className="text-lg font-semibold text-slate-800">gaganaj45@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
