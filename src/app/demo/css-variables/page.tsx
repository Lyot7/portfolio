"use client";

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CSSVariablesDemo } from '@/components/examples/CSSVariablesDemo';

export default function CSSVariablesDemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <CSSVariablesDemo />
    </main>
  );
}
