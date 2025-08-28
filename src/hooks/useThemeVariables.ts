"use client";

import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { CSSVariable } from '@/types/theme';

/**
 * Hook to access CSS variables programmatically
 */
export function useThemeVariables() {
  const { theme } = useTheme();

  /**
   * Get the current value of a CSS variable
   */
  const getCSSVariable = (variable: CSSVariable): string => {
    if (typeof window === 'undefined') return '';
    
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue(variable).trim();
  };

  /**
   * Set a CSS variable value
   */
  const setCSSVariable = (variable: CSSVariable, value: string): void => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    root.style.setProperty(variable, value);
  };

  /**
   * Get all current theme colors as RGB values
   */
  const getThemeColors = () => {
    return {
      background: getCSSVariable('--background'),
      foreground: getCSSVariable('--foreground'),
      card: getCSSVariable('--card'),
      cardForeground: getCSSVariable('--card-foreground'),
      primary: getCSSVariable('--primary'),
      primaryForeground: getCSSVariable('--primary-foreground'),
      secondary: getCSSVariable('--secondary'),
      secondaryForeground: getCSSVariable('--secondary-foreground'),
      muted: getCSSVariable('--muted'),
      mutedForeground: getCSSVariable('--muted-foreground'),
      accent: getCSSVariable('--accent'),
      accentForeground: getCSSVariable('--accent-foreground'),
      border: getCSSVariable('--border'),
      input: getCSSVariable('--input'),
      ring: getCSSVariable('--ring'),
      destructive: getCSSVariable('--destructive'),
      destructiveForeground: getCSSVariable('--destructive-foreground'),
      success: getCSSVariable('--success'),
      successForeground: getCSSVariable('--success-foreground'),
      warning: getCSSVariable('--warning'),
      warningForeground: getCSSVariable('--warning-foreground'),
    };
  };

  return {
    theme,
    getCSSVariable,
    setCSSVariable,
    getThemeColors,
  };
}

/**
 * Hook to create custom CSS with theme variables
 */
export function useThemeCSS() {
  const { getCSSVariable } = useThemeVariables();

  /**
   * Create CSS string with theme variables
   */
  const createThemeCSS = (cssTemplate: (vars: Record<string, string>) => string) => {
    const vars = {
      background: `rgb(${getCSSVariable('--background')})`,
      foreground: `rgb(${getCSSVariable('--foreground')})`,
      primary: `rgb(${getCSSVariable('--primary')})`,
      secondary: `rgb(${getCSSVariable('--secondary')})`,
      border: `rgb(${getCSSVariable('--border')})`,
      // Add more as needed
    };

    return cssTemplate(vars);
  };

  return { createThemeCSS };
}
