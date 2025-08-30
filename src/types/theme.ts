/**
 * Theme-related type definitions
 */

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
}

/**
 * CSS Variable names used in the theme system
 */
export type CSSVariable = 
  | '--background'
  | '--foreground'
  | '--card'
  | '--card-foreground'
  | '--primary'
  | '--primary-foreground'
  | '--secondary'
  | '--secondary-foreground'
  | '--muted'
  | '--muted-foreground'
  | '--accent'
  | '--accent-foreground'
  | '--border'
  | '--input'
  | '--ring'
  | '--destructive'
  | '--destructive-foreground'
  | '--success'
  | '--success-foreground'
  | '--warning'
  | '--warning-foreground'
  | '--radius';

/**
 * Color palette for each theme
 */
export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  destructive: string;
  destructiveForeground: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  light: ThemeColors;
  dark: ThemeColors;
  radius?: string;
}
