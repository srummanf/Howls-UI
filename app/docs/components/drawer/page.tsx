"use client";

import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock, dracula } from "react-code-blocks";

export default function DrawerPage() {
  const [activeTab, setActiveTab] = React.useState("preview");
  const [goal, setGoal] = React.useState(350);

  const installationCode = `npm i vaul`;

  const usageCode = `import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <p className="text-center text-sm text-muted-foreground">
            This drawer component uses Vaul behind the scenes.
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`;

  const drawerWithComponentsCode = `import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerWithComponents() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily movement goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.max(200, goal - 10))}
                disabled={goal <= 200}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">{goal}</div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setGoal(Math.min(600, goal + 10))}
                disabled={goal >= 600}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`;

  const positionCode = `import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

export function DrawerPosition() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline">Top</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <p className="p-5 text-center">Top drawer content</p>
          </div>
        </DrawerContent>
      </Drawer>
      
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Bottom (Default)</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <p className="p-5 text-center">Bottom drawer content</p>
          </div>
        </DrawerContent>
      </Drawer>
      
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline">Left</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-full p-5">
            <p>Left drawer content</p>
          </div>
        </DrawerContent>
      </Drawer>
      
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">Right</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-full p-5">
            <p>Right drawer content</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}`;

  const manualInstallationCode = `import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Drawer
          </h1>
          <p className="text-xl text-muted-foreground">
            A panel that slides out from the edge of the screen. A replacement
            for dialog on mobile and tablet.
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
            <div className="flex items-center space-x-4">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Basic Drawer</DrawerTitle>
                      <DrawerDescription>
                        This drawer slides in from the bottom of the screen.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <p className="text-center text-muted-foreground">
                        This drawer component uses Vaul behind the scenes.
                      </p>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
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

          {/* With Components Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">With Components</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-wrap gap-4">
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>Move Goal</DrawerTitle>
                          <DrawerDescription>
                            Set your daily movement goal.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <div className="flex items-center justify-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => setGoal(Math.max(200, goal - 10))}
                              disabled={goal <= 200}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                              <div className="text-7xl font-bold tracking-tighter">
                                {goal}
                              </div>
                              <div className="text-[0.70rem] uppercase text-muted-foreground">
                                Calories/day
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 shrink-0 rounded-full"
                              onClick={() => setGoal(Math.min(600, goal + 10))}
                              disabled={goal >= 600}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                        </div>
                        <DrawerFooter>
                          <Button>Submit</Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={drawerWithComponentsCode}
                    language="tsx"
                    showLineNumbers
                    theme={dracula}
                    codeBlock
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Different Positions Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Different Positions</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="grid grid-cols-2 gap-2">
                  <Drawer direction="top">
                    <DrawerTrigger asChild>
                      <Button variant="outline">Top</Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-6 text-center">
                      This drawer slides from the top.
                    </DrawerContent>
                  </Drawer>

                  <Drawer direction="bottom">
                    <DrawerTrigger asChild>
                      <Button variant="outline">Bottom (Default)</Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-6 text-center">
                      This drawer slides from the bottom.
                    </DrawerContent>
                  </Drawer>

                  <Drawer direction="left">
                    <DrawerTrigger asChild>
                      <Button variant="outline">Left</Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-6 text-center">
                      This drawer slides from the left.
                    </DrawerContent>
                  </Drawer>

                  <Drawer direction="right">
                    <DrawerTrigger asChild>
                      <Button variant="outline">Right</Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-6 text-center">
                      This drawer slides from the right.
                    </DrawerContent>
                  </Drawer>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Note: The drawer will open from the direction specified. For
                  example, "Top" means the drawer will slide down from the top
                  of the screen.
                </p>
              </TabsContent>

              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock
                    text={positionCode}
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
                  <th className="p-3 text-left font-medium">Component</th>
                  <th className="p-3 text-left font-medium">Props</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Drawer</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.RootProps
                    <br />
                    <span className="text-muted-foreground">
                      shouldScaleBackground?: boolean
                    </span>
                    <br />
                    <span className="text-muted-foreground">
                      direction?: 'top' | 'bottom' | 'left' | 'right'
                    </span>
                  </td>
                  <td className="p-3">
                    The root component for the drawer. Set{" "}
                    <code>direction</code> to change the position of the drawer.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerTrigger</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.TriggerProps
                    <br />
                    <span className="text-muted-foreground">
                      asChild?: boolean
                    </span>
                  </td>
                  <td className="p-3">The button that opens the drawer.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerContent</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.ContentProps
                  </td>
                  <td className="p-3">The container for the drawer content.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerHeader</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes&lt;HTMLDivElement&gt;
                  </td>
                  <td className="p-3">
                    Contains the title and description of the drawer.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerTitle</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.TitleProps
                  </td>
                  <td className="p-3">The title of the drawer.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerDescription</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.DescriptionProps
                  </td>
                  <td className="p-3">The description of the drawer.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerFooter</td>
                  <td className="p-3 font-mono text-sm">
                    React.HTMLAttributes&lt;HTMLDivElement&gt;
                  </td>
                  <td className="p-3">
                    Used for aligning actions at the bottom of the drawer.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">DrawerClose</td>
                  <td className="p-3 font-mono text-sm">
                    DrawerPrimitive.CloseProps
                    <br />
                    <span className="text-muted-foreground">
                      asChild?: boolean
                    </span>
                  </td>
                  <td className="p-3">The button that closes the drawer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
