import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "../shared/Reveal";
export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="py-32">
        <div className="container-custom">
          <div className="mb-16">
            <Badge className="border-white/10 bg-white/5 px-5 py-2 text-sm font-medium rounded-full">
              Featured Projects
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Selected Work
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              A selection of projects focused on SaaS experiences, productivity
              tools and modern web applications.
            </p>
          </div>

          <div className="space-y-24">
            {/* Focus Studio */}

            <article className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold">Focus Studio</h3>

                <p className="mt-4 text-muted-foreground">
                  An AI-powered productivity dashboard designed to help users
                  build focus, track performance, and maintain consistent deep
                  work habits.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="secondary">Framer Motion</Badge>
                  <Badge variant="secondary">OpenRouter</Badge>
                  <Badge variant="secondary">Recharts</Badge>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <li>• Pomodoro Focus Timer</li>
                  <li>• AI Focus Coach</li>
                  <li>• Productivity Analytics</li>
                  <li>• Focus Score Tracking</li>
                  <li>• Streak Monitoring</li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <Button asChild>
                    <a
                      href="https://productivity-focus-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>

                  <Button asChild variant="outline"><a href="https://victoria20-me.github.io/Productivity-Focus-app/" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                <Image
                  src="/images/Dashboard.png"
                  alt="Focus Studio Dashboard"
                  width={1200}
                  height={800}
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </article>

            {/* Ecommerce */}

            <article className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <Image
                  src="/images/e-commerce.png"
                  alt="Ecommerce Project"
                  width={1200}
                  height={800}
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-semibold">
                  Modern Ecommerce Platform
                </h3>

                <p className="mt-4 text-muted-foreground">
                  A responsive shopping experience focused on usability,
                  performance, state management, and scalable frontend
                  architecture.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="secondary">Axios</Badge>
                  <Badge variant="secondary">DummyJSON</Badge>
                  <Badge variant="secondary">Toastify</Badge>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <li>• Cart & Wishlist State Management</li>
                  <li>• Responsive Design</li>
                  <li>• Loading Skeletons</li>
                  <li>• Toast Feedback</li>
                  <li>• Dark Mode Support</li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <Button asChild>
                    <a
                      href="https://mye-comm.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>

                  <Button asChild variant="outline"><a href="https://github.com/Victoria20-me/E-commerce-project" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
