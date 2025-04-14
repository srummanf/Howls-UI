"use client"

import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"

export default function ScrollAreaPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-scroll-area`

  const usageCode = `import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">ScrollArea Demo</h4>
        <p className="text-sm">
          This is a scrollable area with custom scrollbars. It uses Radix UI's ScrollArea
          primitive and is styled with Tailwind CSS.
        </p>
        <p className="text-sm">
          Long content goes here. When it overflows the container, the scrollbar will appear.
          The scrollbar is styled to match the design system and provides a consistent 
          look across different browsers.
        </p>
        <p className="text-sm">
          You can scroll using the scrollbar, mouse wheel, touch gestures, or keyboard
          navigation. The scrollbar only appears when needed and can be styled to fit
          your design needs.
        </p>
        <p className="text-sm">
          Additional content to make sure we have enough to scroll. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Cras nec justo vel nisi consectetur
          tincidunt ac in turpis.
        </p>
      </div>
    </ScrollArea>
  )
}`

  const horizontalScrollCode = `// Horizontal scroll example
<ScrollArea className="w-[350px] whitespace-nowrap rounded-md border">
  <div className="flex p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div 
        key={i}
        className="w-[200px] flex-shrink-0 rounded-md border p-4 mr-4"
      >
        <div className="font-medium">Item {i + 1}</div>
        <p className="text-sm text-muted-foreground">
          Horizontally scrollable item
        </p>
      </div>
    ))}
  </div>
</ScrollArea>`

  const scrollbarVisibilityCode = `// Scrollbar visibility examples
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  {/* Default scrollbar (visible on hover) */}
  <div className="space-y-4">
    <p className="text-sm">Content that overflows the container...</p>
    {/* More content here */}
  </div>
</ScrollArea>

<ScrollArea 
  className="h-[200px] w-[350px] rounded-md border p-4"
  type="always"
>
  {/* Scrollbar always visible */}
  <div className="space-y-4">
    <p className="text-sm">Content with always-visible scrollbar...</p>
    {/* More content here */}
  </div>
</ScrollArea>

<ScrollArea 
  className="h-[200px] w-[350px] rounded-md border p-4"
  type="scroll"
>
  {/* Scrollbar visible only when scrolling */}
  <div className="space-y-4">
    <p className="text-sm">Content with scroll-visible scrollbar...</p>
    {/* More content here */}
  </div>
</ScrollArea>

<ScrollArea 
  className="h-[200px] w-[350px] rounded-md border p-4"
  type="auto"
>
  {/* Scrollbar behavior determined by platform */}
  <div className="space-y-4">
    <p className="text-sm">Content with auto scrollbar visibility...</p>
    {/* More content here */}
  </div>
</ScrollArea>`

  const manualInstallationCode = `import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }`

  const demoContent = `
    <div className="space-y-4">
      <h4 className="text-sm font-medium leading-none">ScrollArea Demo</h4>
      <p className="text-sm">
        This is a scrollable area with custom scrollbars. It uses Radix UI's ScrollArea
        primitive and is styled with Tailwind CSS.
      </p>
      <p className="text-sm">
        Long content goes here. When it overflows the container, the scrollbar will appear.
        The scrollbar is styled to match the design system and provides a consistent 
        look across different browsers.
      </p>
      <p className="text-sm">
        You can scroll using the scrollbar, mouse wheel, touch gestures, or keyboard
        navigation. The scrollbar only appears when needed and can be styled to fit
        your design needs.
      </p>
      <p className="text-sm">
        Additional content to make sure we have enough to scroll. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Cras nec justo vel nisi consectetur
        tincidunt ac in turpis.
      </p>
      <p className="text-sm">
        Even more content to ensure scrolling. Fusce varius urna id quam consequat
        consectetur. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor,
        sagittis eget, iaculis quis, molestie non, velit.
      </p>
      <p className="text-sm">
        Sed lectus. Integer euismod lacus luctus magna. Quisque id mi. Ut tincidunt 
        tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
        Curabitur vestibulum aliquam leo.
      </p>
    </div>
  `

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Scroll Area</h1>
          <p className="text-xl text-muted-foreground">A custom scrollable area with native scrolling but custom styled scrollbars.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">ScrollArea Demo</h4>
                <p className="text-sm">
                  This is a scrollable area with custom scrollbars. It uses Radix UI's ScrollArea
                  primitive and is styled with Tailwind CSS.
                </p>
                <p className="text-sm">
                  Long content goes here. When it overflows the container, the scrollbar will appear.
                  The scrollbar is styled to match the design system and provides a consistent 
                  look across different browsers.
                </p>
                <p className="text-sm">
                  You can scroll using the scrollbar, mouse wheel, touch gestures, or keyboard
                  navigation. The scrollbar only appears when needed and can be styled to fit
                  your design needs.
                </p>
                <p className="text-sm">
                  Additional content to make sure we have enough to scroll. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Cras nec justo vel nisi consectetur
                  tincidunt ac in turpis.
                </p>
                <p className="text-sm">
                  Even more content to ensure scrolling. Fusce varius urna id quam consequat
                  consectetur. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor,
                  sagittis eget, iaculis quis, molestie non, velit.
                </p>
              </div>
            </ScrollArea>
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

          {/* Horizontal Scroll Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Horizontal Scroll</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <ScrollArea className="w-[350px] whitespace-nowrap rounded-md border">
                  <div className="flex p-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-[200px] flex-shrink-0 rounded-md border p-4 mr-4"
                      >
                        <div className="font-medium">Item {i + 1}</div>
                        <p className="text-sm text-muted-foreground">
                          Horizontally scrollable item
                        </p>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={horizontalScrollCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Scrollbar Visibility Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Scrollbar Visibility</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Default (visible on hover)</p>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                      <div dangerouslySetInnerHTML={{ __html: demoContent }} />
                    </ScrollArea>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Always visible</p>
                    <ScrollArea 
                      className="h-[200px] w-[350px] rounded-md border p-4"
                      type="always"
                    >
                      <div dangerouslySetInnerHTML={{ __html: demoContent }} />
                    </ScrollArea>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Visible when scrolling</p>
                    <ScrollArea 
                      className="h-[200px] w-[350px] rounded-md border p-4"
                      type="scroll"
                    >
                      <div dangerouslySetInnerHTML={{ __html: demoContent }} />
                    </ScrollArea>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={scrollbarVisibilityCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">ScrollArea</td>
                  <td className="p-3 font-mono text-sm">
                    ScrollAreaPrimitive.ScrollAreaProps<br />
                    <span className="text-muted-foreground">type?: "auto" | "always" | "scroll" | "hover"</span><br />
                    <span className="text-muted-foreground">scrollHideDelay?: number</span>
                  </td>
                  <td className="p-3">The root component for the scroll area.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ScrollBar</td>
                  <td className="p-3 font-mono text-sm">
                    ScrollAreaPrimitive.ScrollAreaScrollbarProps<br />
                    <span className="text-muted-foreground">orientation?: "vertical" | "horizontal"</span>
                  </td>
                  <td className="p-3">The scrollbar component that appears when content overflows.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}