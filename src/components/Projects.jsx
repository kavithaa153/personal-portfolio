
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderCode,
  Search,
  X,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Dashboard",
    description:
      "A modern e-commerce dashboard for managing products, orders, sales, and business performance.",
    github: "https://github.com/kavithaa153/storeflow-ecommerce-dashboard/tree/main/ecommerce-dashboard",
    demo: "https://storeflow-ecommerce-dashboard.netlify.app/",
    technologies: ["React", "Vite", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "SaaS Management Dashboard",
    category: "Dashboard",
    description:
      "A SaaS management dashboard for handling users, subscriptions, pricing plans, and revenue analytics.",
    github: "https://github.com/kavithaa153/saas-management-dashboard",
    demo: "https://saasmanagementdashboard.netlify.app/dashboard",
    technologies: ["React", "Tailwind CSS", "Recharts"],
    featured: true,
  },
  {
    id: 3,
    title: "Travel Booking Dashboard",
    category: "Dashboard",
    description:
      "A travel booking dashboard for exploring destinations and managing bookings, customers, and payments.",
    github: "https://github.com/kavithaa153/travel-booking-dashboard",
    demo: "https://travelbookingdashboard.netlify.app/",
    technologies: ["React", "Vite", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 4,
    title: "Helpdesk Support Dashboard",
    category: "Dashboard",
    description:
      "A support management dashboard for tracking tickets, priorities, statuses, and customer issues.",
    github: "https://github.com/kavithaa153/supportmate-helpdesk",
    demo: "https://supportmate-helpdesk.netlify.app/login",
    technologies: ["React", "Vite", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 5,
    title: "HR Management Dashboard",
    category: "Dashboard",
    description:
      "An HR dashboard designed to organize employee information and simplify human resource operations.",
    github: "https://github.com/kavithaa153/hr-intelligence",
    demo: "https://peoplehub-hr-dashboard.netlify.app/",
    technologies: ["React", "Vite", "Tailwind CSS"],
    featured: false,
  },
  {
    id: 6,
    title: "Authentication Dashboard",
    category: "Web Application",
    description:
      "A responsive authentication interface featuring registration, login forms, and input validation.",
    github: "https://github.com/kavithaa153/authentication-dashboard",
    demo: "https://kavithaa-authentication-dashboard.netlify.app/",
    technologies: ["React", "Vite", "CSS"],
    featured: false,
  },
  {
    id: 7,
    title: "Hospital Management Website",
    category: "Website",
    description:
      "A hospital website featuring doctor information, medical departments, healthcare services, and contact details.",
    github: "https://github.com/kavithaa153/hospital-management",
    demo: "https://grand-choux-4f47f7.netlify.app/",
    technologies: ["React", "CSS", "React Router"],
    featured: false,
  },
];

const categories = [
  "All Projects",
  "Dashboard",
  "Web Application",
  "Website",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const searchText = searchQuery.toLowerCase().trim();

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <FolderCode size={17} />
            My Portfolio
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            My Recent{" "}
            <span className="text-emerald-600">Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore my web development projects, built with modern
            frontend technologies and responsive user interfaces.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
              {projects.length} Projects
            </span>

            <a
              href="https://github.com/kavithaa153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              <Code2 size={17} />
              GitHub Profile
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mb-10 space-y-5">
          <div className="relative mx-auto max-w-xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects or technologies..."
              aria-label="Search projects"
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-100">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-200/30 blur-2xl transition duration-500 group-hover:scale-150" />

                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-teal-200/30 blur-2xl" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white bg-white/90 text-emerald-600 shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <FolderCode size={37} strokeWidth={1.5} />
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                      Featured
                    </span>
                  )}

                  <span className="absolute bottom-4 right-5 text-sm font-bold tracking-widest text-emerald-700/50">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-slate-900 transition group-hover:text-emerald-700">
                    {project.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <Code2 size={17} />
                      <span>GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <FolderCode
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Projects");
              }}
              className="mt-5 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-10"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            I am open to frontend development opportunities and
            collaborations. Let's connect and build something useful.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
