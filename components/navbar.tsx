'use client';

import Link from 'next/link';

import { Github } from 'lucide-react';

import { Button } from '@/components/ui/button';


export function Navbar() {
  return (
    <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 w-full items-center justify-center">
        <div className="container flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <span className="text-primary-foreground text-lg font-bold">CP</span>
              </div>
              <span className="text-xl font-semibold">Client Parser</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Demo
              </Link>
              <Link
                href="#usages"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                 Usages
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/montasim/client-parser"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
