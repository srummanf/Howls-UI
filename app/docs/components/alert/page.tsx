"use client";

import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock } from "react-code-blocks";
import { InfoIcon } from "lucide-react";

export default function AlertPage() {
  const [activeTab, setActiveTab] = React.useState("preview");

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
  };

  const installationCode = `npx shadcn@latest add alert`;

  const usageCode = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`;

  const manualInstallationCode = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }`;

  const variantCode = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TerminalIcon } from "lucide-react"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <TerminalIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Alert
          </h1>
          <p className="text-xl text-muted-foreground">
            Displays a callout for user attention.
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
            <Alert className="max-w-md">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={usageCode}
                language="typescript"
                showLineNumbers={true}
                theme={customTheme}
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
                  theme={customTheme}
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
            <CopyBlock
              text={usageCode}
              language="typescript"
              showLineNumbers={true}
              theme={customTheme}
              codeBlock
            />
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          <div>
            <h3 className="text-lg font-medium mb-4">Destructive</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-6">
                <Alert variant="destructive" className="max-w-md">
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="code" className="mt-6">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={variantCode}
                    language="typescript"
                    showLineNumbers={true}
                    theme={customTheme}
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
                  <th className="p-3 text-left font-medium">Component</th>
                  <th className="p-3 text-left font-medium">Props</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Alert</td>
                  <td className="p-3 font-mono text-sm">
                    HTMLDivElement & VariantProps
                    <br />
                    <span className="text-muted-foreground">
                      variant?: "default" | "destructive"
                    </span>
                  </td>
                  <td className="p-3">
                    The alert container that provides context and styling.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">AlertTitle</td>
                  <td className="p-3 font-mono text-sm">HTMLHeadingElement</td>
                  <td className="p-3">
                    The title displayed at the top of the alert.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">AlertDescription</td>
                  <td className="p-3 font-mono text-sm">
                    HTMLParagraphElement
                  </td>
                  <td className="p-3">
                    The description providing more detail about the alert.
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
