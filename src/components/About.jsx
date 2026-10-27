 
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Building reusable and maintainable React components.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Learning new concepts and solving coding challenges.",
  },
  {
    icon: Target,
    title: "User Focus",
    description: "Creating responsive and user-friendly interfaces.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About <span className="text-emerald-600">Me</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
            I'm a React.js frontend developer passionate about building
            modern, responsive, and accessible web applications. I enjoy
            learning new technologies and turning ideas into useful digital
            experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/60"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon size={25} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                {description}
              </p>

              <Link
                to="/projects"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
              >
                Learn more
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
