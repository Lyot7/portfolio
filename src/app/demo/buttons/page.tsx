"use client";

import { ButtonDemo } from '@/components/ui/ButtonDemo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function ButtonDemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <ButtonDemo />
    </main>
  );
}
