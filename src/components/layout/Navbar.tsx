"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ayomide
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button className="rounded-full">Let&apos;s Talk</button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-background"
            >
              <SheetHeader>Navigation Menu</SheetHeader>
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-muted-foreground transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4 rounded-full">Let&apos;s Talk</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
