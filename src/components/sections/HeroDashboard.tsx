import { Card } from "@/components/ui/card";

export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-xl">
<div className="absolute -inset-4 -z-10 rounded-[32px] bg-indigo-500/10 blur-3xl"/>
      <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="space-y-6 p-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Focus Score
              </p>

              <h3 className="mt-1 text-4xl font-bold">
                92%
              </h3>
            </div>

            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
              +12%
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <Card className="border-white/10 bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">
                Tasks Completed
              </p>

              <p className="mt-2 text-2xl font-semibold">
                8 / 10
              </p>
            </Card>

            <Card className="border-white/10 bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">
                Deep Work
              </p>

              <p className="mt-2 text-2xl font-semibold">
                4h 32m
              </p>
            </Card>

          </div>

          <Card className="border-indigo-500/20 bg-indigo-500/10 p-4">
            <p className="text-sm font-medium">
              AI Insight
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              You're most productive between
              9AM and 11AM. Consider scheduling
              your hardest work during that period.
            </p>
          </Card>

        </div>
      </Card>

    </div>
  );
}