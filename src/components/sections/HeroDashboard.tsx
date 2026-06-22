import { Card } from "@/components/ui/card";

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute -inset-4 -z-10 rounded-[40px] bg-linear-to-r from-indigo-500/20 via-purple-500/10 to-cyan-500/20 blur-3xl animate-pulse" />
      <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="space-y-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Frontend Developer
              </p>

              <h3 className="mt-1 text-4xl font-bold">
                React Next.js Typescript
              </h3>
            </div>

            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
              2 Projects Built
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-white/10 bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">Internship</p>

              <p className="mt-2 text-lg font-semibold">
                Notzero Innovation Hub
              </p>
            </Card>

            <Card className="border-white/10 bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">Status</p>

              <p className="mt-2 text-lg font-semibold text-emerald-400">
                Available
              </p>
            </Card>
          </div>

          <Card className="border-indigo-500/20 bg-indigo-500/10 p-4">
            <p className="text-sm font-medium">Current Focus</p>

            <p className="mt-2 text-sm text-muted-foreground">
              Building modern frontend applications with React, Next.js and
              TypeScript. Focused on responsive UI, performance and creating
              polished user experiences.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
