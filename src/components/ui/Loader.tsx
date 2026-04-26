import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo mark */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
            boxShadow: '0 0 40px rgba(14,165,233,0.4)',
          }}
        >
          <span
            className="font-display font-black text-3xl text-white"
          >
            AP
          </span>
        </div>

        {/* Spinning ring */}
        <motion.div
          className="absolute inset-[-8px] rounded-[24px] border-2 border-transparent"
          style={{
            borderTopColor: '#0ea5e9',
            borderRightColor: '#8b5cf6',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Name */}
      <motion.p
        className="font-display font-bold text-xl mb-2"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Amaljith PM
      </motion.p>

      <motion.p
        className="text-xs font-mono neon-text mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend Engineer
      </motion.p>

      {/* Progress bar */}
      <div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
