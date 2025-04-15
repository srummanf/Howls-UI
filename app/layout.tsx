import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteSidebar } from "@/components/site-sidebar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClientConditionalLayout } from "./client-layout";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Export metadata at the server component level
export const metadata: Metadata = {
  title: "Howl's UI - Studio Ghibli Inspired UI Component Library",
  description: "A beautiful UI component library inspired by Studio Ghibli's magical aesthetics",
  keywords: ["UI library", "Studio Ghibli", "React components", "Next.js"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name/Company",
  openGraph: {
    title: "Howl's UI - Studio Ghibli Inspired UI Component Library",
    description: "A beautiful UI component library inspired by Studio Ghibli's magical aesthetics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Howl's UI - Studio Ghibli Inspired UI Component Library",
    description: "A beautiful UI component library inspired by Studio Ghibli's magical aesthetics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased relative`}
      >
        <div className="texture" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {/* Client component for conditional layout */}
            <ClientConditionalLayout>{children}</ClientConditionalLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}