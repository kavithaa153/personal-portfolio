import { motion } from "motion/react";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "UI & Design",
    icon: Palette,
    skills: ["Responsive Design", "Flexbox", "CSS Grid", "CSS Animations"],
  },
  {
    title: "Database & Backend",
    icon: Database,
    skills: ["MySQL", "REST API Integration", "JSON", "CRUD Operations"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-slate-50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-600">
            What I work with
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900">
            My Technical <span className="text-emerald-600">Skills</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Technologies and tools I use to build responsive web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon size={25} />
              </div>

              <h2 className="mb-5 text-lg font-bold text-slate-900">
                {title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}