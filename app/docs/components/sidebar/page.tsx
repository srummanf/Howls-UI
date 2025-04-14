"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock} from "react-code-blocks"
import { Button } from "@/components/ui/button"
import { customTheme } from "@/lib/code-theme"
import { Home, Settings, User, Mail, Calendar, FileText, Layers } from "lucide-react"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    collapsed?: boolean
  }
>(({ collapsed, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col h-screen bg-background border-r transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    } ${className}`}
    {...props}
  >
    {children}
  </div>
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement> & {
    collapsed?: boolean
  }
>(({ collapsed, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center h-14 px-4 border-b ${
      collapsed ? "justify-center" : "justify-between"
    } ${className}`}
    {...props}
  >
    {children}
  </div>
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex-1 overflow-auto py-2 ${className}`}
    {...props}
  >
    {children}
  </div>
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-4 border-t mt-auto ${className}`}
    {...props}
  >
    {children}
  </div>
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    collapsed?: boolean
    active?: boolean
  }
>(({ icon, collapsed, active, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center py-2 px-4 cursor-pointer transition-colors rounded-md ${
      active 
        ? "bg-muted text-foreground" 
        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
    } ${collapsed ? "justify-center" : ""} ${className}`}
    {...props}
  >
    {icon && <div className={collapsed ? "" : "mr-2"}>{icon}</div>}
    {!collapsed && <div>{children}</div>}
  </div>
))
SidebarItem.displayName = "SidebarItem"

const SidebarSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    collapsed?: boolean
    title?: string
  }
>(({ collapsed, title, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`py-2 ${className}`}
    {...props}
  >
    {title && !collapsed && (
      <div className="text-xs font-semibold text-muted-foreground px-4 mb-1">
        {title}
      </div>
    )}
    {title && collapsed && (
      <div className="mx-2 border-t my-2"></div>
    )}
    {children}
  </div>
))
SidebarSection.displayName = "SidebarSection"

export default function SidebarPage() {
  const [activeTab, setActiveTab] = React.useState("preview")
  const [collapsed, setCollapsed] = React.useState(false)

  const usageCode = `import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem, 
  SidebarSection 
} from "@/components/ui/sidebar"
import { Home, Settings, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SidebarDemo() {
  const [collapsed, setCollapsed] = React.useState(false)
  
  return (
    <Sidebar collapsed={collapsed}>
      <SidebarHeader collapsed={collapsed}>
        {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <SidebarItem icon={<Home size={20} />} active collapsed={collapsed}>
            Home
          </SidebarItem>
          <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
            Messages
          </SidebarItem>
          <SidebarItem icon={<User size={20} />} collapsed={collapsed}>
            Profile
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings" collapsed={collapsed}>
          <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
            Settings
          </SidebarItem>
        </SidebarSection>
      </SidebarContent>
      <SidebarFooter>
        {!collapsed && (
          <div className="text-xs text-muted-foreground">
            © 2025 My App
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}`

  const variantsCode = `// With additional items and sections
<Sidebar>
  <SidebarHeader>
    <span className="text-lg font-semibold">Dashboard</span>
    <Button variant="ghost" size="icon">
      <Menu size={20} />
    </Button>
  </SidebarHeader>
  <SidebarContent>
    <SidebarSection>
      <SidebarItem icon={<Home size={20} />} active>
        Home
      </SidebarItem>
      <SidebarItem icon={<Mail size={20} />}>
        Messages
      </SidebarItem>
      <SidebarItem icon={<User size={20} />}>
        Profile
      </SidebarItem>
    </SidebarSection>
    <SidebarSection title="Content">
      <SidebarItem icon={<FileText size={20} />}>
        Documents
      </SidebarItem>
      <SidebarItem icon={<Image size={20} />}>
        Media
      </SidebarItem>
    </SidebarSection>
    <SidebarSection title="Organization">
      <SidebarItem icon={<Users size={20} />}>
        Team
      </SidebarItem>
      <SidebarItem icon={<Calendar size={20} />}>
        Calendar
      </SidebarItem>
    </SidebarSection>
    <SidebarSection title="Configuration">
      <SidebarItem icon={<Settings size={20} />}>
        Settings
      </SidebarItem>
      <SidebarItem icon={<HelpCircle size={20} />}>
        Help
      </SidebarItem>
    </SidebarSection>
  </SidebarContent>
  <SidebarFooter>
    <div className="text-xs text-muted-foreground">
      © 2025 My App
    </div>
  </SidebarFooter>
</Sidebar>`

  const collapsibleCode = `// Collapsible sidebar example
import { useState } from "react"

function CollapsibleSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <Sidebar collapsed={collapsed}>
      <SidebarHeader collapsed={collapsed}>
        {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection collapsed={collapsed}>
          <SidebarItem icon={<Home size={20} />} active collapsed={collapsed}>
            Home
          </SidebarItem>
          <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
            Messages
          </SidebarItem>
          <SidebarItem icon={<User size={20} />} collapsed={collapsed}>
            Profile
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title="Settings" collapsed={collapsed}>
          <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
            Settings
          </SidebarItem>
        </SidebarSection>
      </SidebarContent>
      <SidebarFooter>
        {!collapsed && (
          <div className="text-xs text-muted-foreground">
            © 2025 My App
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}`

  const manualInstallationCode = `import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ collapsed, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col h-screen bg-background border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Sidebar.displayName = "Sidebar"

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
}

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ collapsed, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center h-14 px-4 border-b",
        collapsed ? "justify-center" : "justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto py-2", className)}
    {...props}
  >
    {children}
  </div>
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 border-t mt-auto", className)}
    {...props}
  >
    {children}
  </div>
))
SidebarFooter.displayName = "SidebarFooter"

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  collapsed?: boolean
  active?: boolean
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ icon, collapsed, active, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center py-2 px-4 cursor-pointer transition-colors rounded-md",
        active 
          ? "bg-muted text-foreground" 
          : "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
        collapsed ? "justify-center" : "",
        className
      )}
      {...props}
    >
      {icon && <div className={collapsed ? "" : "mr-2"}>{icon}</div>}
      {!collapsed && <div>{children}</div>}
    </div>
  )
)
SidebarItem.displayName = "SidebarItem"

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
  title?: string
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ collapsed, title, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("py-2", className)}
      {...props}
    >
      {title && !collapsed && (
        <div className="text-xs font-semibold text-muted-foreground px-4 mb-1">
          {title}
        </div>
      )}
      {title && collapsed && (
        <div className="mx-2 border-t my-2"></div>
      )}
      {children}
    </div>
  )
)
SidebarSection.displayName = "SidebarSection"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarSection
}`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Sidebar</h1>
          <p className="text-xl text-muted-foreground">
            A responsive navigation sidebar with collapsible support and organized sections.
          </p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="border rounded-md h-[500px] overflow-hidden">
              <Sidebar collapsed={collapsed}>
                <SidebarHeader collapsed={collapsed}>
                  {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    {collapsed ? "→" : "←"}
                  </Button>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarSection collapsed={collapsed}>
                    <SidebarItem icon={<Home size={20} />} active collapsed={collapsed}>
                      Home
                    </SidebarItem>
                    <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
                      Messages
                    </SidebarItem>
                    <SidebarItem icon={<User size={20} />} collapsed={collapsed}>
                      Profile
                    </SidebarItem>
                  </SidebarSection>
                  <SidebarSection title="Content" collapsed={collapsed}>
                    <SidebarItem icon={<FileText size={20} />} collapsed={collapsed}>
                      Documents
                    </SidebarItem>
                    <SidebarItem icon={<Layers size={20} />} collapsed={collapsed}>
                      Projects
                    </SidebarItem>
                  </SidebarSection>
                  <SidebarSection title="Settings" collapsed={collapsed}>
                    <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
                      Settings
                    </SidebarItem>
                    <SidebarItem icon={<Calendar size={20} />} collapsed={collapsed}>
                      Calendar
                    </SidebarItem>
                  </SidebarSection>
                </SidebarContent>
                <SidebarFooter>
                  {!collapsed && (
                    <div className="text-xs text-muted-foreground">
                      © 2025 My App
                    </div>
                  )}
                </SidebarFooter>
              </Sidebar>
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock text={usageCode} language="typescript" showLineNumbers={true} theme={customTheme} codeBlock />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-1 lg:w-[200px]">
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
            <TabsContent value="manual" className="mt-6">
              <div className="rounded-md bg-muted">
                <CopyBlock
                  text={manualInstallationCode}
                  language="typescript"
                  showLineNumbers={true}
                  theme={customTheme}
                  codeBlock
                />
              </div>
            </TabsContent>
          </Tabs>
          <p className="text-sm text-muted-foreground mt-2">
            Note: The Sidebar component is a custom component and not part of the Radix UI primitives. It needs to be created manually.
          </p>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <div className="rounded-md bg-muted">
            <CopyBlock text={usageCode} language="typescript" showLineNumbers={true} theme={customTheme} codeBlock />
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          {/* Collapsible Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Collapsible Sidebar</h3>
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="border rounded-md h-[500px] overflow-hidden">
                  <Sidebar collapsed={collapsed}>
                    <SidebarHeader collapsed={collapsed}>
                      {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setCollapsed(!collapsed)}
                      >
                        {collapsed ? "→" : "←"}
                      </Button>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarSection collapsed={collapsed}>
                        <SidebarItem icon={<Home size={20} />} active collapsed={collapsed}>
                          Home
                        </SidebarItem>
                        <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
                          Messages
                        </SidebarItem>
                        <SidebarItem icon={<User size={20} />} collapsed={collapsed}>
                          Profile
                        </SidebarItem>
                      </SidebarSection>
                      <SidebarSection title="Settings" collapsed={collapsed}>
                        <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
                          Settings
                        </SidebarItem>
                      </SidebarSection>
                    </SidebarContent>
                    <SidebarFooter>
                      {!collapsed && (
                        <div className="text-xs text-muted-foreground">
                          © 2025 My App
                        </div>
                      )}
                    </SidebarFooter>
                  </Sidebar>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={collapsibleCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Variants Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">With Multiple Sections</h3>
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="border rounded-md h-[500px] overflow-hidden">
                  <Sidebar>
                    <SidebarHeader>
                      <span className="text-lg font-semibold">Dashboard</span>
                      <Button variant="ghost" size="icon">
                        <Settings size={20} />
                      </Button>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarSection>
                        <SidebarItem icon={<Home size={20} />} active>
                          Home
                        </SidebarItem>
                        <SidebarItem icon={<Mail size={20} />}>
                          Messages
                        </SidebarItem>
                        <SidebarItem icon={<User size={20} />}>
                          Profile
                        </SidebarItem>
                      </SidebarSection>
                      <SidebarSection title="Content">
                        <SidebarItem icon={<FileText size={20} />}>
                          Documents
                        </SidebarItem>
                        <SidebarItem icon={<Layers size={20} />}>
                          Projects
                        </SidebarItem>
                      </SidebarSection>
                      <SidebarSection title="Organization">
                        <SidebarItem icon={<Calendar size={20} />}>
                          Calendar
                        </SidebarItem>
                      </SidebarSection>
                      <SidebarSection title="Configuration">
                        <SidebarItem icon={<Settings size={20} />}>
                          Settings
                        </SidebarItem>
                      </SidebarSection>
                    </SidebarContent>
                    <SidebarFooter>
                      <div className="text-xs text-muted-foreground">
                        © 2025 My App
                      </div>
                    </SidebarFooter>
                  </Sidebar>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={variantsCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">Sidebar</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes & &#123;<br />
                    <span className="text-muted-foreground pl-4">collapsed?: boolean</span><br />
                    &#125;
                  </td>
                  <td className="p-3">The root container for the sidebar. The collapsed prop controls the expanded/collapsed state.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SidebarHeader</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes & &#123;<br />
                    <span className="text-muted-foreground pl-4">collapsed?: boolean</span><br />
                    &#125;
                  </td>
                  <td className="p-3">The header section of the sidebar, typically containing the logo or title.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SidebarContent</td>
                  <td className="p-3 font-mono text-sm">React.HTMLAttributes</td>
                  <td className="p-3">The main content area of the sidebar, containing navigation items.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SidebarFooter</td>
                  <td className="p-3 font-mono text-sm">React.HTMLAttributes</td>
                  <td className="p-3">The footer section of the sidebar, typically containing copyright info or user controls.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SidebarItem</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes & &#123;<br />
                    <span className="text-muted-foreground pl-4">icon?: React.ReactNode</span><br />
                    <span className="text-muted-foreground pl-4">collapsed?: boolean</span><br />
                    <span className="text-muted-foreground pl-4">active?: boolean</span><br />
                    &#125;
                  </td>
                  <td className="p-3">A navigation item within the sidebar. Can have an icon and active state.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SidebarSection</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes & &#123;<br />
                    <span className="text-muted-foreground pl-4">collapsed?: boolean</span><br />
                    <span className="text-muted-foreground pl-4">title?: string</span><br />
                    &#125;
                  </td>
                  <td className="p-3">A grouping of related sidebar items with an optional title.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}