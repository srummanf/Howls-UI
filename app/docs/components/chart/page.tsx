"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock } from "react-code-blocks";

const lineChartData = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
];

const areaChartData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

// Inline style reference using CSS vars
const cssVars = {
  chart1: "oklch(var(--chart-1))",
  chart2: "oklch(var(--chart-2))",
  chart3: "oklch(var(--chart-3))",
  grid: "oklch(var(--ring))",
  axis: "oklch(var(--foreground))",
};

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

const installationCode = `npm install recharts`;

const lineChartCode = `import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts"

const data = [...];

export function LineChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="var(--primary)" />
        <Line type="monotone" dataKey="uv" stroke="var(--chart-2)" />
      </LineChart>
    </ResponsiveContainer>
  )
}`;

const areaChartCode = `import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts"

const data = [...];

export function StackedAreaChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="var(--primary)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="var(--chart-1)"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="var(--chart-3)"
                  />
      </AreaChart>
    </ResponsiveContainer>
  )
}`;

export default function ChartPage() {
  const [activeTab, setActiveTab] = React.useState("preview");

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Chart
          </h1>
          <p className="text-xl text-muted-foreground">
            Visualize data using customizable charts powered by Recharts.
          </p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        {/* Tabbed Chart Example */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6 space-y-8">
            <div className="rounded-lg border p-4 bg-background">
              <h3 className="mb-4 text-lg font-semibold">Line Chart</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="var(--primary)" />
                  <Line type="monotone" dataKey="uv" stroke="var(--chart-2)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-lg border p-4 bg-background">
              <h3 className="mb-4 text-lg font-semibold">Stacked Area Chart</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={areaChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="var(--primary)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="var(--chart-1)"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="var(--chart-3)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-6 space-y-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={lineChartCode}
                language="tsx"
                showLineNumbers={true}
                theme={customTheme}
                codeBlock
              />
            </div>
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={areaChartCode}
                language="tsx"
                showLineNumbers={true}
                theme={customTheme}
                codeBlock
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Installation */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <div className="rounded-md bg-muted p-4">
            <CopyBlock
              text={installationCode}
              language="bash"
              theme={customTheme}
              codeBlock
            />
          </div>
        </div>

        {/* Props Table */}
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
                  <td className="p-3 font-mono text-sm">ChartContainer</td>
                  <td className="p-3 font-mono text-sm">
                    id?, className?, config, children, ...divProps
                  </td>
                  <td className="p-3">
                    Chart wrapper that provides theming and context for tooltips
                    and legends. Accepts a config object for colors and labels.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ChartTooltipContent</td>
                  <td className="p-3 font-mono text-sm">
                    active, payload, hideLabel?, hideIndicator?, indicator?,
                    label?, labelFormatter?, formatter?, labelClassName?,
                    color?, nameKey?, labelKey?
                  </td>
                  <td className="p-3">
                    Custom tooltip content with theme-aware indicators, label
                    formatting, and full config integration.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ChartLegendContent</td>
                  <td className="p-3 font-mono text-sm">
                    className?, payload, verticalAlign?, hideIcon?, nameKey?
                  </td>
                  <td className="p-3">
                    Custom legend with icon rendering, label overrides, and
                    vertical positioning support.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ChartStyle</td>
                  <td className="p-3 font-mono text-sm">id, config</td>
                  <td className="p-3">
                    Injects scoped CSS variables for dynamic chart theming using
                    light/dark palettes.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ChartTooltip</td>
                  <td className="p-3 font-mono text-sm">
                    *Inherits Recharts.Tooltip
                  </td>
                  <td className="p-3">
                    Unstyled Recharts tooltip, used optionally outside the
                    styled content variant.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">ChartLegend</td>
                  <td className="p-3 font-mono text-sm">
                    *Inherits Recharts.Legend
                  </td>
                  <td className="p-3">
                    Unstyled Recharts legend, used optionally outside the styled
                    content variant.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">
                    LineChart / AreaChart
                  </td>
                  <td className="p-3 font-mono text-sm">width, height, data</td>
                  <td className="p-3">
                    Container for drawing chart lines or stacked areas.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Line / Area</td>
                  <td className="p-3 font-mono text-sm">
                    dataKey, stroke, fill, stackId
                  </td>
                  <td className="p-3">
                    Defines each data element's shape and style.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">XAxis / YAxis</td>
                  <td className="p-3 font-mono text-sm">dataKey, domain</td>
                  <td className="p-3">Chart axes configuration.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Tooltip</td>
                  <td className="p-3 font-mono text-sm">
                    formatter, labelFormatter
                  </td>
                  <td className="p-3">Custom tooltip for chart data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
