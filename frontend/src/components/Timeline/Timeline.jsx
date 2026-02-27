import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineData = [
    {
      title: 'B.E. - Electronics & Communication Engineering (ECE)',
      institution: 'PES Institute of Technology, Shivamogga',
      board: 'VTU',
      year: '2026',
      grade: 'CGPA: 8.0',
      icon: <FaGraduationCap />,
    },
    {
      title: 'Intermediate (PCMB)',
      institution: 'S.P.S.M PU College, Davanagere',
      board: 'KSEA Board',
      year: '2022',
      grade: '80.02%',
      icon: <FaSchool />,
    },
    {
      title: 'Class 10th',
      institution: 'Sri Sai Gurukula Residential School, Honnali',
      board: 'CBSE',
      year: '2020',
      grade: '78.05%',
      icon: <FaSchool />,
    },
  ];

  return (
    <section className="py-20" data-testid="timeline-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-14">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Education</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-teal to-brand-blue"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-10 md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                } pl-14 md:pl-0`}
                data-testid={`timeline-item-${index}`}
              >
                {/* Dot */}
                <div className={`absolute top-5 left-6 md:left-auto ${
                  index % 2 === 0 ? 'md:right-[-28px]' : 'md:left-[-28px]'
                } w-4 h-4 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal z-10 ring-4 ring-brand-bg -translate-x-1/2 md:translate-x-0`}></div>

                {/* Card */}
                <div className="glass-card glass-card-hover p-5 rounded-2xl transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-brand-blue flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-base font-syne font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-brand-teal font-semibold text-sm mb-1">{item.institution}</p>
                      <p className="text-slate-400 text-xs mb-2">{item.board} | {item.year}</p>
                      <span className="inline-block bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold text-brand-blue">
                        {item.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
