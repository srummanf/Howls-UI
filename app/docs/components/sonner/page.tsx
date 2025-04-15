"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

export default function SonnerPage() {
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

  const installationCode = `npm install sonner`

  const usageCode = `import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created')}
    >
      Show Toast
    </Button>
  )
}`

  const providerCode = `// In your layout.tsx or root component
import { Toaster } from "sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`

  const toastTypesCode = `// Different toast types
// Default toast
toast('Event has been created')

// Success toast
toast.success('Event has been created')

// Error toast
toast.error('Event could not be created')

// Loading toast
toast.loading('Creating event...')

// Promise toast
toast.promise(saveEvent(), {
  loading: 'Creating event...',
  success: 'Event has been created',
  error: 'Event could not be created',
})`

  const customizationCode = `// Custom toast options
toast('Event has been created', {
  description: 'Your event has been successfully created.',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  },
  duration: 5000,
  position: 'top-center',
})`

  const toasterCustomizationCode = `// Custom Toaster configuration
<Toaster
  position="top-right" 
  richColors 
  theme="dark"
  closeButton
  toastOptions={{
    duration: 3000,
    className: "my-toast-class",
  }}
/>`

  const manualInstallationCode = `// ui/toast.tsx
import { toast as sonnerToast, ToastT, Toaster as SonnerToaster } from "sonner"

import { cn } from "@/lib/utils"

type ToasterProps = React.ComponentProps<typeof SonnerToaster>

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <SonnerToaster
      className={cn(className)}
      toastOptions={{
        classNames: {
          toast: "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          description: "text-sm opacity-90",
          actionButton: "group inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
          cancelButton: "group inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        },
      }}
      {...props}
    />
  )
}

// Helper functions for different types of toasts
type Toast = typeof sonnerToast

const toast: Toast & {
  success: (message: string, data?: ToastT) => void
  error: (message: string, data?: ToastT) => void
  warning: (message: string, data?: ToastT) => void
  info: (message: string, data?: ToastT) => void
} = Object.assign(
  sonnerToast,
  {
    success: (message: string, data?: ToastT) => sonnerToast(message, { ...data, className: cn('bg-green-50 text-green-900 dark:bg-green-900 dark:text-green-50', data?.className) }),
    error: (message: string, data?: ToastT) => sonnerToast(message, { ...data, className: cn('bg-red-50 text-red-900 dark:bg-red-900 dark:text-red-50', data?.className) }),
    warning: (message: string, data?: ToastT) => sonnerToast(message, { ...data, className: cn('bg-yellow-50 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-50', data?.className) }),
    info: (message: string, data?: ToastT) => sonnerToast(message, { ...data, className: cn('bg-blue-50 text-blue-900 dark:bg-blue-900 dark:text-blue-50', data?.className) }),
  }
)

export { toast, Toaster }`

  const showToast = () => {
    toast('This is a demonstration toast')
  }

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Sonner</h1>
          <p className="text-xl text-muted-foreground">An opinionated toast component for React with beautiful defaults.</p>
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
              <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                      description: "Sunday, December 03, 2023 at 9:00 AM",
                      action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                      },
                    })
                  }
              >
                Show Toast
              </Button>
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
          <div className="space-y-4">
            <h3 className="text-lg font-medium">1. Add the Toaster component to your app</h3>
            <div className="rounded-md bg-muted">
              <CopyBlock text={providerCode} language="typescript" showLineNumbers={true} theme={customTheme} codeBlock />
            </div>
            
            <h3 className="text-lg font-medium mt-6">2. Use toast function to display notifications</h3>
            <div className="rounded-md bg-muted">
              <CopyBlock text={usageCode} language="typescript" showLineNumbers={true} theme={customTheme} codeBlock />
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Examples</h2>

          {/* Toast Types Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Toast Types</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() =>
                        toast("Event has been created", {
                          description: "Sunday, December 03, 2023 at 9:00 AM",
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      }
                  >
                    Default
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => toast.success('Success toast')}
                  >
                    Success
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => toast.error('Error toast')}
                  >
                    Error
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => toast.loading('Loading...')}
                  >
                    Loading
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={toastTypesCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Custom Toast Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Custom Toast Options</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => toast('Event created', {
                      description: 'Your event has been successfully created.',
                      action: {
                        label: 'Undo',
                        onClick: () => console.log('Undo clicked')
                      }
                    })}
                  >
                    With Description & Action
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={customizationCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Toaster Customization */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Toaster Customization</h3>
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={toasterCustomizationCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          
          {/* Toast Function Props */}
          <div>
            <h3 className="text-lg font-medium mb-4">toast() Function Options</h3>
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
                    <td className="p-3 font-mono text-sm">description</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3">Additional description text for the toast.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">duration</td>
                    <td className="p-3 font-mono text-sm">number</td>
                    <td className="p-3">Duration in milliseconds for the toast to remain visible.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">icon</td>
                    <td className="p-3 font-mono text-sm">ReactNode</td>
                    <td className="p-3">Custom icon to display in the toast.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">action</td>
                    <td className="p-3 font-mono text-sm">&lbrace; label: string, onClick: () =&gt; void &rbrace;</td>
                    <td className="p-3">Action button configuration for the toast.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">cancel</td>
                    <td className="p-3 font-mono text-sm">&lbrace; label: string, onClick?: () =&gt; void </td>
                    <td className="p-3">Cancel button configuration.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">dismissible</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3">Whether the toast can be dismissed by clicking.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">className</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3">Custom CSS class for the toast.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Toaster Component Props */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Toaster Component Props</h3>
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
                    <td className="p-3 font-mono text-sm">position</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3 font-mono text-sm">'bottom-right'</td>
                    <td className="p-3">Position of toasts on the screen.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">theme</td>
                    <td className="p-3 font-mono text-sm">'light' | 'dark' | 'system'</td>
                    <td className="p-3 font-mono text-sm">'system'</td>
                    <td className="p-3">Color theme for the toasts.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">richColors</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3">Whether to use rich colors for different toast types.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">closeButton</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3">Whether to show a close button on toasts.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">toastOptions</td>
                    <td className="p-3 font-mono text-sm">object</td>
                    <td className="p-3 font-mono text-sm">{}</td>
                    <td className="p-3">Default options for all toasts.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">offset</td>
                    <td className="p-3 font-mono text-sm">number | string</td>
                    <td className="p-3 font-mono text-sm">32</td>
                    <td className="p-3">Offset from the edges of the screen.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-mono text-sm">expand</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3">Whether toasts expand to fill the available width.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}