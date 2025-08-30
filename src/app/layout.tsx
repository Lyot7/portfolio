import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { GlobalLayout } from "@/components/layout";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mon portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <ThemeProvider>
          <GlobalLayout>
            {children}
          </GlobalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
