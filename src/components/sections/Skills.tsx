import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skillCategories } from '../../data';

export default function Skills() {
  const { ref, inView } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = skillCategories.find(c => c.key === activeTab)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div
        className="orb w-[500px] h-[500px] bottom-0 left-[-100px] opacity-10"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label block mb-3">02 / Skills</span>
          <h2 className="heading-lg" style={{ color: 'var(--text-primary)' }}>
            Technical Arsenal
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Technologies I use to build fast, scalable, and beautiful web experiences.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: activeTab === cat.key ? 'var(--neon)' : 'var(--text-secondary)',
                border: `1px solid ${activeTab === cat.key ? 'var(--neon)' : 'var(--border)'}`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === cat.key && (
                <motion.div
                  layoutId="skillTab"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'var(--neon-glow)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="card p-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono neon-text">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'var(--border)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                      boxShadow: '0 0 8px var(--neon-glow)',
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs font-mono mb-6" style={{ color: 'var(--text-muted)' }}>
            // Also worked with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Zustand', 'React Query', 'Styled Components', 'Webpack', 'Vercel', 'CloudFront', 'Jest', 'Cypress', 'React Testing Library', 'JWT', 'Redis', 'SharePoint API'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}
                whileHover={{ scale: 1.1, color: 'var(--neon)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
