import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>
              Amaljith<span className="neon-text">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            © {year} Amaljith PM · Built with
            <Heart size={12} className="text-red-400 fill-red-400" />
            & React
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/amaljith18', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/amaljith-pm-45a5431b8', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                whileHover={{ scale: 1.1 }}
                aria-label={label}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
