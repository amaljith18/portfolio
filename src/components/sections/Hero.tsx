import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  MapPin,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div
        className="orb w-[500px] h-[500px] top-[-100px] left-[-200px] opacity-20"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[600px] h-[600px] bottom-[-200px] right-[-200px] opacity-15"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[300px] h-[300px] top-[40%] left-[40%] opacity-10"
        style={{
          background: "radial-gradient(circle, #00f5d4 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Available for opportunities
              </span>
              <Zap size={12} className="neon-text" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="heading-xl mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span style={{ color: "var(--text-primary)" }}>Hi, I'm </span>
              <span className="relative">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #0ea5e9, #8b5cf6, #00f5d4)",
                    backgroundSize: "300%",
                    animation: "gradient-x 6s ease infinite",
                  }}
                >
                  Amaljith
                </span>
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              className="heading-md mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ color: "var(--text-secondary)" }}
            >
              <TypeAnimation
                sequence={[
                  "Senior Frontend Engineer",
                  2500,
                  "React & TypeScript Expert",
                  2500,
                  "Next.js Developer",
                  2500,
                  "AI-Driven Web Engineer",
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              3+ years building scalable enterprise web applications. Delivered{" "}
              <span className="neon-text font-semibold">
                35% performance improvements
              </span>{" "}
              and{" "}
              <span className="neon-text font-semibold">
                50% faster error detection
              </span>
              . Deep expertise in React, TypeScript & modern frontend
              architecture.
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center gap-1.5 mb-8 text-sm"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <MapPin size={14} className="neon-text" />
              <span>Dubai, UAE • Immediate Joiner</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>Hire Me</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href="../../../public/Amaljith_PM_Frontend_.pdf"
                download
                className="btn-outline group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download
                  size={16}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/amaljith18",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/amaljith-pm-45a5431b8",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-all duration-300 group"
                  style={{ color: "var(--text-muted)" }}
                  whileHover={{ scale: 1.05 }}
                  aria-label={label}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:border-[var(--neon)] group-hover:shadow-[0_0_15px_var(--neon-glow)]"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Icon size={16} />
                  </span>
                  <span className="group-hover:neon-text transition-colors">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image + stats */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-20px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #0ea5e9, #8b5cf6, #00f5d4, #0ea5e9)",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                  opacity: 0.6,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden float-slow"
                style={{
                  border: "2px solid var(--border)",
                  boxShadow: "0 0 60px var(--neon-glow)",
                }}
              >
                {/* Placeholder gradient avatar */}
                <div
                  className="w-full h-full flex items-center justify-center text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #00f5d4 100%)",
                  }}
                >
                  <img
                    src="../../../public/myprofile.png"
                    alt="Amaljith PM"
                    className="w-full h-full object-cover"
                  />

                  {/* <div className="text-center">
                    <div className="text-7xl font-display font-black mb-2">
                      AP
                    </div>
                    <div className="text-sm font-mono opacity-70">
                      [ replace with photo ]
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-6 sm:-left-12 top-8 glass rounded-2xl px-4 py-3 min-w-[130px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ boxShadow: "0 0 20px var(--neon-glow)" }}
              >
                <div className="font-display font-black text-2xl neon-text">
                  3+
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Years Experience
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 sm:-right-12 top-20 glass rounded-2xl px-4 py-3 min-w-[130px]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{ boxShadow: "0 0 20px var(--neon-glow)" }}
              >
                <div className="font-display font-black text-2xl neon-text">
                  35%
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Performance Boost
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{
                  boxShadow: "0 0 20px var(--neon-glow)",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  React · TypeScript · Next.js
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span
            className="text-xs font-mono"
            style={{ color: "var(--text-muted)" }}
          >
            scroll
          </span>
          <motion.div
            className="w-[1px] h-10"
            style={{
              background:
                "linear-gradient(to bottom, var(--neon), transparent)",
            }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
