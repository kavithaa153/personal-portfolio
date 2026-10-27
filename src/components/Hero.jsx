import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kavithaa153",
    icon: Code2,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:YOUR_EMAIL@example.com",
    icon: Mail,
    external: false,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-white px-5 pb-16 pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm lg:mx-0">
            <Code2 size={16} className="text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">
              React.js Frontend Developer
            </span>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Hello, welcome to my portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Kavitha
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl">
            Building modern digital experiences.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-700 lg:mx-0">
            I develop responsive and user-friendly web applications using
            React.js, JavaScript, and modern frontend technologies. I enjoy
            transforming ideas into clean, accessible, and interactive
            interfaces.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200/70 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-7 py-3.5 font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Hire Me
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ name, href, icon: Icon, external }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-600"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-emerald-100 pt-7 lg:justify-start">
            <div>
              <p className="text-3xl font-bold text-slate-900">React</p>
              <p className="mt-1 text-sm text-slate-600">
                Frontend Development
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="mt-1 text-sm text-slate-600">
                Practice Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="mt-1 text-sm text-slate-600">
                Learning Mindset
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center sm:max-w-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-full border border-emerald-200"
            >
              <span className="absolute left-10 top-16 h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-200" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-10 rounded-full border border-dashed border-teal-200"
            >
              <span className="absolute bottom-8 right-10 h-3 w-3 rounded-full bg-teal-400" />
            </motion.div>

            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-100 via-teal-50 to-white shadow-[0_0_80px_rgba(16,185,129,0.18)] sm:inset-20" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-56 w-56 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-100 to-teal-100 shadow-2xl shadow-emerald-200/60 sm:h-72 sm:w-72"
            >
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white/70 sm:h-64 sm:w-64">
                <Code2
                  size={100}
                  strokeWidth={1.2}
                  className="h-20 w-20 text-emerald-600 sm:h-32 sm:w-32"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-1/4 z-20 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <p className="text-xs text-slate-600">Specialization</p>
              <p className="mt-1 font-semibold text-slate-800">
                React.js Developer
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 left-0 z-20 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <p className="text-xs text-slate-600">
                Currently focused on
              </p>
              <p className="mt-1 font-semibold text-emerald-700">
                Building better UI
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-emerald-600 md:block"
      >
        <ArrowDown size={23} />
      </a>
    </section>
  );
}