"use client";

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();



  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 p-3 rounded-full 
        backdrop-blur-md border transition-all duration-300
        hover:scale-110 active:scale-95 shadow-lg
        ${theme === 'dark' 
          ? 'bg-white/20 border-white/30 text-white hover:bg-white/30' 
          : 'bg-gray-900/20 border-gray-900/30 text-gray-900 hover:bg-gray-900/30'
        }
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
