"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"

export default function SliderPage() {
  const [activeTab, setActiveTab] = React.useState("preview")
  const [value, setValue] = React.useState([50])

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

  const installationCode = `npm i @radix-ui/react-slider`

  const usageCode = `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} />
}`

  const orientationCode = `// Orientation examples
<div className="space-y-8">
  <div>
    <p className="text-sm text-muted-foreground mb-2">Horizontal (default)</p>
    <Slider defaultValue={[50]} max={100} step={1} />
  </div>
  <div>
    <p className="text-sm text-muted-foreground mb-2">Vertical</p>
    <div className="h-60">
      <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
    </div>
  </div>
</div>`

  const rangeCode = `// Range examples
<div className="space-y-8">
  <div>
    <p className="text-sm text-muted-foreground mb-2">Single Value</p>
    <Slider defaultValue={[50]} max={100} step={1} />
  </div>
  <div>
    <p className="text-sm text-muted-foreground mb-2">Range</p>
    <Slider defaultValue={[25, 75]} max={100} step={1} />
  </div>
  <div>
    <p className="text-sm text-muted-foreground mb-2">Multiple Values</p>
    <Slider defaultValue={[10, 30, 60, 90]} max={100} step={1} />
  </div>
</div>`

  const disabledCode = `// Disabled example
<Slider defaultValue={[50]} max={100} step={1} disabled />`

  const manualInstallationCode = `import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      props.orientation === "vertical" 
        ? "h-full flex-col justify-end" 
        : "h-5 flex-row",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        "relative grow overflow-hidden rounded-full bg-secondary",
        props.orientation === "vertical" ? "h-full w-1.5" : "h-1.5 w-full"
      )}
    >
      <SliderPrimitive.Range className="absolute bg-primary rounded-full h-full" />
    </SliderPrimitive.Track>
    {props.defaultValue?.map((_, i) => (
      <SliderPrimitive.Thumb
        key={i}
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Slider</h1>
          <p className="text-xl text-muted-foreground">An input component for selecting a value from a range.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex flex-col space-y-6 w-full max-w-lg">
              <Slider 
                value={value} 
                onValueChange={setValue} 
                max={100} 
                step={1} 
                className="w-full" 
              />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
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

          {/* Orientation Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Orientation</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Horizontal (default)</p>
                    <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Vertical</p>
                    <div className="h-60">
                      <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={orientationCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Range Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Range Selection</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="space-y-8 w-full max-w-lg">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Single Value</p>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Range</p>
                    <Slider defaultValue={[25, 75]} max={100} step={1} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Multiple Values</p>
                    <Slider defaultValue={[10, 30, 60, 90]} max={100} step={1} />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={rangeCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Disabled Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Disabled</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-lg">
                  <Slider defaultValue={[50]} max={100} step={1} disabled />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={disabledCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">defaultValue</td>
                  <td className="p-3 font-mono text-sm">number[]</td>
                  <td className="p-3">The default value of the slider (uncontrolled).</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">value</td>
                  <td className="p-3 font-mono text-sm">number[]</td>
                  <td className="p-3">The controlled value of the slider.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">onValueChange</td>
                  <td className="p-3 font-mono text-sm">function</td>
                  <td className="p-3">Event handler called when the value changes.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">min</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">The minimum value for the range. Defaults to 0.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">max</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">The maximum value for the range. Defaults to 100.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">step</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">The step interval between values. Defaults to 1.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">orientation</td>
                  <td className="p-3 font-mono text-sm">"horizontal" | "vertical"</td>
                  <td className="p-3">The orientation of the slider. Defaults to "horizontal".</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">disabled</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">When true, prevents the user from interacting with the slider.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}