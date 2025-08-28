"use client";

import { ReactNode } from 'react';
import { DarkVeilBackground } from './DarkVeilBackground';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <DarkVeilBackground />
      <ThemeToggle />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
