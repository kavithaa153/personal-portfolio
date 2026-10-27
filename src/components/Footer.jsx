 
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  Code2,
  Heart,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "React.js Development",
  "Responsive Web Design",
  "Frontend Development",
  "UI Implementation",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="Go to home page"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/20">
                <Code2 size={25} strokeWidth={2.5} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Kavitha<span className="text-emerald-400">.</span>
              </span>
            </Link>

            <h2 className="mt-7 max-w-md text-2xl font-bold leading-snug sm:text-3xl">
              Building digital experiences that make a difference.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              React.js Frontend Developer focused on building responsive,
              accessible, and user-friendly web applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to Opportunities
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 sm:text-sm">
                <MapPin size={14} />
                Tamil Nadu, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-300"
                  >
                    <ArrowRight
                      size={15}
                      className="-ml-1 opacity-0 transition group-hover:ml-0 group-hover:opacity-100"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              What I Do
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {service}
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/kavithaa153"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
            >
              <Code2 size={18} />
              Explore My GitHub
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-5 py-7 sm:flex-row"
        >
          <p className="text-center text-sm text-slate-400 sm:text-left">
            © {currentYear} Kavitha. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-400">
            Crafted with
            <Heart
              size={15}
              className="fill-emerald-400 text-emerald-400"
            />
            using React
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Scroll to top"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            Back to top
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
