import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '../../data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`container-custom transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
          <div className={`glass rounded-2xl px-5 sm:px-8 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3 shadow-2xl' : 'py-4'
          }`}>
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                Amaljith<span className="neon-text">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200"
                  style={{
                    color: activeSection === link.href.replace('#', '')
                      ? 'var(--neon)'
                      : 'var(--text-secondary)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'var(--neon-glow)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--border)', color: 'var(--text-secondary)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:flex btn-primary text-sm py-2 px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>

              {/* Mobile menu toggle */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--border)', color: 'var(--text-secondary)' }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 top-24 z-40 mx-4"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="border-t mt-2 pt-3" style={{ borderColor: 'var(--border)' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="btn-primary w-full justify-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
