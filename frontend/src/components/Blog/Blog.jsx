import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const blogPosts = [
    {
      title: 'How I Built a Healthcare Dashboard with Power BI',
      description: 'A deep dive into creating interactive healthcare analytics dashboards using Power BI, DAX, and Power Query for real-world impact.',
      tag: 'Power BI',
    },
    {
      title: "ETL Pipelines with Python & MySQL - A Beginner's Guide",
      description: 'Learn how to build efficient ETL pipelines using Python libraries and MySQL for data transformation and loading workflows.',
      tag: 'Data Engineering',
    },
    {
      title: 'Automation with n8n & AI Tools for Data Workflows',
      description: 'Exploring powerful automation tools like n8n, Make.com, Zapier, and AI agents to streamline data pipelines and boost productivity.',
      tag: 'AI & Automation',
    },
  ];

  return (
    <section className="py-20" data-testid="blog-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Blog & Articles</h2>
            <div className="section-line mx-auto mb-4"></div>
            <p className="text-slate-500 text-base">Sharing insights and learnings from my data journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300 group relative overflow-hidden"
                data-testid={`blog-card-${index}`}
              >
                <div className="absolute top-4 right-4 bg-brand-teal/10 text-brand-teal px-3 py-0.5 rounded-full text-xs font-semibold">
                  Coming Soon
                </div>

                <span className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-0.5 rounded-full text-xs font-semibold mb-4">
                  {post.tag}
                </span>

                <h3 className="text-base font-syne font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{post.description}</p>

                <div className="flex items-center gap-1.5 text-brand-blue text-sm font-medium cursor-pointer">
                  <span>Read More</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
