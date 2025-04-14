"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function CheckboxPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

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

  const installationCode = `npm i @radix-ui/react-checkbox @radix-ui/react-label`

  const usageCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`

  const disabledCode = `// Disabled state examples
<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled
  </Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="disabled-checked" disabled defaultChecked />
  <Label htmlFor="disabled-checked" className="text-muted-foreground">
    Disabled checked
  </Label>
</div>`

  const withTextCode = `// With text examples
<div className="items-top flex space-x-2">
  <Checkbox id="terms1" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms1" className="font-medium">
      Accept terms and conditions
    </Label>
    <p className="text-sm text-muted-foreground">
      You agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>

<div className="items-top flex space-x-2">
  <Checkbox id="terms2" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="terms2" className="font-medium">
      Email notifications
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about your account activity.
    </p>
  </div>
</div>`

  const sizeCode = `// Different sizes examples
<div className="flex items-center space-x-2">
  <Checkbox id="small" className="h-4 w-4" />
  <Label htmlFor="small">Small</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="default" />
  <Label htmlFor="default">Default</Label>
</div>

<div className="flex items-center space-x-2">
  <Checkbox id="large" className="h-6 w-6" />
  <Label htmlFor="large">Large</Label>
</div>`

  const manualInstallationCode = `import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }`

  const controlledCode = `// Controlled checkbox example
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ControlledCheckbox() {
  const [checked, setChecked] = useState(false)
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="controlled" 
        checked={checked} 
        onCheckedChange={setChecked}
      />
      <Label htmlFor="controlled">
        {checked ? "Checked" : "Unchecked"}
      </Label>
    </div>
  )
}`

  const groupCode = `// Checkbox group example
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxGroup() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" value="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" value="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" value="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>
  )
}`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Checkbox</h1>
          <p className="text-xl text-muted-foreground">A control that allows the user to toggle between checked and not checked.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-demo" disabled />
                    <Label htmlFor="disabled-demo" className="text-muted-foreground">
                      Disabled
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked-demo" disabled defaultChecked />
                    <Label htmlFor="disabled-checked-demo" className="text-muted-foreground">
                      Disabled checked
                    </Label>
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

          {/* With Text Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">With Text</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="terms-demo1" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms-demo1" className="font-medium">
                        Accept terms and conditions
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                  </div>
                  <div className="items-top flex space-x-2">
                    <Checkbox id="terms-demo2" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms-demo2" className="font-medium">
                        Email notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about your account activity.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={withTextCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Size Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="small-demo" className="h-4 w-4" />
                    <Label htmlFor="small-demo">Small</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="default-demo" />
                    <Label htmlFor="default-demo">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="large-demo" className="h-6 w-6" />
                    <Label htmlFor="large-demo">Large</Label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={sizeCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Controlled Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Controlled</h3>
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Card className="p-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="controlled-demo" />
                    <Label htmlFor="controlled-demo">
                      Toggle me
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    This is a simplified preview. The actual component uses React state.
                  </p>
                </Card>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={controlledCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Group Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Checkbox Group</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option1-demo" value="option1" />
                    <Label htmlFor="option1-demo">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option2-demo" value="option2" />
                    <Label htmlFor="option2-demo">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="option3-demo" value="option3" />
                    <Label htmlFor="option3-demo">Option 3</Label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={groupCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">checked</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">The controlled checked state of the checkbox.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">defaultChecked</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">The default checked state when uncontrolled.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">onCheckedChange</td>
                  <td className="p-3 font-mono text-sm">function</td>
                  <td className="p-3">Event handler called when the checked state changes.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">disabled</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">When true, prevents the user from interacting with the checkbox.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">required</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">When true, indicates that the user must check the checkbox before the owning form can be submitted.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">name</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">The name of the checkbox. Submitted with its owning form as part of a name/value pair.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">value</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">The value given as data when submitted with a name.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}