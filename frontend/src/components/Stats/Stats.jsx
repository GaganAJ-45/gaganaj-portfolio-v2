import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaCertificate, FaTools, FaTrophy } from 'react-icons/fa';

const Counter = ({ end, duration = 2, decimal = false, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(progress * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-syne font-bold text-accent" data-testid="stat-counter">
      {decimal ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: <FaProjectDiagram />, value: 6, label: 'Projects Completed', suffix: '+' },
    { icon: <FaCertificate />, value: 4, label: 'Certifications Earned', suffix: '+' },
    { icon: <FaTools />, value: 5, label: 'Tools & Technologies', suffix: '+' },
    { icon: <FaTrophy />, value: 8.0, label: 'CGPA', suffix: '', decimal: true },
  ];

  return (
    <section className="py-16" data-testid="stats-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl text-center transition-all duration-300"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-3xl text-brand-blue mb-3 flex justify-center">
                {stat.icon}
              </div>
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                decimal={stat.decimal}
                inView={inView}
              />
              <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
