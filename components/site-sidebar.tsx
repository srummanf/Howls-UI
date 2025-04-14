"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarNavItems = [
  {
    title: "Getting Started",
    href: "/docs",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    items: [
      {
        title: "Next.js",
        href: "/docs/installation/nextjs",
      },
    ],
  },
  {
    title: "Components",
    href: "/docs/components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert",
        href: "/docs/components/alert",
      },
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
      },
      {
        title: "Aspect Ratio",
        href: "/docs/components/aspect-ratio",
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
      },
      {
        title: "Breadcrumb",
        href: "/docs/components/breadcrumb",
      },
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Calendar",
        href: "/docs/components/calendar",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
      {
        title: "Carousel",
        href: "/docs/components/carousel",
      },
      {
        title: "Chart",
        href: "/docs/components/chart",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
      },
      {
        title: "ComboBox",
        href: "/docs/components/combobox",
      },
      {
        title: "Command",
        href: "/docs/components/command",
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
      },
      {
        title: "Data Table",
        href: "/docs/components/data-table",
      },
      {
        title: "Date Picker",
        href: "/docs/components/date-picker",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Drawer",
        href: "/docs/components/drawer",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
      },
      {
        title: "Form",
        href: "/docs/components/form",
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Input OTP",
        href: "/docs/components/input-otp",
      },
      {
        title: "Label",
        href: "/docs/components/label",
      },
      {
        title: "Menubar",
        href: "/docs/components/menubar",
      },
      {
        title: "Navigation Menu",
        href: "/docs/components/navigation-menu",
      },
      {
        title: "Pagination",
        href: "/docs/components/pagination",
      },
    ],
  },
];

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-background md:block">
      <ScrollArea className="py-6 pr-6 lg:py-8">
        <div className="pl-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            Documentation
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {sidebarNavItems.map((item, index) => (
              <div key={index} className="pb-4">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="flex w-full cursor-not-allowed items-center rounded-md px-2 py-1 font-medium text-muted-foreground">
                    {item.title}
                  </div>
                )}
                {item.items?.length && (
                  <div className="grid grid-flow-row auto-rows-max pl-4 text-sm">
                    {item.items.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className={cn(
                          "flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                          pathname === subItem.href
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
