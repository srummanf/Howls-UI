"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp"

export default function InputOTPPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-slot input-otp`

  const usageCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`

  const patternCode = `// With pattern
<InputOTP pattern="^[0-9]+$" maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

// With alphanumeric pattern
<InputOTP pattern="^[a-zA-Z0-9]+$" maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

// With custom separator
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <span className="flex items-center text-muted-foreground">-</span>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`

  const styleCode = `// Different styles
<InputOTP maxLength={4} className="gap-2">
  <InputOTPGroup>
    <InputOTPSlot index={0} className="rounded-md border" />
    <InputOTPSlot index={1} className="rounded-md border" />
    <InputOTPSlot index={2} className="rounded-md border" />
    <InputOTPSlot index={3} className="rounded-md border" />
  </InputOTPGroup>
</InputOTP>

<InputOTP maxLength={4} className="gap-2">
  <InputOTPGroup>
    <InputOTPSlot index={0} className="rounded-full border bg-muted" />
    <InputOTPSlot index={1} className="rounded-full border bg-muted" />
    <InputOTPSlot index={2} className="rounded-full border bg-muted" />
    <InputOTPSlot index={3} className="rounded-full border bg-muted" />
  </InputOTPGroup>
</InputOTP>

<InputOTP maxLength={4} className="gap-2">
  <InputOTPGroup>
    <InputOTPSlot 
      index={0} 
      className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
    />
    <InputOTPSlot 
      index={1} 
      className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
    />
    <InputOTPSlot 
      index={2} 
      className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
    />
    <InputOTPSlot 
      index={3} 
      className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
    />
  </InputOTPGroup>
</InputOTP>`

  const manualInstallationCode = `import * as React from "react"
import { createContext, forwardRef, useContext, useId } from "react"
import { Slot } from "@radix-ui/react-slot"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"

const InputOTP = forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-1 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] || {
    char: "",
    hasFakeCaret: false,
    isActive: false,
  }

  const id = useId()
  
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
      <input
        type="text"
        pattern="[0-9]*"
        className="absolute inset-0 h-full w-full opacity-0"
        inputMode="numeric"
        autoComplete="one-time-code"
        tabIndex={-1}
      />
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

export { InputOTP, InputOTPGroup, InputOTPSlot }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Input OTP</h1>
          <p className="text-xl text-muted-foreground">An input component for one-time password (OTP) entry.</p>
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
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
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

          {/* Pattern Examples */}
          <div>
            <h3 className="text-lg font-medium mb-4">With Pattern Validation</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Numeric Only (0-9)</p>
                    <InputOTP pattern="^[0-9]+$" maxLength={4}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Alphanumeric (a-z, A-Z, 0-9)</p>
                    <InputOTP pattern="^[a-zA-Z0-9]+$" maxLength={4}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">With Custom Separator</p>
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <span className="flex items-center text-muted-foreground">-</span>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={patternCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Styles Examples */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Different Styles</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Rounded Corners</p>
                    <InputOTP maxLength={4} className="gap-2">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="rounded-md border" />
                        <InputOTPSlot index={1} className="rounded-md border" />
                        <InputOTPSlot index={2} className="rounded-md border" />
                        <InputOTPSlot index={3} className="rounded-md border" />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Circular with Background</p>
                    <InputOTP maxLength={4} className="gap-2">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="rounded-full border bg-muted" />
                        <InputOTPSlot index={1} className="rounded-full border bg-muted" />
                        <InputOTPSlot index={2} className="rounded-full border bg-muted" />
                        <InputOTPSlot index={3} className="rounded-full border bg-muted" />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Underline Style</p>
                    <InputOTP maxLength={4} className="gap-2">
                      <InputOTPGroup>
                        <InputOTPSlot 
                          index={0} 
                          className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
                        />
                        <InputOTPSlot 
                          index={1} 
                          className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
                        />
                        <InputOTPSlot 
                          index={2} 
                          className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
                        />
                        <InputOTPSlot 
                          index={3} 
                          className="border-b-2 border-primary rounded-none focus-within:border-b-4" 
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={styleCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">InputOTP</td>
                  <td className="p-3 font-mono text-sm">
                    <span className="text-muted-foreground">maxLength: number</span><br />
                    <span className="text-muted-foreground">pattern?: string</span><br />
                    <span className="text-muted-foreground">containerClassName?: string</span>
                  </td>
                  <td className="p-3">The root component for the OTP input. Manages the state of the OTP.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">InputOTPGroup</td>
                  <td className="p-3 font-mono text-sm">className?: string</td>
                  <td className="p-3">Groups the individual OTP input slots. Adds spacing and alignment.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">InputOTPSlot</td>
                  <td className="p-3 font-mono text-sm">
                    <span className="text-muted-foreground">index: number</span><br />
                    <span className="text-muted-foreground">className?: string</span>
                  </td>
                  <td className="p-3">Individual input slot for a single character. The index prop is required and must match the position.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}