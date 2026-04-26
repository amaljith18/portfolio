import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ContactForm } from "../../types";

const WEB3FORMS_ACCESS_KEY = "09675a04-3452-4cbf-b926-b043b799b72a";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "amaljithpm1999@gmail.com",
    href: "mailto:amaljithpm1999@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 506565384",
    href: "tel:+971506565384",
  },
  { icon: MapPin, label: "Location", value: "Dubai, UAE", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/amaljith18" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/amaljith-pm-45a5431b8",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { ref, inView } = useScrollReveal();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (): boolean => {
    const e: Partial<ContactForm> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email address";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length < 20)
      e.message = "Message too short (min 20 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: `Portfolio Contact: ${form.subject}`,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200";
  const inputStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };
  const errStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid #ef4444",
    boxShadow: "0 0 0 1px #ef4444",
    color: "var(--text-primary)",
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="orb w-[400px] h-[400px] top-0 right-0 opacity-10"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
        }}
      />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">05 / Contact</span>
          <h2 className="heading-lg" style={{ color: "var(--text-primary)" }}>
            Let's Work Together
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            I'm actively looking for new opportunities. Whether you have a
            question or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_var(--neon-glow)]"
                  style={{
                    background: "var(--neon-glow)",
                    color: "var(--neon)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div
                    className="text-xs font-mono mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-sm font-medium group-hover:neon-text transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </div>
                </div>
              </a>
            ))}

            <div
              className="pt-4 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-mono mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                // Follow me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--neon-glow)",
                border: "1px solid var(--neon)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono neon-text">
                  Available for hire
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Immediate joiner · Open to full-time & freelance roles in UAE.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-6 sm:p-8">
              {/* Success */}
              {status === "success" && (
                <motion.div
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={52} className="neon-text" />
                  <div>
                    <h3
                      className="font-display font-bold text-xl mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Message Sent! 🎉
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Your message has been delivered to my inbox. I'll get back
                      to you shortly!
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error banner */}
              {status === "error" && (
                <motion.div
                  className="mb-5 flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "#ef444415",
                    border: "1px solid #ef4444",
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle
                    size={18}
                    className="text-red-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-red-400">
                      Failed to send message
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {errorMsg} — or email me directly at{" "}
                      <a
                        href="mailto:amaljithpm1999@gmail.com"
                        className="neon-text underline"
                      >
                        amaljithpm1999@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-mono mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={inputBase}
                        style={errors.name ? errStyle : inputStyle}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="block text-xs font-mono mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputBase}
                        style={errors.email ? errStyle : inputStyle}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Subject *
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Freelance Project"
                      className={inputBase}
                      style={errors.subject ? errStyle : inputStyle}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className={inputBase}
                      style={{
                        ...(errors.message ? errStyle : inputStyle),
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message goes directly to{" "}
                    <span className="neon-text font-mono">
                      amaljithpm1999@gmail.com
                    </span>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
