import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data';
import { Github, ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useScrollReveal();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayed = filter === 'featured' ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="orb w-[500px] h-[500px] top-0 right-[-100px] opacity-10"
        style={{ background: 'radial-gradient(circle, #00f5d4 0%, transparent 70%)' }}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label block mb-3">03 / Projects</span>
          <h2 className="heading-lg" style={{ color: 'var(--text-primary)' }}>
            What I've Built
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A selection of projects I've crafted — from enterprise platforms to consumer apps.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {(['all', 'featured'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300"
              style={{
                background: filter === f ? 'var(--neon)' : 'transparent',
                color: filter === f ? '#000' : 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {f === 'featured' && <Star size={12} className="inline mr-1 mb-0.5" />}
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)',
                      opacity: 0.7,
                    }}
                  />
                  {project.featured && (
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'var(--neon)', color: '#000' }}
                    >
                      <Star size={10} />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-display font-bold text-lg mb-2 group-hover:neon-text transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
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

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-all hover:neon-text"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-all hover:neon-text"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/amaljith18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
