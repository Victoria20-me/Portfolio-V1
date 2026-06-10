import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import HeroDashboard from "./HeroDashboard";
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-20 top-20 h-2 w-2 rounded-full bg-indigo-400/40 animate-pulse" />

  <div className="absolute right-40 top-40 h-3 w-3 rounded-full bg-cyan-400/30 animate-pulse" />

  <div className="absolute bottom-40 left-1/3 h-2 w-2 rounded-full bg-purple-400/30 animate-pulse" />
</div>
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
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>
Open to internships and junior frontend roles
              
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8"><a href="#projects">View Projects</a></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-8 hover:bg-white/5"><a href="#contact">Contact Me</a></Button>
            </div>
            </div>
            <HeroDashboard/>
          </div>
        </div>
      
    </section>
  );
}
