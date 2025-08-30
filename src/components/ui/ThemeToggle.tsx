"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative p-3 rounded-lg w-11 h-11 bg-muted/50 border animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-3 rounded-lg
        bg-card/80 backdrop-blur-md border border-border
        text-foreground hover:bg-card hover:text-primary
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95 
        shadow-lg hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
      "
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
