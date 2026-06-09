import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="container-custom">

        <div className="mb-16">
          <Badge className="border-white/10 bg-white/5 px-5 py-2 text-sm font-medium rounded-full">
            About Me
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Building products people enjoy using
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              I'm Ayomide, a frontend developer focused on building
              modern SaaS products and web applications with React,
              Next.js and contemporary frontend technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I enjoy transforming complex ideas into intuitive user
              experiences, with a strong focus on usability,
              performance, responsiveness and thoughtful design.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Recently I've been exploring AI-powered product
              experiences through Focus Studio, combining productivity
              systems with intelligent assistance and analytics.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/images/headshot.jpeg"
              alt="Ayomide"
              width={700}
              height={900}
              className="rounded-2xl object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}