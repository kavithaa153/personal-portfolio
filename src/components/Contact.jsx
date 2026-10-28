
import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  Code2,
  CheckCircle2,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const subject = `Portfolio contact from ${formData.name.trim()}`;
      const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
      const mailtoLink = `mailto:kaviniki153@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      setSubmitted(true);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Contact Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get In <span className="text-emerald-600">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Have a project idea or a job opportunity? Feel free to contact
            me. I would be happy to connect with you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10"
          >
            <div>
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                <Mail size={28} />
              </span>

              <h2 className="text-3xl font-bold">
                Let&apos;s talk
              </h2>

              <p className="mt-4 max-w-md leading-7 text-slate-300">
                I am interested in React.js development opportunities,
                frontend projects, and connecting with other developers.
                Let&apos;s discuss how we can work together.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:kaviniki153@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Mail size={21} />
                  </span>

                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="mt-1 break-all font-medium text-white">
                      kaviniki153@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <MapPin size={21} />
                  </span>

                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-1 font-medium text-white">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="mb-4 text-sm text-slate-400">
                Find me on GitHub
              </p>

              <a
                href="https://github.com/kavithaa153"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition hover:bg-emerald-600"
              >
                <Code2 size={22} />
              </a>

              <a
                href="https://github.com/kavithaa153"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-emerald-400"
              >
                github.com/kavithaa153
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg sm:p-10"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Send a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the form below to contact me by email.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-6 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0"
                />

                <p>
                  Your email application should open with your message
                  prepared. Please send the email to complete your request.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "name-error" : undefined
                  }
                  className={inputClasses}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                  className={inputClasses}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${inputClasses} resize-y`}
                />

                <div className="mt-2 flex items-center justify-between gap-3">
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-sm text-red-600"
                    >
                      {errors.message}
                    </p>
                  ) : (
                    <span className="text-xs text-slate-400">
                      Minimum 10 characters
                    </span>
                  )}

                  <span className="shrink-0 text-xs text-slate-400">
                    {formData.message.length} characters
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
