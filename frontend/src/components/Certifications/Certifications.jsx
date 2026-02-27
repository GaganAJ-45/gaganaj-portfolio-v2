import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: 'Power BI Administration: Administering the Power BI Service',
      platform: 'Udemy',
      instructor: 'Grant Gamble',
      date: 'September 21, 2025',
      duration: '8.5 hours',
      link: 'https://ude.my/UC-4e97af8d-5883-4678-ae90-a71b2c3b83a9',
      pdfLink: '/assets/Power_BI_Certificate.pdf',
    },
    {
      title: 'SQL and PostgreSQL for Beginners: Become a SQL Expert',
      platform: 'Udemy',
      instructor: 'Jon Avis',
      date: 'September 16, 2025',
      duration: '12.5 hours',
      link: 'https://ude.my/UC-5b89b888-3c52-4d18-a061-09d61a0003a5',
      pdfLink: '/assets/SQL_Certificate.pdf',
    },
  ];

  return (
    <section className="py-20" data-testid="certifications-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Certifications</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300"
                data-testid={`cert-card-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-brand-blue">
                    <FaCertificate />
                  </div>
                  <span className="bg-brand-blue/10 text-brand-blue px-3 py-0.5 rounded-full text-xs font-semibold">
                    {cert.platform}
                  </span>
                </div>
                <h3 className="text-base font-syne font-bold text-slate-800 mb-3">{cert.title}</h3>
                <div className="space-y-1.5 mb-4 text-sm text-slate-500">
                  <p><span className="text-slate-700">Instructor:</span> {cert.instructor}</p>
                  <p><span className="text-slate-700">Date:</span> {cert.date}</p>
                  <p><span className="text-slate-700">Duration:</span> {cert.duration}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 flex-1 justify-center"
                    data-testid={`cert-view-${index}`}
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                  {cert.pdfLink && (
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                      data-testid={`cert-pdf-${index}`}
                    >
                      PDF
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
