"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock, dracula } from "react-code-blocks";

export default function ProgressPage() {
  const [activeTab, setActiveTab] = React.useState("preview");
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const installationCode = `npm i @radix-ui/react-progress`;

  const usageCode = `import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`;

  const colorCode = `// Custom colors examples
<Progress value={50} className="w-[60%]" />

<Progress 
  value={50} 
  className="w-[60%] bg-blue-200" 
  indicatorClassName="bg-blue-600" 
/>

<Progress 
  value={50} 
  className="w-[60%] bg-red-200" 
  indicatorClassName="bg-red-600" 
/>

<Progress 
  value={50} 
  className="w-[60%] bg-green-200" 
  indicatorClassName="bg-green-600" 
/>`;

  const sizeCode = `// Different sizes examples
<Progress value={50} className="w-[60%] h-2" />

<Progress value={50} className="w-[60%] h-4" />

<Progress value={50} className="w-[60%] h-6" />

<Progress value={50} className="w-[60%] h-8" />`;

  const indeterminateCode = `// Indeterminate example
import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function IndeterminateDemo() {
  return (
    <Progress className="w-[60%]" />
  )
}`;

  const manualInstallationCode = `import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string
  }
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all",
        indicatorClassName
      )}
      style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Progress
          </h1>
          <p className="text-xl text-muted-foreground">
            Displays an indicator showing the completion progress of a task.
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
            <div className="flex flex-col items-start gap-4">
              <Progress value={progress} className="w-[60%]" />
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={usageCode}
                language="typescript"
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
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
                <CopyBlock
                  text={installationCode}
                  language="bash"
                  showLineNumbers={false}
                  theme={dracula}
                  codeBlock
                />
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
            <CopyBlock
              text={usageCode}
              language="typescript"
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          {/* Color variations Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Custom Colors</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Default
                    </p>
                    <Progress value={50} className="w-[60%]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Blue</p>
                    <Progress value={50} className="w-[60%] bg-blue-200" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Red</p>
                    <Progress value={50} className="w-[60%] bg-red-200" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Green</p>
                    <Progress value={50} className="w-[60%] bg-green-200" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={colorCode}
                    language="tsx"
                    showLineNumbers
                    theme={dracula}
                    codeBlock
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Size variations Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Small (h-2)
                    </p>
                    <Progress value={50} className="w-[60%] h-2" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Default (h-4)
                    </p>
                    <Progress value={50} className="w-[60%] h-4" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Large (h-6)
                    </p>
                    <Progress value={50} className="w-[60%] h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Extra Large (h-8)
                    </p>
                    <Progress value={50} className="w-[60%] h-8" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={sizeCode}
                    language="tsx"
                    showLineNumbers
                    theme={dracula}
                    codeBlock
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Indeterminate Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Indeterminate</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Loading State
                    </p>
                    <Progress className="w-[60%]" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={indeterminateCode}
                    language="tsx"
                    showLineNumbers
                    theme={dracula}
                    codeBlock
                  />
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
                  <th className="p-3 text-left font-medium">Name</th>
                  <th className="p-3 text-left font-medium">Type</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">value</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">
                    The value of the progress indicator (0-100). Omit to make
                    the progress indeterminate.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">
                    Additional CSS classes for the root element.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">indicatorClassName</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">
                    Additional CSS classes for the indicator element.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">max</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">
                    The maximum value for the progress indicator (defaults to
                    100).
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">...rest</td>
                  <td className="p-3 font-mono text-sm">
                    ProgressPrimitive.ProgressProps
                  </td>
                  <td className="p-3">
                    Other props passed to the Radix UI Progress component.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
          <p>
            The Progress component adheres to the{" "}
            <a
              href="https://www.w3.org/WAI/ARIA/apg/patterns/meter/"
              className="font-medium underline underline-offset-4"
            >
              WAI-ARIA meter pattern
            </a>
            .
          </p>
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
                  <td className="p-3 font-mono text-sm">role</td>
                  <td className="p-3">
                    Automatically set to <code>progressbar</code>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">aria-valuemin</td>
                  <td className="p-3">Set to 0</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">aria-valuemax</td>
                  <td className="p-3">Set to the max value (default 100)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">aria-valuenow</td>
                  <td className="p-3">
                    Set to the current value (or removed when indeterminate)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">aria-valuetext</td>
                  <td className="p-3">
                    Optional text representation of the value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
