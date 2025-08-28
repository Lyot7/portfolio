"use client";

import { ThemeDemo } from '@/components/ui/ThemeDemo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function ThemeDemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <ThemeDemo />
    </main>
  );
}
