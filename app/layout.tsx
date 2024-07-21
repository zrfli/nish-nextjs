import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { siteConfig } from "@/config/site";

import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import "@/styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}