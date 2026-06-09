import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">

          <Badge className="rounded-full px-5 py-2 text-sm">
            Contact
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build something great together
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            I'm currently open to frontend internships,
            junior frontend roles and exciting product-focused
            opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button
              asChild
              className="h-12 rounded-full px-6"
            >
              <a
                href="mailto:famotoria@gmail.com"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-6"
            >
              <a
                href="https://github.com/Victoria20-me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-6"
            >
              <a
                href="www.linkedin.com/in/famoriyoayomide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild
            variant="outline"
            className="h-12 rounded-full px-6">
                <a href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FileText className="mr-2 h-4 w-4"/>
                Resume
                </a>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}