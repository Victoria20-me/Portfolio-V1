import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import HeroDashboard from "./HeroDashboard";
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_40%)]"/>
        <div className="container-custom">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white hover:bg-white/10">
              Frontend Engineer
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Building modern SaaS products with clean UI, smooth UX, and
              scalable frontend architecture.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I specialize in React, Next.js and modern frontend systems focused
              on usability, performance and polished digital experience.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-8">View Projects</Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-8 hover:bg-white/5">Contact Me</Button>
            </div>
            </div>
            <HeroDashboard/>
          </div>
        </div>
      
    </section>
  );
}
