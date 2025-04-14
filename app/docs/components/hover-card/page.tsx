"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CalendarDays } from "lucide-react"

export default function HoverCardPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm install @radix-ui/react-hover-card`

  const usageCode = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework created by Vercel
      </HoverCardContent>
    </HoverCard>
  )
}`

  const profileCardCode = `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays } from "lucide-react"

export function UserHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="text-sm font-medium underline underline-offset-4"
        >
          @srummanf
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/srummanf.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@srummanf</h4>
            <p className="text-sm">
              The creator of srummanf/ui and UI designer.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`

  const positioningCode = `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function PositioningDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="border rounded-md px-4 py-2 cursor-pointer">
            Top
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-52">
          <p className="text-sm">This card appears above the trigger.</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="border rounded-md px-4 py-2 cursor-pointer">
            Right
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-52">
          <p className="text-sm">This card appears to the right of the trigger.</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="border rounded-md px-4 py-2 cursor-pointer">
            Bottom
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" className="w-52">
          <p className="text-sm">This card appears below the trigger.</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="border rounded-md px-4 py-2 cursor-pointer">
            Left
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="left" className="w-52">
          <p className="text-sm">This card appears to the left of the trigger.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )`

  const manualInstallationCode = `import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Hover Card</h1>
          <p className="text-xl text-muted-foreground">For sighted users to preview content available behind a link.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex items-center justify-center p-8">
              <HoverCard>
                <HoverCardTrigger className="font-medium underline underline-offset-4 cursor-pointer">
                  Hover me
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@srummanf</h4>
                      <p className="text-sm">
                        The creator of srummanf/ui and UI designer.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
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

          {/* Profile Card Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Profile Card</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex items-center justify-center p-8">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a
                        href="#"
                        className="text-sm font-medium underline underline-offset-4"
                        onClick={(e) => e.preventDefault()}
                      >
                        @srummanf
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="/api/placeholder/150/150" alt="Avatar" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@srummanf</h4>
                          <p className="text-sm">
                            The creator of srummanf/ui and UI designer.
                          </p>
                          <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                              Joined December 2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={profileCardCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Positioning Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Positioning</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-wrap gap-8 p-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="border rounded-md px-4 py-2 cursor-pointer">
                        Top
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent side="top" className="w-52">
                      <p className="text-sm">This card appears above the trigger.</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="border rounded-md px-4 py-2 cursor-pointer">
                        Right
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent side="right" className="w-52">
                      <p className="text-sm">This card appears to the right of the trigger.</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="border rounded-md px-4 py-2 cursor-pointer">
                        Bottom
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent side="bottom" className="w-52">
                      <p className="text-sm">This card appears below the trigger.</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="border rounded-md px-4 py-2 cursor-pointer">
                        Left
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent side="left" className="w-52">
                      <p className="text-sm">This card appears to the left of the trigger.</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={positioningCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">HoverCard</td>
                  <td className="p-3 font-mono text-sm">
                    <div className="text-muted-foreground">openDelay?: number</div>
                    <div className="text-muted-foreground">closeDelay?: number</div>
                  </td>
                  <td className="p-3">The root component for the hover card.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">HoverCardTrigger</td>
                  <td className="p-3 font-mono text-sm">
                    <div>asChild?: boolean</div>
                  </td>
                  <td className="p-3">The trigger element that will show the hover card when hovered.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">HoverCardContent</td>
                  <td className="p-3 font-mono text-sm">
                    <div>align?: "start" | "center" | "end"</div>
                    <div>sideOffset?: number</div>
                    <div>alignOffset?: number</div>
                    <div>side?: "top" | "right" | "bottom" | "left"</div>
                  </td>
                  <td className="p-3">The content displayed when the trigger is hovered.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}