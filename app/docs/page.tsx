import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Getting Started</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to get started with our UI kit and build beautiful interfaces.
          </p>
        </div>
      </div>
      <div className="grid gap-4 py-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>Learn how to install and set up the UI kit in your project.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Follow our step-by-step guide to install the UI kit in your project.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/installation">
              <Button>
                Installation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>Explore the available components and learn how to use them.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Browse our collection of UI components and learn how to use them in your project.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/components">
              <Button>
                Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center py-8">
        <Link href="/docs/installation">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
