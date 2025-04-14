"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Mail, Eye, EyeOff } from "lucide-react"

export default function InputPage() {
  const [activeTab, setActiveTab] = React.useState("preview")
  const [showPassword, setShowPassword] = React.useState(false)

  const installationCode = `npm install @radix-ui/react-label`

  const usageCode = `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="text" placeholder="Email" />
}`

  const labelsCode = `import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`

  const iconsCode = `import { Input } from "@/components/ui/input"
import { Search, Mail } from "lucide-react"

export function InputWithIcon() {
  return (
    <div className="grid gap-4">
      {/* Leading Icon */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-9" />
      </div>
      
      {/* Trailing Icon */}
      <div className="relative">
        <Input placeholder="Email" className="pr-9" />
        <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  )
}`

  const passwordInputCode = `import * as React from "react"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false)
  
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="pr-9"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </button>
    </div>
  )
}`

  const inputSizesCode = `import { Input } from "@/components/ui/input"

export function InputSizes() {
  return (
    <div className="grid gap-4">
      <Input placeholder="Small input" className="h-8 text-sm" />
      <Input placeholder="Default input" />
      <Input placeholder="Large input" className="h-12 text-lg" />
      <Input placeholder="Full width input" className="w-full" />
    </div>
  )
}`

  const statesCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputStates() {
  return (
    <div className="grid gap-6">
      {/* Disabled */}
      <div className="grid gap-1.5">
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" placeholder="Disabled input" disabled />
      </div>

      {/* With error */}
      <div className="grid gap-1.5">
        <Label htmlFor="error" className="text-destructive">Error</Label>
        <Input
          id="error"
          placeholder="Error input"
          className="border-destructive"
        />
        <p className="text-sm text-destructive">This field is required.</p>
      </div>

      {/* Read-only */}
      <div className="grid gap-1.5">
        <Label htmlFor="readonly">Read-only</Label>
        <Input
          id="readonly"
          placeholder="Read-only input"
          value="Read-only value"
          readOnly
        />
      </div>
    </div>
  )
}`

  const manualInstallationCode = `import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Input</h1>
          <p className="text-xl text-muted-foreground">Displays a form input field or a component that looks like an input field.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="w-full max-w-sm">
              <Input type="text" placeholder="Email" />
            </div>
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

          {/* With Label */}
          <div>
            <h3 className="text-lg font-medium mb-4">With Label</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-sm p-6 border rounded-lg">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={labelsCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* With Icons */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">With Icons</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-sm p-6 border rounded-lg">
                  <div className="grid gap-4">
                    {/* Leading Icon */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search..." className="pl-9" />
                    </div>
                    
                    {/* Trailing Icon */}
                    <div className="relative">
                      <Input placeholder="Email" className="pr-9" />
                      <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={iconsCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Password Input */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Password Input</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-sm p-6 border rounded-lg">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="pr-9"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={passwordInputCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Input Sizes */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Input Sizes</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-md p-6 border rounded-lg">
                  <div className="grid gap-4">
                    <Input placeholder="Small input" className="h-8 text-sm" />
                    <Input placeholder="Default input" />
                    <Input placeholder="Large input" className="h-12 text-lg" />
                    <Input placeholder="Full width input" className="w-full" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={inputSizesCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Input States */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Input States</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="w-full max-w-md p-6 border rounded-lg">
                  <div className="grid gap-6">
                    {/* Disabled */}
                    <div className="grid gap-1.5">
                      <Label htmlFor="disabled">Disabled</Label>
                      <Input id="disabled" placeholder="Disabled input" disabled />
                    </div>

                    {/* With error */}
                    <div className="grid gap-1.5">
                      <Label htmlFor="error" className="text-destructive">Error</Label>
                      <Input
                        id="error"
                        placeholder="Error input"
                        className="border-destructive"
                      />
                      <p className="text-sm text-destructive">This field is required.</p>
                    </div>

                    {/* Read-only */}
                    <div className="grid gap-1.5">
                      <Label htmlFor="readonly">Read-only</Label>
                      <Input
                        id="readonly"
                        placeholder="Read-only input"
                        value="Read-only value"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={statesCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">type</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">The type of the input field.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">placeholder</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">The placeholder text for the input.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">disabled</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">Whether the input is disabled.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">readOnly</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">Makes the input read-only.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3">Additional CSS classes to apply to the input.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">...props</td>
                  <td className="p-3 font-mono text-sm">InputHTMLAttributes</td>
                  <td className="p-3">All standard input HTML attributes are supported.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Accessibility</h2>
          <div className="text-muted-foreground">
            <p>The input component is built on top of the native HTML <code className="font-mono">input</code> element and supports all of its accessibility features.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Always use the <code className="font-mono">Label</code> component with inputs for proper accessibility.</li>
              <li>Use <code className="font-mono">aria-describedby</code> to associate helper or error text with the input.</li>
              <li>Use appropriate <code className="font-mono">type</code> attributes for different input types (e.g., email, password).</li>
              <li>Add <code className="font-mono">aria-invalid="true"</code> to inputs with validation errors.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}