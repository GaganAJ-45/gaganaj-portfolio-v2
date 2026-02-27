import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaCog, FaDatabase, FaCode } from 'react-icons/fa';

const AITools = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const toolGroups = [
    {
      title: 'AI Assistants & Agents',
      icon: <FaBrain />,
      tools: [
        { name: 'ChatGPT', desc: 'Used for data analysis support, SQL optimization, documentation, and workflow automation ideas', status: 'Using' },
        { name: 'Claude', desc: 'Assisted in long-form reasoning, report writing, and structured analysis', status: 'Using' },
        { name: 'HuskyVoice Agent', desc: 'Exploring voice-based AI agent experimentation and conversational workflow testing', status: 'Exploring' },
        { name: 'Retell AI', desc: 'Learning to build and test AI voice agents for automated interactions', status: 'Learning' },
      ],
    },
    {
      title: 'Automation & Workflow Tools',
      icon: <FaCog />,
      tools: [
        { name: 'n8n', desc: 'Exploring workflow automation, API orchestration, and task automation using AI integrations', status: 'Exploring' },
        { name: 'Tabbly', desc: 'Learning to automate tabular data handling and productivity workflows', status: 'Learning' },
      ],
    },
    {
      title: 'Data & ML Platforms',
      icon: <FaDatabase />,
      tools: [
        { name: 'Kaggle', desc: 'Used for dataset exploration, EDA, and applied machine learning practice', status: 'Using' },
        { name: 'AI-assisted Analytics', desc: 'Using AI tools to enhance data cleaning, feature understanding, and insight generation', status: 'Using' },
      ],
    },
    {
      title: 'Developer Productivity',
      icon: <FaCode />,
      tools: [
        { name: 'Cursor', desc: 'AI-powered code editor used for faster Python, SQL, and analytics development', status: 'Using' },
        { name: 'AI Code Assistants', desc: 'Assisted in debugging, refactoring, and ETL pipeline optimization', status: 'Using' },
      ],
    },
  ];

  const statusStyle = {
    Using: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    Learning: 'bg-amber-50 text-amber-600 border-amber-200',
    Exploring: 'bg-blue-50 text-blue-600 border-blue-200',
  };

  return (
    <section id="ai-tools" className="py-20" data-testid="ai-tools-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">AI & Automation</h2>
            <div className="section-line mx-auto mb-5"></div>
            <p className="text-slate-500 text-base italic max-w-2xl mx-auto">
              Exploring AI tools and automation to build smarter data pipelines, dashboards, and intelligent workflows.
            </p>
          </div>

          <div className="space-y-10">
            {toolGroups.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-2xl text-brand-teal">{group.icon}</div>
                  <h3 className="text-xl font-syne font-bold text-slate-800">{group.title}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.tools.map((tool, ti) => (
                    <div
                      key={ti}
                      className="glass-card glass-card-hover p-5 rounded-xl transition-all duration-300"
                      data-testid={`ai-tool-${gi}-${ti}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-base font-semibold text-slate-800">{tool.name}</h4>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border ${statusStyle[tool.status] || ''}`}>
                          {tool.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{tool.desc}</p>
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

export default AITools;
