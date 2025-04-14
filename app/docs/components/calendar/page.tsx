"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"

export default function CalendarPage() {
  const [activeTab, setActiveTab] = React.useState("preview")
  const [date, setDate] = React.useState<Date | undefined>(new Date())

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

  const installationCode = `npm i react-day-picker date-fns`

  const usageCode = `import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`

  const rangeSelectionCode = `// Range selection example
<Calendar
  mode="range"
  selected={{
    from: new Date(2023, 0, 15),
    to: new Date(2023, 0, 20),
  }}
  onSelect={(range) => {
    // Handle range selection
    console.log(range)
  }}
  className="rounded-md border"
/>`

  const disabledDatesCode = `// Disabled dates example
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={{
    before: new Date(),
    after: new Date(new Date().setMonth(new Date().getMonth() + 1))
  }}
  className="rounded-md border"
/>

// Specific disabled dates
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={[
    new Date(2023, 0, 15),
    new Date(2023, 0, 16),
    new Date(2023, 0, 17),
    { from: new Date(2023, 0, 18), to: new Date(2023, 0, 22) }
  ]}
  className="rounded-md border"
/>`

  const customStylesCode = `// Custom styles example
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border p-3"
  classNames={{
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    caption: "flex justify-center pt-1 relative items-center",
    caption_label: "text-sm font-medium",
    nav: "space-x-1 flex items-center",
    nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-y-1",
    head_row: "flex",
    head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
    row: "flex w-full mt-2",
    cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-accent text-accent-foreground",
    day_outside: "text-muted-foreground opacity-50",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
    day_hidden: "invisible",
  }}
  components={{
    IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4" />,
    IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4" />,
  }}
/>`

  const manualInstallationCode = `import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        ...props.components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }`

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Calendar</h1>
          <p className="text-xl text-muted-foreground">A date field component that allows users to select dates and date ranges.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <div className="flex items-center justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
              />
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

          {/* Range Selection Example */}
          <div>
            <h3 className="text-lg font-medium mb-4">Range Selection</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex justify-center">
                  <Calendar
                    mode="range"
                    selected={{
                      from: new Date(2023, 0, 15),
                      to: new Date(2023, 0, 20),
                    }}
                    onSelect={(range) => {
                      // Handle range selection
                    }}
                    className="rounded-md border"
                  />
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={rangeSelectionCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Disabled Dates Example */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Disabled Dates</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-2 w-[300px]">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disabled Date Range</p>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={{
                        before: new Date(),
                        after: new Date(new Date().setMonth(new Date().getMonth() + 1))
                      }}
                      className="rounded-md border"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="code">
                <div className="rounded-md bg-muted">
                  <CopyBlock text={disabledDatesCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
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
                  <td className="p-3 font-mono text-sm">mode</td>
                  <td className="p-3 font-mono text-sm">"single" | "range" | "multiple"</td>
                  <td className="p-3">The selection mode of the calendar.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">selected</td>
                  <td className="p-3 font-mono text-sm">Date | { "{from: Date, to: Date}" } | Date[] | undefined</td>
                  <td className="p-3">The selected date or range.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">onSelect</td>
                  <td className="p-3 font-mono text-sm">function</td>
                  <td className="p-3">Callback function when a date is selected.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">disabled</td>
                  <td className="p-3 font-mono text-sm">DateRange | Date[] | DisabledDays</td>
                  <td className="p-3">Days that are disabled and cannot be selected.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">initialFocus</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">Whether to focus the calendar on initial render.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">numberOfMonths</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3">Number of months to display.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">fromMonth</td>
                  <td className="p-3 font-mono text-sm">Date</td>
                  <td className="p-3">The minimum month to display.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">toMonth</td>
                  <td className="p-3 font-mono text-sm">Date</td>
                  <td className="p-3">The maximum month to display.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">showOutsideDays</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3">Whether to show days from the previous and next months.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}