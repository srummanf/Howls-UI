"use client"

import * as React from "react"
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CollapsiblePage() {
  const [activeTab, setActiveTab] = React.useState("preview")
  const [isOpen, setIsOpen] = React.useState(false)
  const [isIconOpen, setIsIconOpen] = React.useState(false)
  const [isCustomOpen, setIsCustomOpen] = React.useState(false)
  const [isMultipleOpen1, setIsMultipleOpen1] = React.useState(false)
  const [isMultipleOpen2, setIsMultipleOpen2] = React.useState(false)

  const customTheme = {
    lineNumberColor: "var(--muted-foreground)",
    lineNumberBgColor: "var(--muted)",
    backgroundColor: "var(--muted)",
    textColor: "var(--foreground)",
    substringColor: "var(--primary)",
    keywordColor: "var(--chart-1)",
    attributeColor: "var(--chart-2)",
    selectorAttributeColor: "var(--chart-3)",
    docTagColor: "var(--chart-4)",
    nameColor: "var(--chart-5)",
    builtInColor: "var(--primary)",
    stringColor: "var(--chart-3)",
    variableColor: "var(--foreground)",
    functionColor: "var(--chart-2)",
    numberColor: "var(--chart-4)",
    commentColor: "var(--muted-foreground)",
    classnameColor: "var(--chart-5)",
    tokenColor: "var(--foreground)",
  }

  const installationCode = `npm i @radix-ui/react-collapsible`

  const usageCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full max-w-md"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @nextjs/react-collapsible
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        A React component to create collapsible sections.
      </div>
      <CollapsibleContent className="space-y-2 px-4">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          A React component to create collapsible sections.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Expands and collapses content.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`

  const iconsCode = `// With different icons examples
<Collapsible
  open={isIconOpen}
  onOpenChange={setIsIconOpen}
  className="w-full max-w-md"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      Collapsible with custom icons
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="p-0">
        {isIconOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">
    Click the icon to show more content.
  </div>
  <CollapsibleContent className="space-y-2 px-4">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      This content is now visible.
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      You can hide it by clicking the icon again.
    </div>
  </CollapsibleContent>
</Collapsible>`

  const customTriggerCode = `// Custom trigger example
<Collapsible
  open={isCustomOpen}
  onOpenChange={setIsCustomOpen}
  className="w-full max-w-md border rounded-md px-4 py-2"
>
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-semibold">
      Click anywhere on this header to toggle
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="outline" size="sm">
        {isCustomOpen ? (
          <>
            <Minus className="h-4 w-4 mr-2" />
            Hide content
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 mr-2" />
            Show content
          </>
        )}
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="mt-4 space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      This content can be toggled with the custom button above.
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      You can customize the trigger to look however you want.
    </div>
  </CollapsibleContent>
</Collapsible>`

  const multipleCode = `// Multiple collapsibles example
<div className="space-y-4">
  <Collapsible
    open={isMultipleOpen1}
    onOpenChange={setIsMultipleOpen1}
    className="w-full max-w-md border rounded-md px-4 py-2"
  >
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold">Section 1</h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm">
          {isMultipleOpen1 ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent className="mt-2 space-y-2">
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Content for section 1
      </div>
    </CollapsibleContent>
  </Collapsible>

  <Collapsible
    open={isMultipleOpen2}
    onOpenChange={setIsMultipleOpen2}
    className="w-full max-w-md border rounded-md px-4 py-2"
  >
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold">Section 2</h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm">
          {isMultipleOpen2 ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent className="mt-2 space-y-2">
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Content for section 2
      </div>
    </CollapsibleContent>
  </Collapsible>
</div>`

  const manualInstallationCode = `import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.Trigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all",
      className
    )}
    {...props}
  />
))
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }`

  const animationCode = `// In your global CSS or tailwind.config.js:

"@keyframes collapsible-down": {
  "from": { height: 0 },
  "to": { height: "var(--radix-collapsible-content-height)" }
},
"@keyframes collapsible-up": {
  "from": { height: "var(--radix-collapsible-content-height)" },
  "to": { height: 0 }
},

"animation": {
  "collapsible-down": "collapsible-down 0.2s ease-out",
  "collapsible-up": "collapsible-up 0.2s ease-out"
}`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Collapsible</h1>
          <p className="text-xl text-muted-foreground">An interactive component that expands/collapses content.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full max-w-md"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  @nextjs/react-collapsible
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-0">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                A React component to create collapsible sections.
              </div>
              <CollapsibleContent className="space-y-2 px-4">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  A React component to create collapsible sections.
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  Expands and collapses content.
                </div>
              </CollapsibleContent>
            </Collapsible>
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

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Animations</h2>
          <p className="text-muted-foreground">
            The collapsible component uses CSS animations to create smooth transitions. Add these animations to your global CSS or Tailwind configuration:
          </p>
          <div className="rounded-md bg-muted">
            <CopyBlock text={animationCode} language="typescript" showLineNumbers={true} theme={customTheme} codeBlock />
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          {/* With Icons Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">With Different Icons</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Collapsible
                  open={isIconOpen}
                  onOpenChange={setIsIconOpen}
                  className="w-full max-w-md"
                >
                  <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-sm font-semibold">
                      Collapsible with custom icons
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0">
                        {isIconOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    Click the icon to show more content.
                  </div>
                  <CollapsibleContent className="space-y-2 px-4">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      This content is now visible.
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      You can hide it by clicking the icon again.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={iconsCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Custom Trigger Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Custom Trigger</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Collapsible
                  open={isCustomOpen}
                  onOpenChange={setIsCustomOpen}
                  className="w-full max-w-md border rounded-md px-4 py-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">
                      Click anywhere on this header to toggle
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm">
                        {isCustomOpen ? (
                          <>
                            <Minus className="h-4 w-4 mr-2" />
                            Hide content
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            Show content
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="mt-4 space-y-2">
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      This content can be toggled with the custom button above.
                    </div>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                      You can customize the trigger to look however you want.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={customTriggerCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Multiple Collapsibles Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Multiple Collapsibles</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="space-y-4">
                  <Collapsible
                    open={isMultipleOpen1}
                    onOpenChange={setIsMultipleOpen1}
                    className="w-full max-w-md border rounded-md px-4 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">Section 1</h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          {isMultipleOpen1 ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="mt-2 space-y-2">
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        Content for section 1
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible
                    open={isMultipleOpen2}
                    onOpenChange={setIsMultipleOpen2}
                    className="w-full max-w-md border rounded-md px-4 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">Section 2</h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          {isMultipleOpen2 ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="mt-2 space-y-2">
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        Content for section 2
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={multipleCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">Collapsible</td>
                  <td className="p-3 font-mono text-sm">
                    <div>open?: boolean</div>
                    <div>defaultOpen?: boolean</div>
                    <div>onOpenChange?: (open: boolean) =&gt; void</div>
                    <div>disabled?: boolean</div>
                  </td>
                  <td className="p-3">The root collapsible component.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">CollapsibleTrigger</td>
                  <td className="p-3 font-mono text-sm">
                    <div>asChild?: boolean</div>
                  </td>
                  <td className="p-3">The button that toggles the collapsible.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">CollapsibleContent</td>
                  <td className="p-3 font-mono text-sm">
                    <div>forceMount?: boolean</div>
                  </td>
                  <td className="p-3">The component that contains the collapsible content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
          <p className="text-muted-foreground">
            The Collapsible component uses <code>@radix-ui/react-collapsible</code> which implements the WAI-ARIA Disclosure Pattern.
          </p>
          <div className="rounded-lg border">
            <div className="p-4">
              <h3 className="text-sm font-medium">Keyboard Interactions</h3>
              <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-px inline-block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  <span><kbd className="bg-muted px-1 text-xs rounded">Space</kbd> / <kbd className="bg-muted px-1 text-xs rounded">Enter</kbd>: Toggles the collapsible when focus is on the trigger.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}