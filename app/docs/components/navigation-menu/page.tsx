"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-navigation-menu`

  const usageCode = `import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]`

  const mobileExample = `import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

// Mobile-friendly navigation menu
<NavigationMenu orientation="vertical" className="md:hidden">
  <NavigationMenuList className="flex flex-col space-y-2">
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[200px]">
          <ListItem href="/docs" title="Introduction">
            Re-usable components
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`

  const indicatorExample = `import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu"
import Link from "next/link"

// With custom indicator
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <ListItem href="/docs" title="Introduction">
            Re-usable components
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px]">
          <ListItem href="/components" title="Components">
            UI component library
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          About
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuIndicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden">
      <div className="relative top-[70%] h-[10px] w-[10px] rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuIndicator>
  </NavigationMenuList>
  <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
    <NavigationMenuViewport className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] border bg-popover text-popover-foreground shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]" />
  </div>
</NavigationMenu>`

  const manualInstallationCode = `import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Navigation Menu</h1>
          <p className="text-xl text-muted-foreground">A responsive navigation menu with flyout submenus for desktop and mobile devices.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock text={usageCode} language="typescript" showLineNumbers={true} theme={dracula} codeBlock />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <Tabs defaultValue="cli" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
            <TabsContent value="cli" className="mt-6">
              <div className="rounded-md bg-muted p-4">
                <CopyBlock text={installationCode} language="bash" showLineNumbers={false} theme={dracula} codeBlock />
              </div>
            </TabsContent>
            <TabsContent value="manual" className="mt-6">
              <div className="rounded-md bg-muted">
                <CopyBlock
                  text={manualInstallationCode}
                  language="typescript"
                  showLineNumbers={true}
                  theme={dracula}
                  codeBlock
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <div className="rounded-md bg-muted">
            <CopyBlock text={usageCode} language="typescript" showLineNumbers={true} theme={dracula} codeBlock />
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          {/* Mobile Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Mobile Navigation</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-4">
                  <NavigationMenu orientation="vertical" className="border rounded-md p-4 w-full max-w-[300px]">
                    <NavigationMenuList className="flex flex-col space-y-2">
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Documentation
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={mobileExample} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Custom Indicator Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">With Custom Indicator</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-4">
                  <div className="border rounded-md p-4 w-full relative">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex justify-center mt-3">
                      <div className="w-2 h-2 bg-primary rotate-45 transform -translate-y-1"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={indicatorExample} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left font-medium">Component</th>
                  <th className="p-3 text-left font-medium">Props</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenu</td>
                  <td className="p-3 font-mono text-sm">
                    NavigationMenuPrimitive.NavigationMenuProps<br />
                    <span className="text-muted-foreground">orientation?: "horizontal" | "vertical"</span><br />
                    <span className="text-muted-foreground">dir?: "ltr" | "rtl"</span>
                  </td>
                  <td className="p-3">The root component of the navigation menu.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuList</td>
                  <td className="p-3 font-mono text-sm">NavigationMenuPrimitive.NavigationMenuListProps</td>
                  <td className="p-3">The container for navigation menu items.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuItem</td>
                  <td className="p-3 font-mono text-sm">NavigationMenuPrimitive.NavigationMenuItemProps</td>
                  <td className="p-3">A navigation menu item.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuTrigger</td>
                  <td className="p-3 font-mono text-sm">NavigationMenuPrimitive.NavigationMenuTriggerProps</td>
                  <td className="p-3">The trigger for a submenu.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuContent</td>
                  <td className="p-3 font-mono text-sm">
                    NavigationMenuPrimitive.NavigationMenuContentProps<br />
                    <span className="text-muted-foreground">forceMount?: boolean</span>
                  </td>
                  <td className="p-3">The content displayed when the menu item is triggered.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuLink</td>
                  <td className="p-3 font-mono text-sm">
                    NavigationMenuPrimitive.NavigationMenuLinkProps<br />
                    <span className="text-muted-foreground">asChild?: boolean</span>
                  </td>
                  <td className="p-3">A link item within the navigation menu.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuViewport</td>
                  <td className="p-3 font-mono text-sm">NavigationMenuPrimitive.NavigationMenuViewportProps</td>
                  <td className="p-3">The viewport for the navigation menu content.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">NavigationMenuIndicator</td>
                  <td className="p-3 font-mono text-sm">NavigationMenuPrimitive.NavigationMenuIndicatorProps</td>
                  <td className="p-3">The indicator showing the active menu item.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">navigationMenuTriggerStyle</td>
                  <td className="p-3 font-mono text-sm">Function</td>
                  <td className="p-3">A utility function that returns the default trigger style class.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}