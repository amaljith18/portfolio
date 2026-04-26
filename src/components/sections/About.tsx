import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Code2, Zap, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code2, value: '3+', label: 'Years Experience', color: '#0ea5e9' },
  { icon: Zap, value: '35%', label: 'Performance Boost', color: '#8b5cf6' },
  { icon: Users, value: '50%', label: 'Faster Error Detection', color: '#00f5d4' },
  { icon: Award, value: '6+', label: 'Enterprise Projects', color: '#f59e0b' },
];

export default function About() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="orb w-[400px] h-[400px] top-0 right-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">01 / About</span>
          <h2 className="heading-lg" style={{ color: 'var(--text-primary)' }}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I'm a <span style={{ color: 'var(--text-primary)' }} className="font-semibold">Senior Frontend Engineer</span> with 3+ years of experience crafting high-performance, scalable web applications for enterprise platforms — from HRMS and Contract Management to Helpdesk systems.
              </p>
              <p>
                My work lives at the intersection of <span className="neon-text font-medium">clean architecture</span>, <span className="neon-text font-medium">pixel-perfect UI</span>, and <span className="neon-text font-medium">measurable performance</span>. I obsess over Core Web Vitals, bundle sizes, and the kind of UX that users don't even notice — because it just works.
              </p>
              <p>
                Based in <span style={{ color: 'var(--text-primary)' }} className="font-medium">Dubai, UAE</span>, I'm deeply familiar with the local tech landscape and ready to contribute from day one as an <span className="neon-text font-medium">immediate joiner</span>.
              </p>
              <p>
                When I'm not building interfaces, I'm exploring AI-assisted development workflows with tools like <span style={{ color: 'var(--text-primary)' }}>GitHub Copilot, Claude Code, and Cursor</span> — always staying at the frontier of what modern engineering looks like.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {['React Specialist', 'TypeScript Advocate', 'Performance Engineer', 'AI-Powered Dev'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: 'var(--neon)',
                    color: 'var(--neon)',
                    background: 'var(--neon-glow)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="card p-6 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.color}20`, color: stat.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      className="font-display font-black text-3xl"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
