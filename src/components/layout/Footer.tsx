export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          © 2026 Ayomide. Frontend Developer.
        </p>

        <p>
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}