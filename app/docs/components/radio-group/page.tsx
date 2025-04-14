"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock} from "react-code-blocks"
import { customTheme } from "@/lib/code-theme"

export default function RadioGroupPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-radio-group`

  const usageCode = `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`

  const disabledCode = `// Disabled examples
<RadioGroup disabled defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="d1" />
    <Label htmlFor="d1">Disabled Group Item 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="d2" />
    <Label htmlFor="d2">Disabled Group Item 2</Label>
  </div>
</RadioGroup>

// Disable single item
<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="ds1" />
    <Label htmlFor="ds1">Enabled Item</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem disabled value="comfortable" id="ds2" />
    <Label htmlFor="ds2" className="text-muted-foreground">Disabled Item</Label>
  </div>
</RadioGroup>`

  const customSizeCode = `// Size variations examples
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="sm1" className="h-4 w-4" />
    <Label htmlFor="sm1">Small</Label>
  </div>
</RadioGroup>

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="md1" />
    <Label htmlFor="md1">Default (Medium)</Label>
  </div>
</RadioGroup>

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="lg1" className="h-6 w-6" />
    <Label htmlFor="lg1">Large</Label>
  </div>
</RadioGroup>`

  const customLayoutCode = `// Horizontal layout example
<RadioGroup defaultValue="option-one" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="h1" />
    <Label htmlFor="h1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="h2" />
    <Label htmlFor="h2">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="h3" />
    <Label htmlFor="h3">Option Three</Label>
  </div>
</RadioGroup>`

  const manualInstallationCode = `import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-5 w-5 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Radio Group</h1>
          <p className="text-xl text-muted-foreground">A set of checkable buttons where only one can be checked at a time.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex flex-col items-start gap-4">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
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

          {/* Disabled Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Disabled</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disabled Group</p>
                    <RadioGroup disabled defaultValue="comfortable">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="d1" />
                        <Label htmlFor="d1">Disabled Group Item 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="d2" />
                        <Label htmlFor="d2">Disabled Group Item 2</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disabled Item</p>
                    <RadioGroup defaultValue="comfortable">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="ds1" />
                        <Label htmlFor="ds1">Enabled Item</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem disabled value="comfortable" id="ds2" />
                        <Label htmlFor="ds2" className="text-muted-foreground">Disabled Item</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={disabledCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Size variations Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Custom Sizes</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Small</p>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="sm1" className="h-4 w-4" />
                        <Label htmlFor="sm1">Small</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Default (Medium)</p>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="md1" />
                        <Label htmlFor="md1">Default (Medium)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Large</p>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="lg1" className="h-6 w-6" />
                        <Label htmlFor="lg1">Large</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={customSizeCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Layout Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Custom Layout</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Horizontal Layout</p>
                    <RadioGroup defaultValue="option-one" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="h1" />
                        <Label htmlFor="h1">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="h2" />
                        <Label htmlFor="h2">Option Two</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="h3" />
                        <Label htmlFor="h3">Option Three</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={customLayoutCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">RadioGroup</td>
                  <td className="p-3 font-mono text-sm">
                    RadioGroupPrimitive.RadioGroupProps<br />
                    <span className="text-muted-foreground">defaultValue?: string</span><br />
                    <span className="text-muted-foreground">value?: string</span><br />
                    <span className="text-muted-foreground">onValueChange?: (value: string) =&gt; void</span><br />
                    <span className="text-muted-foreground">disabled?: boolean</span>
                  </td>
                  <td className="p-3">The root component for the radio group.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">RadioGroupItem</td>
                  <td className="p-3 font-mono text-sm">
                    RadioGroupPrimitive.RadioGroupItemProps<br />
                    <span className="text-muted-foreground">value: string</span><br />
                    <span className="text-muted-foreground">disabled?: boolean</span><br />
                    <span className="text-muted-foreground">required?: boolean</span><br />
                    <span className="text-muted-foreground">id?: string</span>
                  </td>
                  <td className="p-3">An individual radio item within the group.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
          <p>The Radio Group component adheres to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/" className="font-medium underline underline-offset-4">WAI-ARIA Radio Group Pattern</a>.</p>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left font-medium">Key</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Tab</td>
                  <td className="p-3">Moves focus to the radio group.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Space</td>
                  <td className="p-3">When focus is on an unchecked radio item, checks it.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Arrow Down/Right</td>
                  <td className="p-3">Moves focus to the next radio item in the group.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Arrow Up/Left</td>
                  <td className="p-3">Moves focus to the previous radio item in the group.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}