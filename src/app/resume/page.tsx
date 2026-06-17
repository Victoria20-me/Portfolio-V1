export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Ayomide Oginni
        </h1>

        <p className="text-xl text-slate-600 mb-6">
          Frontend Developer
        </p>

        <a
          href="/resume.pdf"
          className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:opacity-90"
        >
          Download ATS Resume
        </a>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Summary
        </h2>

        <p className="text-slate-700 leading-8">
          Frontend Developer skilled in React,
          Next.js, TypeScript and Tailwind CSS.
          Passionate about creating responsive,
          accessible and user-focused web
          applications.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Figma",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Experience
        </h2>

        <div>
          <h3 className="font-semibold">
            Frontend Intern
          </h3>

          <p className="text-slate-600">
            Notzero Innovation Hub
          </p>

          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              Built responsive interfaces using
              React and modern frontend tools.
            </li>

            <li>
              Collaborated on real-world web
              application projects.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Projects
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Focus Studio
            </h3>

            <p className="text-slate-700 mt-2">
              Productivity platform featuring
              Pomodoro timer, task management,
              analytics dashboard and AI-powered
              productivity assistance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              E-Commerce Platform
            </h3>

            <p className="text-slate-700 mt-2">
              Modern online shopping experience
              with product listings, cart
              functionality and responsive design.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Education
        </h2>

        <p className="text-slate-700">
          Add your degree, institution and year.
        </p>
      </section>

    </main>
  );
}