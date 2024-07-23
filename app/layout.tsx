import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
 
const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"});

import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: 'Nişantaşı Üniversitesi',
  description: 'nisantasi üniversitesi',
  authors: [{name: "Misy", url: "https://misy.dev"}],
}

interface RootLayoutProps { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-white dark:bg-black font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mt-24">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}