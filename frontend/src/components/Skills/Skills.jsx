import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaDatabase, FaChartBar, FaCloud, FaComments, FaFileExcel } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    { title: 'Visualization', icon: <FaChartBar />, skills: ['Power BI', 'Matplotlib'] },
    { title: 'Databases', icon: <FaDatabase />, skills: ['PostgreSQL', 'MySQL'] },
    { title: 'Programming', icon: <FaPython />, skills: ['Python (Pandas, NumPy, Matplotlib)', 'SQL'] },
    { title: 'Data Tools', icon: <FaFileExcel />, skills: ['Excel', 'Power Query', 'Power Pivot', 'DAX'] },
    { title: 'Cloud (Basics)', icon: <FaCloud />, skills: ['AWS', 'Azure', 'GCP'] },
    { title: 'Soft Skills', icon: <FaComments />, skills: ['Strategic Thinking', 'Effective Communication'] },
  ];

  return (
    <section id="skills" className="py-20" data-testid="skills-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-14">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">What I Work With</p>
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Skills & Expertise</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300"
                data-testid={`skill-card-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl text-brand-blue">{category.icon}</div>
                  <h3 className="text-lg font-syne font-bold text-slate-800">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="bg-slate-50/80 px-3 py-2 rounded-lg text-slate-600 text-sm border border-slate-100">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
