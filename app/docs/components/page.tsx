import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ComponentsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Components</h1>
          <p className="text-xl text-muted-foreground">Explore our collection of UI components.</p>
        </div>
      </div>
      <div className="grid gap-4 py-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>A button component with different variants and sizes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Buttons allow users to take actions with a single tap.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/components/button">
              <Button variant="outline">
                View Component
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>A card component for displaying content in a container.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards are used to group related content and actions.</p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/components/card">
              <Button variant="outline">
                View Component
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
