'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Github, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 w-full items-center justify-center">
        <div className="container flex max-w-screen-2xl items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <span className="text-primary-foreground text-lg font-bold">CP</span>
              </div>
              <span className="text-lg font-semibold sm:text-xl">Client Parser</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <a
                href="https://github.com/montasim/client-parser"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-border bg-background border-t md:hidden">
          <div className="container space-y-4 px-4 py-4 sm:px-6">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground block text-sm font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="text-muted-foreground hover:text-foreground block text-sm font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="#usages"
              className="text-muted-foreground hover:text-foreground block text-sm font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Usages
            </Link>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href="https://github.com/montasim/client-parser"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
