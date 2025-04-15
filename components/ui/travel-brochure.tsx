"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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
    <Card className={cn("bg-[#fefcf8] border-black text-black font-serif", className)}>
      <CardHeader className="text-center space-y-1 border-b border-black bg-[#faf5e4]">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
          {destination}
        </h1>
        <p className="text-md md:text-xl italic text-muted-foreground">{tagline}</p>
      </CardHeader>

      {imageUrl && (
        <div className="border-b border-black">
          <AspectRatio ratio={3 / 2}>
            <Image
              src={imageUrl}
              alt={`${destination} image`}
              fill
              className="object-cover grayscale rounded-none"
            />
          </AspectRatio>
        </div>
      )}

      {quote && (
        <div className="text-center px-6 py-4 border-b border-black italic text-lg">
          <p>"{quote}"</p>
        </div>
      )}

      <CardContent className="grid grid-cols-1 sm:grid-cols-3 border-b border-black p-0">
        {columns.map((col, index) => (
          <div
            key={index}
            className={cn(
              "px-6 py-4 text-center leading-relaxed text-base sm:text-lg",
              index < columns.length - 1 ? "sm:border-r border-black" : ""
            )}
          >
            {col.split("\n").map((line, i) => (
              <p key={i} className="mb-3">{line}</p>
            ))}
          </div>
        ))}
      </CardContent>

      {(footer.country || footer.climate || footer.currency) && (
        <>
          <Separator className="bg-black" />
          <CardFooter className="flex justify-between text-xs uppercase tracking-wide px-4 py-2">
            <div>{footer.country}</div>
            <div>{footer.climate}</div>
            <div>{footer.currency}</div>
          </CardFooter>
        </>
      )}
    </Card>
  )
}
