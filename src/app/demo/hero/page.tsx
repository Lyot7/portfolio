"use client";

import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { HeroSection, HeroSectionCompact, HeroSectionWithPattern } from '@/components/sections';
import { Button } from '@/components/ui';

export default function HeroDemoPage() {
  const [currentHero, setCurrentHero] = useState<'default' | 'compact' | 'pattern'>('default');

  const renderHero = () => {
    switch (currentHero) {
      case 'compact':
        return <HeroSectionCompact />;
      case 'pattern':
        return <HeroSectionWithPattern />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      
      {/* Sélecteur de variante */}
      <div className="fixed top-4 left-4 z-40 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-medium text-card-foreground">Variantes Hero</h3>
        <div className="flex flex-col gap-2">
          <Button
            variant={currentHero === 'default' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setCurrentHero('default')}
            className="justify-start"
          >
            Default
          </Button>
          <Button
            variant={currentHero === 'compact' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setCurrentHero('compact')}
            className="justify-start"
          >
            Compact
          </Button>
          <Button
            variant={currentHero === 'pattern' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setCurrentHero('pattern')}
            className="justify-start"
          >
            With Pattern
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      {renderHero()}
    </main>
  );
}
