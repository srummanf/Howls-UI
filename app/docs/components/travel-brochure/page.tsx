"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyBlock } from "react-code-blocks"
import { TravelBrochure } from "@/components/ui/travel-brochure"
import { customTheme } from "@/lib/code-theme"

export default function TravelBrochurePage() {
  const [activeTab, setActiveTab] = React.useState("preview")

  const installationCode = `import Image from "next/image"
import { cn } from "@/lib/utils"

interface TravelBrochureProps {
  destination: string
  tagline?: string
  imageUrl?: string
  quote?: string
  columns: string[]
  footer?: {
    country?: string
    climate?: string
    currency?: string
  }
  className?: string
}

export function TravelBrochure({
  destination,
  tagline = "Discover the Wonders",
  imageUrl,
  quote,
  columns,
  footer = {},
  className,
}: TravelBrochureProps) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto border border-black bg-[#fefcf8]",
        className
      )}
    >
      <div className="border-b border-black text-center px-4 py-3 bg-[#faf5e4] font-serif">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
          {destination}
        </h1>
        <p className="text-md md:text-xl italic text-muted-foreground mt-1">
          {tagline}
        </p>
      </div>

      {imageUrl && (
        <div className="border-b border-black">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={imageUrl}
              alt={\`\${destination} image\`}
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      )}

      {quote && (
        <div className="border-b border-black p-6 text-center font-serif text-lg italic">
          <p>"{quote}"</p>
        </div>
      )}

      <div className={\`grid grid-cols-1 sm:grid-cols-\${Math.min(columns.length, 3)} border-b border-black\`}>
        {columns.map((col, index) => (
          <div
            key={index}
            className={\`p-6 font-serif leading-relaxed text-center text-base sm:text-lg \${index !== columns.length - 1 ? "sm:border-r border-black" : ""}\`}
          >
            {col.split("\\n").map((line, i) => (
              <p key={i} className="mb-3">{line}</p>
            ))}
          </div>
        ))}
      </div>

      {(footer.country || footer.climate || footer.currency) && (
        <div className="flex justify-between text-xs font-serif uppercase tracking-wider p-4">
          <div>{footer.country}</div>
          <div>{footer.climate}</div>
          <div>{footer.currency}</div>
        </div>
      )}
    </div>
  )
}`

  const usageCode = `import { TravelBrochure } from "@/components/ui/travel-brochure"

<TravelBrochure
  destination="LAPUTA, CASTLE IN THE SKY"
  tagline="Where dreams touch the clouds"
  imageUrl="/images/laputa.jpg"
  quote="A floating city... held together by ancient magic and pure hearts."
  columns={[
    "🛕 Ancient Architecture:\\nThe entire city is a mechanical marvel powered by crystals.",
    "🌿 Nature's Embrace:\\nLush gardens, flocks of doves, and singing stones await every explorer.",
    "🌀 Local Legends:\\nLegends speak of robots tending to the trees and protecting lost secrets.",
  ]}
  footer={{
    country: "Skypia Region",
    climate: "Ethereal / Windy",
    currency: "Crystal Coins",
  }}
/>`

  const propsTable = [
    ["destination", "string", "Main destination title (required)"],
    ["tagline", "string", "Optional subtitle under destination"],
    ["imageUrl", "string", "Optional hero image URL"],
    ["quote", "string", "Optional center quote below image"],
    ["columns", "string[]", "Array of column content (max 3 shown)"],
    ["footer", "object", "Country, climate, and currency object"],
    ["className", "string", "Tailwind utility classes"],
  ]

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Travel Brochure</h1>
          <p className="text-xl text-muted-foreground">A beautiful travel card layout for real or fantasy destinations.</p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="mt-6 space-y-6">
            <TravelBrochure
              destination="LAPUTA, CASTLE IN THE SKY"
              tagline="Where dreams touch the clouds"
              imageUrl="/images/ghibli-train.jpg"
              quote="A floating city... held together by ancient magic and pure hearts."
              columns={[
                "🛕 Ancient Architecture:\nThe entire city is a mechanical marvel powered by crystals.",
                "🌿 Nature's Embrace:\nLush gardens, flocks of doves, and singing stones await every explorer.",
                "🌀 Local Legends:\nLegends speak of robots tending to the trees and protecting lost secrets.",
              ]}
              footer={{
                country: "Skypia Region",
                climate: "Ethereal / Windy",
                currency: "Crystal Coins",
              }}
            />
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock text={usageCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <div className="rounded-md bg-muted">
            <CopyBlock text={installationCode} language="tsx" showLineNumbers theme={customTheme} codeBlock />
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-3 text-left font-medium">Prop</th>
                  <th className="p-3 text-left font-medium">Type</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {propsTable.map(([prop, type, desc], i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 font-mono">{prop}</td>
                    <td className="p-3 font-mono">{type}</td>
                    <td className="p-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
