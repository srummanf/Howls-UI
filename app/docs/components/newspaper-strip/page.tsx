"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock } from "react-code-blocks";
import { customTheme } from "@/lib/code-theme"
import { NewspaperStrip } from "@/components/ui/newspaper-strip";

export default function NewspaperStripPage() {
  const [activeTab, setActiveTab] = React.useState("preview");

  const installationCode = `import Image from "next/image";
import { cn } from "@/lib/utils";

interface NewspaperStripProps {
  specialText?: string;
  mainTitle: string;
  dailyText?: string;
  publisherInfo?: string;
  articleTitle?: string;
  date?: string;
  headline: string;
  imageUrl?: string;
  imageAlt?: string;
  quote?: string;
  columns: string[];
  volumeInfo?: string;
  issueCode?: string;
  issueDate?: string;
  className?: string;
}

export function NewspaperStrip({
  specialText = "SPECIAL EDITION",
  mainTitle,
  dailyText = "DAILY REPORT",
  publisherInfo = "",
  articleTitle = "",
  date = "",
  headline,
  imageUrl,
  imageAlt = "Featured image",
  quote = "",
  columns,
  volumeInfo = "VOL. 1... NO.1",
  issueCode = "",
  issueDate = new Date()
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase(),
  className,
}: NewspaperStripProps) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto border border-black bg-[#fffdf7]",
        className
      )}
    >
      <div className="flex justify-between font-serif items-center border-b border-black p-3">
        <div className="text-xs sm:text-sm font-serif uppercase tracking-wide">
          {specialText}
        </div>
        <div className="text-xl sm:text-3xl md:text-4xl font-black italic tracking-tight text-center">
          {mainTitle}
        </div>
        <div className="text-xs sm:text-sm font-serif uppercase tracking-wide">
          {dailyText}
        </div>
      </div>

      {(publisherInfo || articleTitle || date) && (
        <div className="flex justify-between items-center border-b border-black p-2 text-xs">
          <div className="font-serif uppercase tracking-wide">
            {publisherInfo}
          </div>
          <div className="font-serif uppercase tracking-wide text-center">
            {articleTitle}
          </div>
          <div className="font-serif uppercase tracking-wide">{date}</div>
        </div>
      )}

      <div className="border-b border-black p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center tracking-wide uppercase">
          {headline}
        </h1>
      </div>

      {imageUrl && (
        <div className="border-b border-black p-4 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-[4/3]">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      )}

      {quote && (
        <div className="border-b border-black p-4 text-center">
          <p className="font-serif font-bold text-lg sm:text-xl">"{quote}"</p>
        </div>
      )}

      <div className={\`grid grid-cols-1 sm:grid-cols-\${Math.min(columns.length, 3)} border-b border-black\`}>
        {columns.map((column, index) => (
          <div
            key={index}
            className={cn(
              "p-6 font-serif text-base sm:text-lg leading-relaxed text-center",
              index !== columns.length - 1 && "sm:border-r border-black"
            )}
          >
            {typeof column === "string"
              ? column.split("\\n").map((line, i) => (
                  <p key={i} className="mb-3">
                    {line}
                  </p>
                ))
              : column}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center p-2 text-xs">
        <div className="font-serif uppercase">{volumeInfo}</div>
        <div className="font-serif uppercase">{issueCode}</div>
        <div className="font-serif uppercase">{issueDate}</div>
      </div>
    </div>
  );
}`;


  const usageCode = `import { NewspaperStrip } from "@/components/ui/newspaper-strip"

export function Example() {
  return (
    <NewspaperStrip
      mainTitle="THE REACT GAZETTE"
      headline="React 19 Finally Released!"
      imageUrl="/images/news.jpg"
      quote="Hooks just got even better!"
      columns={[
        "React 19 brings new features and improvements to the ecosystem, including server actions, async context, and improved suspense.",
        "Developers are already migrating their apps to the latest version, citing performance improvements and cleaner API patterns.",
        "The community response has been overwhelmingly positive, with contributors excited for what's next.",
      ]}
    />
  )
}`;

  const propsTable = [
    [
      "specialText",
      "string",
      "Optional top-left label (default: 'SPECIAL EDITION')",
    ],
    ["mainTitle", "string", "Main newspaper title (required)"],
    [
      "dailyText",
      "string",
      "Optional top-right label (default: 'DAILY REPORT')",
    ],
    ["publisherInfo", "string", "Publisher name/info (optional)"],
    ["articleTitle", "string", "Sub-header article title (optional)"],
    ["date", "string", "Date shown in sub-header (optional)"],
    ["headline", "string", "Main headline (required)"],
    ["imageUrl", "string", "Image URL (optional)"],
    ["imageAlt", "string", "Alt text for image (default: 'Featured image')"],
    ["quote", "string", "Center quote section (optional)"],
    ["columns", "string[]", "Content for up to 3 text columns (required)"],
    ["volumeInfo", "string", "Footer volume text (default: 'VOL. 1... NO.1')"],
    ["issueCode", "string", "Optional footer issue code"],
    ["issueDate", "string", "Optional footer issue date (default: today)"],
    ["className", "string", "Tailwind utility classes for outer container"],
  ];

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Newspaper Strip
          </h1>
          <p className="text-xl text-muted-foreground">
            A vintage newspaper-style layout component with headlines, quotes,
            and multi-column content.
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
            <NewspaperStrip
              specialText="MYSTICAL BULLETIN"
              mainTitle="THE SPIRITED TIMES"
              dailyText="FOREST GAZETTE"
              publisherInfo="GHIBLI PRESS"
              articleTitle="WHISPERS FROM THE WIND"
              date="14 APR 2025"
              headline="Spirits Spotted Over the Valley Again!"
              imageUrl="/images/ghibli-forest.jpg"
              imageAlt="Spirits flying over forest"
              quote="Sometimes the wind takes messages to those who truly listen."
              columns={[
                "In a heartwarming return, the mysterious forest spirits have once again appeared across the skies of the Western Valley. Witnesses claim to have seen soot sprites scattering joyfully around riverbeds, while tree guardians watched silently under the moonlight.",
                "According to the Wind Courier Guild, strange whirlwinds formed patterns near Totoro’s grove, hinting at an ancient spirit dance. Many villagers lit lanterns and left offerings of acorns, rice cakes, and tiny umbrellas.",
                "While the Ministry of Mystical Matters denies official comment, local Grandmother Kiki says, 'The balance is shifting again. When the Catbus runs under a full moon, be sure to thank the stars above.' Stay tuned for our upcoming article: 'Of Howls and Harbors – The Airships of April.'",
              ]}
              volumeInfo="VOL. 27 — NO. 9"
              issueCode="SPIRIT-VALLEY-0425"
              issueDate="14 APR 2025"
            />
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={usageCode}
                language="tsx"
                showLineNumbers={true}
                theme={customTheme}
                codeBlock
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Manual Installation</h2>
          <div className="rounded-md bg-muted p-4">
            <CopyBlock
              text={installationCode}
              language="bash"
              showLineNumbers={false}
              theme={customTheme}
              codeBlock
            />
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
  );
}
