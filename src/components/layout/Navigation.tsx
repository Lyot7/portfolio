"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
}

/**
 * Navigation - Composant de navigation principal
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage de la navigation
 */
export function Navigation({ 
  items, 
  className,
  itemClassName,
  activeClassName = "text-primary font-medium"
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
              "hover:text-primary hover:bg-primary/10",
              isActive && activeClassName,
              itemClassName
            )}
          >
            {item.icon && (
              <span className="flex-shrink-0">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
