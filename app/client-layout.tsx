"use client";

import { usePathname } from "next/navigation";
import { SiteSidebar } from "@/components/site-sidebar";

export function ClientConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  if (isHomePage) {
    // Home page layout (no sidebar)
    return (
      <main className="flex-1">
        <div className="mx-auto w-full">{children}</div>
      </main>
    );
  }
  
  // For all other routes (including /docs and everything else)
  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
      <SiteSidebar />
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">{children}</div>
      </main>
    </div>
  );
}