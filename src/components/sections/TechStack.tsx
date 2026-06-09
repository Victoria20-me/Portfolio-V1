import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI & Animation",
    skills: [
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
      "Glassmorphism",
    ],
  },
  {
    title: "Data & APIs",
    skills: [
      "REST APIs",
      "Axios",
      "OpenRouter",
      "Recharts",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "VS Code",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="container-custom">

        <div className="mb-16">
          <Badge className="rounded-full">
            Tech Stack
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Modern tools and frameworks I use to build
            scalable, user-focused digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="mb-6 text-xl font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}