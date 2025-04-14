"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"
import { customTheme } from "@/lib/code-theme"

export default function LabelPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-label`

  const usageCode = `import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="email">Email</Label>
      <input id="email" type="email" />
    </div>
  )
}`

  const requiredCode = `// Required label example
<div className="flex flex-col space-y-2">
  <Label htmlFor="email" className="after:text-red-500 after:content-['*'] after:ml-0.5">
    Email
  </Label>
  <input id="email" type="email" className="border rounded p-2" />
</div>`

  const colorCode = `// Different colors example
<div className="flex flex-col space-y-2">
  <Label htmlFor="name1">Default</Label>
  <input id="name1" type="text" className="border rounded p-2" />
</div>

<div className="flex flex-col space-y-2">
  <Label htmlFor="name2" className="text-primary">Primary Color</Label>
  <input id="name2" type="text" className="border rounded p-2" />
</div>

<div className="flex flex-col space-y-2">
  <Label htmlFor="name3" className="text-destructive">Error Color</Label>
  <input id="name3" type="text" className="border rounded p-2" />
</div>`

  const manualInstallationCode = `import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Label</h1>
          <p className="text-xl text-muted-foreground">Renders an accessible label associated with controls.</p>
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
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
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

          {/* Required Label Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Required Label</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col space-y-2 max-w-sm">
                  <Label htmlFor="email-required" className="after:text-red-500 after:content-['*'] after:ml-0.5">
                    Email
                  </Label>
                  <input 
                    id="email-required" 
                    type="email" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                  />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={requiredCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Color Variations Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Different Colors</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name1">Default</Label>
                    <input 
                      id="name1" 
                      type="text" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name2" className="text-primary">Primary Color</Label>
                    <input 
                      id="name2" 
                      type="text" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name3" className="text-destructive">Error Color</Label>
                    <input 
                      id="name3" 
                      type="text" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={colorCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">Label</td>
                  <td className="p-3 font-mono text-sm">
                    LabelPrimitive.LabelProps<br />
                    <span className="text-muted-foreground">htmlFor: string</span><br />
                  </td>
                  <td className="p-3">The label component with an optional htmlFor attribute to associate it with a form control.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}