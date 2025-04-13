import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const components = [
  {
    name: "Button",
    description: "A button component with different variants and sizes.",
    details: "Buttons allow users to take actions with a single tap.",
    link: "/docs/components/button",
  },
  {
    name: "Card",
    description: "A card component for displaying content in a container.",
    details: "Cards are used to group related content and actions.",
    link: "/docs/components/card",
  },
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings.",
    details: "Accordions allow users to expand and collapse sections of content.",
    link: "/docs/components/accordion",
  },
  {
    name: "Breadcrumb",
    description: "Displays the path to the current resource.",
    details: "Breadcrumbs help users navigate through a hierarchy of pages.",
    link: "/docs/components/breadcrumb",
  },
  {
    name: "Tabs",
    description: "A tabbed interface for organizing content.",
    details: "Tabs allow users to switch between different views or sections.",
    link: "/docs/components/tabs",
  },
  {
    name: "Dropdown",
    description: "A dropdown menu for displaying a list of options.",
    details: "Dropdowns are used to group actions or navigation links.",
    link: "/docs/components/dropdown",
  },
];

export default function ComponentsPage() {
  return (
    <div className="container max-w-6xl py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Components</h1>
          <p className="text-xl text-muted-foreground">Explore our collection of UI components.</p>
        </div>
      </div>
      <div className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{component.details}</p>
            </CardContent>
            <CardFooter>
              <Link href={component.link}>
                <Button variant="outline">
                  View Component
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
