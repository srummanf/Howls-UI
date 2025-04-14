"use client"

import * as React from "react"
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock, dracula } from "react-code-blocks"

export default function SelectPage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `npm i @radix-ui/react-select`

  const usageCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="strawberry">Strawberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

  const groupedSelectCode = `// Grouped select example
<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a vegetable" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Root Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="potato">Potato</SelectItem>
      <SelectItem value="radish">Radish</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Leafy Greens</SelectLabel>
      <SelectItem value="spinach">Spinach</SelectItem>
      <SelectItem value="kale">Kale</SelectItem>
      <SelectItem value="lettuce">Lettuce</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`

  const disabledSelectCode = `// Disabled examples
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange" disabled>Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>

<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`

  const manualInstallationCode = `import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Select</h1>
          <p className="text-xl text-muted-foreground">Displays a list of options for the user to pick from—triggered by a button.</p>
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
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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

          {/* Grouped Select Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Grouped Select</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a vegetable" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Root Vegetables</SelectLabel>
                      <SelectItem value="carrot">Carrot</SelectItem>
                      <SelectItem value="potato">Potato</SelectItem>
                      <SelectItem value="radish">Radish</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Leafy Greens</SelectLabel>
                      <SelectItem value="spinach">Spinach</SelectItem>
                      <SelectItem value="kale">Kale</SelectItem>
                      <SelectItem value="lettuce">Lettuce</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={groupedSelectCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disabled Item</p>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange" disabled>Orange</SelectItem>
                        <SelectItem value="grape">Grape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disabled Select</p>
                    <Select disabled>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Disabled select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={disabledSelectCode} language="tsx" showLineNumbers theme={dracula} codeBlock />
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
                  <td className="p-3 font-mono text-sm">Select</td>
                  <td className="p-3 font-mono text-sm">
                    SelectPrimitive.SelectProps<br />
                    <span className="text-muted-foreground">defaultValue?: string</span><br />
                    <span className="text-muted-foreground">value?: string</span><br />
                    <span className="text-muted-foreground">onValueChange?: (value: string) =&gt; void</span><br />
                    <span className="text-muted-foreground">disabled?: boolean</span>
                  </td>
                  <td className="p-3">The root component for a select.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectTrigger</td>
                  <td className="p-3 font-mono text-sm">
                    SelectPrimitive.SelectTriggerProps
                  </td>
                  <td className="p-3">The trigger that toggles the select popover.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectValue</td>
                  <td className="p-3 font-mono text-sm">
                    SelectPrimitive.SelectValueProps<br />
                    <span className="text-muted-foreground">placeholder?: string</span>
                  </td>
                  <td className="p-3">The value displayed in the select trigger.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectContent</td>
                  <td className="p-3 font-mono text-sm">
                    SelectPrimitive.SelectContentProps<br />
                    <span className="text-muted-foreground">position?: "popper" | "item-aligned"</span>
                  </td>
                  <td className="p-3">The dropdown content displayed when the select is open.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectGroup</td>
                  <td className="p-3 font-mono text-sm">SelectPrimitive.SelectGroupProps</td>
                  <td className="p-3">Groups select items together with an optional label.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectLabel</td>
                  <td className="p-3 font-mono text-sm">SelectPrimitive.SelectLabelProps</td>
                  <td className="p-3">A label for a group of select items.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectItem</td>
                  <td className="p-3 font-mono text-sm">
                    SelectPrimitive.SelectItemProps<br />
                    <span className="text-muted-foreground">value: string</span><br />
                    <span className="text-muted-foreground">disabled?: boolean</span>
                  </td>
                  <td className="p-3">A selectable item displayed in the select content.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">SelectSeparator</td>
                  <td className="p-3 font-mono text-sm">SelectPrimitive.SelectSeparatorProps</td>
                  <td className="p-3">A visual separator between select items or groups.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}