import Link from "next/link";

export default function ResumePage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "Axios",
    "Recharts",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-slate-50 to-slate-50" />

        <div className="relative max-w-5xl mx-auto px-6 py-24">
          <p className="text-indigo-600 font-semibold uppercase tracking-widest mb-4">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Ayomide Victoria Famoriyo
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed">
            Building responsive web applications with React, Next.js and
            TypeScript. Passionate about transforming ideas into fast,
            accessible and user-focused digital experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>📍 Lagos, Nigeria</span>
            <span>•</span>
            <span>Open to Internships</span>
            <span>•</span>
            <span>Junior Frontend Roles</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>

            <Link
              href="/#projects"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-100 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-lg text-slate-600 leading-8 max-w-4xl">
          I am a frontend developer focused on building responsive and intuitive
          web applications. My experience spans React, Next.js, TypeScript,
          Tailwind CSS and API integrations. I enjoy turning product ideas into
          polished, production-ready user experiences that are both functional
          and visually engaging.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">
              E-Commerce Web Application
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Built a responsive shopping experience featuring product search,
              filtering, API integrations and optimized loading states.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Next.js
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                React
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Axios
              </span>
            </div>

            <div className="mt-6 flex gap-6">
              <a href="https://mye-comm.netlify.app/" className="text-indigo-600 font-medium">
                Live Demo →
              </a>

              <a href="https://github.com/Victoria20-me/E-commerce-project" className="text-indigo-600 font-medium">
                GitHub →
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">
              Productivity Focus App
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              AI-powered productivity platform featuring task management,
              focus sessions, analytics dashboards and OpenRouter AI
              integration.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                React
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Recharts
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                OpenRouter AI
              </span>
            </div>

            <div className="mt-6 flex gap-6">
              <a href="https://productivity-focus-app.vercel.app" className="text-indigo-600 font-medium">
                Live Demo →
              </a>

              <a href="https://github.com/Victoria20-me/Productivity-Focus-app" className="text-indigo-600 font-medium">
                GitHub →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Experience
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">
                Frontend Developer Intern
              </h3>

              <p className="text-indigo-600 font-medium">
                Notzero Innovation Hub
              </p>
            </div>

            <p className="text-slate-500">
              Jan 2026 – Jun 2026
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Developed responsive web interfaces using React and Next.js.</li>
            <li>• Built reusable components and integrated REST APIs.</li>
            <li>• Improved usability through debugging and optimization.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">
          Education
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            B.Tech Agricultural Extension & Rural Development
          </h3>

          <p className="mt-2 text-slate-600">
            Ladoke Akintola University of Technology
          </p>

          <p className="mt-2 text-slate-500">
            Second Class Upper Division
          </p>
        </div>
      </section>

    </main>
  );
}