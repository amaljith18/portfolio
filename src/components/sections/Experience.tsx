import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experiences } from '../../data';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const typeColors: Record<string, string> = {
  'full-time': '#0ea5e9',
  'freelance': '#00f5d4',
  'contract': '#8b5cf6',
};

export default function Experience() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        className="orb w-[400px] h-[400px] bottom-0 left-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">04 / Experience</span>
          <h2 className="heading-lg" style={{ color: 'var(--text-primary)' }}>
            Career Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[1px]"
            style={{ background: 'linear-gradient(to bottom, var(--neon), transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                  style={{
                    background: `${typeColors[exp.type]}20`,
                    border: `1px solid ${typeColors[exp.type]}50`,
                    color: typeColors[exp.type],
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase size={18} />
                </motion.div>

                {/* Card */}
                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="font-display font-bold text-xl mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-medium text-sm"
                          style={{ color: typeColors[exp.type] }}
                        >
                          {exp.company}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono capitalize"
                          style={{
                            background: `${typeColors[exp.type]}15`,
                            color: typeColors[exp.type],
                            border: `1px solid ${typeColors[exp.type]}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-xs font-mono"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((desc, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span className="neon-text mt-1 flex-shrink-0">›</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md font-mono"
                          style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            className="relative pl-16 mt-10"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div
              className="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center z-10 text-xl"
              style={{
                background: '#f59e0b20',
                border: '1px solid #f59e0b50',
              }}
            >
              🎓
            </div>
            <div className="card p-6">
              <div className="flex flex-wrap justify-between gap-3 items-start">
                <div>
                  <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                    Diploma in Computer Engineering
                  </h3>
                  <p style={{ color: '#f59e0b' }} className="text-sm font-medium">
                    Government Polytechnic College, Kozhikode, Kerala (AICTE)
                  </p>
                </div>
                <span className="text-xs font-mono flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                  <Calendar size={12} />
                  2017 – 2020
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
