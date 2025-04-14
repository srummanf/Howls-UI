"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock} from "react-code-blocks"
import { customTheme } from "@/lib/code-theme"

export default function SeparatorPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-separator`

  const usageCode = `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`

  const horizontalSeparatorCode = `// Horizontal separator example
<div className="space-y-1">
  <h4 className="text-sm font-medium leading-none">Above Separator</h4>
  <p className="text-sm text-muted-foreground">
    This content is above the separator.
  </p>
</div>
<Separator className="my-4" />
<div className="space-y-1">
  <h4 className="text-sm font-medium leading-none">Below Separator</h4>
  <p className="text-sm text-muted-foreground">
    This content is below the separator.
  </p>
</div>`

  const verticalSeparatorCode = `// Vertical separator example
<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Profile</div>
  <Separator orientation="vertical" />
  <div>Settings</div>
  <Separator orientation="vertical" />
  <div>Messages</div>
  <Separator orientation="vertical" />
  <div>Logout</div>
</div>`

  const styledSeparatorCode = `// Styled separators example
<Separator className="my-4" />
<Separator className="my-4 bg-primary" />
<Separator className="my-4 bg-destructive" />

<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" className="bg-primary" />
  <div>Item 3</div>
  <Separator orientation="vertical" className="bg-destructive" />
  <div>Item 4</div>
</div>`

  const manualInstallationCode = `import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Separator</h1>
          <p className="text-xl text-muted-foreground">A visual divider between different content or sections.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                  An open-source UI component library.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
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
          <Tabs defaultValue="cli" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
            <TabsContent value="cli" className="mt-6">
              <div className="rounded-md bg-muted p-4">
                <CopyBlock text={installationCode} language="bash" showLineNumbers={false} theme={customTheme} codeBlock />
              </div>
            </TabsContent>
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

          {/* Horizontal Separator Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Horizontal Separator</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Above Separator</h4>
                    <p className="text-sm text-muted-foreground">
                      This content is above the separator.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Below Separator</h4>
                    <p className="text-sm text-muted-foreground">
                      This content is below the separator.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={horizontalSeparatorCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Vertical Separator Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Vertical Separator</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Profile</div>
                  <Separator orientation="vertical" />
                  <div>Settings</div>
                  <Separator orientation="vertical" />
                  <div>Messages</div>
                  <Separator orientation="vertical" />
                  <div>Logout</div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={verticalSeparatorCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Styled Separator Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Styled Separators</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="space-y-8"> 
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Default</p>
                    <Separator className="my-4" />
                    <p className="text-sm text-muted-foreground mb-2">Primary</p>
                    <Separator className="my-4 bg-primary" />
                    <p className="text-sm text-muted-foreground mb-2">Destructive</p>
                    <Separator className="my-4 bg-destructive" />
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vertical Styled Separators</p>
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Item 1</div>
                      <Separator orientation="vertical" />
                      <div>Item 2</div>
                      <Separator orientation="vertical" className="bg-primary" />
                      <div>Item 3</div>
                      <Separator orientation="vertical" className="bg-destructive" />
                      <div>Item 4</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={styledSeparatorCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <th className="p-3 text-left font-medium">Prop</th>
                  <th className="p-3 text-left font-medium">Type</th>
                  <th className="p-3 text-left font-medium">Default</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">orientation</td>
                  <td className="p-3 font-mono text-sm">"horizontal" | "vertical"</td>
                  <td className="p-3 font-mono text-sm">"horizontal"</td>
                  <td className="p-3">The orientation of the separator.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">decorative</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3 font-mono text-sm">true</td>
                  <td className="p-3">When true, indicates that the separator is purely decorative, meaning it doesn't represent a semantic boundary in the content. This affects the accessibility of the separator.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3">Additional CSS classes to add to the separator.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}