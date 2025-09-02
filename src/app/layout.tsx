import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GlobalLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: "LY0T - Développeur Web Full Stack",
  description: "Développeur web full stack spécialisé dans la création de sites et applications web modernes. Expert en React, Next.js, TypeScript et design d'interfaces intuitives.",
  keywords: ["développeur web", "full stack", "React", "Next.js", "TypeScript", "portfolio", "freelance"],
  authors: [{ name: "LY0T" }],
  creator: "LY0T",
  publisher: "LY0T",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ly0t.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LY0T - Développeur Web Full Stack",
    description: "Développeur web full stack spécialisé dans la création de sites et applications web modernes. Expert en React, Next.js, TypeScript et design d'interfaces intuitives.",
    url: 'https://www.ly0t.fr',
    siteName: 'LY0T Portfolio',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'LY0T - Développeur Web Full Stack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LY0T - Développeur Web Full Stack",
    description: "Développeur web full stack spécialisé dans la création de sites et applications web modernes.",
    images: ['/web-app-manifest-512x512.png'],
    creator: '@ly0t',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LY0T Portfolio',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="LY0T Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LY0T Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2eb352" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#2eb352" />
        <meta name="theme-color" content="#2eb352" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2eb352" media="(prefers-color-scheme: dark)" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
