"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyBlock } from "react-code-blocks";
import { Card, CardContent } from "@/components/ui/card";

export default function CarouselPage() {
  const [activeTab, setActiveTab] = React.useState("preview");

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

  const installCode = `npm install embla-carousel-react`;

  const usageCode = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem><div className="p-6 bg-muted rounded">Slide 1</div></CarouselItem>
        <CarouselItem><div className="p-6 bg-muted rounded">Slide 2</div></CarouselItem>
        <CarouselItem><div className="p-6 bg-muted rounded">Slide 3</div></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`;

  const responsiveCode = `<Carousel className="w-full max-w-4xl">
  <CarouselContent className="-ml-1">
    {[...Array(8)].map((_, i) => (
      <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-1">
        <div className="p-4 bg-muted rounded h-32 flex items-center justify-center">Slide {i + 1}</div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const autoplayCode = `import Autoplay from "embla-carousel-autoplay"

const plugin = React.useRef(Autoplay({ delay: 2000 }))

<Carousel plugins={[plugin.current]} className="w-full max-w-sm">
  <CarouselContent>
    {[...Array(5)].map((_, i) => (
      <CarouselItem key={i}>
        <div className="p-4 bg-muted rounded h-40 flex items-center justify-center">Auto {i + 1}</div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const manualCode = `import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins = [], ...props }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: orientation === "vertical" ? "y" : "x", ...opts }, plugins)

  React.useEffect(() => {
    if (setApi) setApi(emblaApi)
  }, [emblaApi, setApi])

  return <div ref={emblaRef} {...props} />
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("shrink-0 grow-0 basis-full", className)} {...props} />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow", className)}
    {...props}
  >
    ←
  </button>
))
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow", className)}
    {...props}
  >
    →
  </button>
))
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
}`;

  const orientationCode = `import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{ align: "start" }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Carousel
          </h1>
          <p className="text-xl text-muted-foreground">
            A responsive carousel component built with Embla Carousel and
            ShadCN.
          </p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        {/* Preview + Code */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((i) => (
                  <CarouselItem key={i}>
                    <div className="p-6 bg-muted rounded text-center">
                      Slide {i}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={usageCode}
                language="tsx"
                showLineNumbers
                theme={customTheme}
                codeBlock
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Installation */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold">Installation</h2>
          <Tabs defaultValue="cli" className="w-full">
            <TabsList className="grid grid-cols-2 w-full lg:w-[400px]">
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
            <TabsContent value="cli" className="mt-6">
              <CopyBlock
                text={installCode}
                language="bash"
                theme={customTheme}
                codeBlock
              />
            </TabsContent>
            <TabsContent value="manual" className="mt-6">
              <CopyBlock
                text={manualCode}
                language="tsx"
                showLineNumbers
                theme={customTheme}
                codeBlock
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Examples */}
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold">Examples</h2>

          {/* Responsive */}
          <Tabs defaultValue="preview" className="w-full">
            <h3 className="text-lg font-medium">Responsive</h3>
            <TabsList className="w-[300px] mb-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent className="-ml-1">
                  {[...Array(8)].map((_, i) => (
                    <CarouselItem
                      key={i}
                      className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-1"
                    >
                      <div className="p-4 bg-muted rounded h-32 flex items-center justify-center">
                        Slide {i + 1}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="code">
              <CopyBlock
                text={responsiveCode}
                language="tsx"
                showLineNumbers
                theme={customTheme}
                codeBlock
              />
            </TabsContent>
          </Tabs>

          {/* Autoplay */}
          <Tabs defaultValue="code" className="w-full">
            <h3 className="text-lg font-medium mt-4">Autoplay</h3>
            <TabsList className="w-[300px] mb-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <p className="text-muted-foreground">
                Autoplay preview requires dynamic Embla setup.
              </p>
            </TabsContent>
            <TabsContent value="code">
              <CopyBlock
                text={autoplayCode}
                language="tsx"
                showLineNumbers
                theme={customTheme}
                codeBlock
              />
            </TabsContent>
          </Tabs>

          {/* Orientation Carousel Example */}
          <Tabs defaultValue="preview" className="w-full mt-8">
            <h3 className="text-lg font-medium">Orientation (Vertical)</h3>
            <TabsList className="w-[300px] mb-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Carousel
                opts={{ align: "start" }}
                orientation="vertical"
                className="w-full max-w-xs my-12"
              >
                <CarouselContent className="-mt-1 h-[200px]">
                  {[...Array(5)].map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="code">
              <div className="rounded-md bg-muted">
                <CopyBlock
                  text={orientationCode}
                  language="tsx"
                  showLineNumbers
                  theme={customTheme}
                  codeBlock
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left font-semibold">Component</th>
                  <th className="p-3 text-left font-semibold">Prop</th>
                  <th className="p-3 text-left font-semibold">Type</th>
                  <th className="p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono">Carousel</td>
                  <td className="p-3 font-mono">orientation</td>
                  <td className="p-3 font-mono">"horizontal" | "vertical"</td>
                  <td className="p-3">Scroll direction of the carousel</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">Carousel</td>
                  <td className="p-3 font-mono">opts</td>
                  <td className="p-3 font-mono">EmblaOptionsType</td>
                  <td className="p-3">
                    Carousel behavior options (e.g., align, loop)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">Carousel</td>
                  <td className="p-3 font-mono">plugins</td>
                  <td className="p-3 font-mono">EmblaPluginType[]</td>
                  <td className="p-3">Optional plugins (e.g., autoplay)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">CarouselContent</td>
                  <td className="p-3 font-mono">children</td>
                  <td className="p-3 font-mono">ReactNode</td>
                  <td className="p-3">The scrollable slides container</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">CarouselItem</td>
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3 font-mono">string</td>
                  <td className="p-3">
                    Width basis and spacing for slide items
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono">
                    CarouselNext / CarouselPrevious
                  </td>
                  <td className="p-3 font-mono">onClick</td>
                  <td className="p-3 font-mono">function</td>
                  <td className="p-3">
                    Handlers to trigger embla scroll movement
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
