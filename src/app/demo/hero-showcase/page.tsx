"use client";

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { HeroDemo } from '@/components/sections';

export default function HeroShowcasePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <HeroDemo />
      </div>
    </main>
  );
}
