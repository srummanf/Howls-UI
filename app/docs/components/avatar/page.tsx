"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"

export default function AvatarPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-avatar`

  const usageCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`

const fallbackCode = `// With fallback examples
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </AvatarFallback>
</Avatar>`

  const sizeCode = `// Different sizes examples
<Avatar className="h-8 w-8">
  <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
  <AvatarFallback>XL</AvatarFallback>
</Avatar>`

  const manualInstallationCode = `import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Avatar</h1>
          <p className="text-xl text-muted-foreground">An image element with a fallback for representing the user.</p>
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
              <Avatar>
                <AvatarImage src="/images/bg-2.jpg" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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

          {/* Fallback Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">With Fallback</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Initial Fallback</p>
                    <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Custom Color</p>
                    <Avatar><AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback></Avatar>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">With Icon</p>
                    <Avatar>
                      <AvatarFallback>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={fallbackCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Small</p>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Default</p>
                    <Avatar>
                      <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Large</p>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Extra Large</p>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                      <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={sizeCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">Avatar</td>
                  <td className="p-3 font-mono text-sm">AvatarPrimitive.AvatarProps</td>
                  <td className="p-3">The root component for the avatar.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">AvatarImage</td>
                  <td className="p-3 font-mono text-sm">
                    AvatarPrimitive.AvatarImageProps<br />
                    <span className="text-muted-foreground">src: string</span><br />
                    <span className="text-muted-foreground">alt: string</span>
                  </td>
                  <td className="p-3">The image displayed in the avatar.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">AvatarFallback</td>
                  <td className="p-3 font-mono text-sm">AvatarPrimitive.AvatarFallbackProps</td>
                  <td className="p-3">The fallback element displayed when the image fails to load.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}