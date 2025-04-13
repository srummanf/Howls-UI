import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InstallationPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Installation</h1>
          <p className="text-xl text-muted-foreground">How to install and set up the UI kit in your project.</p>
        </div>
      </div>
      <div className="grid gap-8 py-8">
        <Tabs defaultValue="nextjs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="nextjs">Next.js</TabsTrigger>
            <TabsTrigger value="vite">Vite</TabsTrigger>
            <TabsTrigger value="react-router">React Router</TabsTrigger>
          </TabsList>
          <TabsContent value="nextjs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Next.js Installation</CardTitle>
                <CardDescription>How to install and configure the UI kit with Next.js.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">1. Create a new Next.js project</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code>
                </pre>

                <h3 className="text-lg font-medium">2. Install dependencies</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge</code>
                </pre>

                <h3 className="text-lg font-medium">3. Add the components</h3>
                <p>
                  You can now start adding components to your project. Check out the{" "}
                  <Link href="/docs/components" className="font-medium underline underline-offset-4">
                    components
                  </Link>{" "}
                  section to get started.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vite" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vite Installation</CardTitle>
                <CardDescription>How to install and configure the UI kit with Vite.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">1. Create a new Vite project</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm create vite@latest my-app -- --template react-ts</code>
                </pre>

                <h3 className="text-lg font-medium">2. Install Tailwind CSS</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm install -D tailwindcss postcss autoprefixer npm tailwindcss init -p</code>
                </pre>

                <h3 className="text-lg font-medium">3. Install dependencies</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="react-router" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>React Router Installation</CardTitle>
                <CardDescription>How to install and configure the UI kit with React Router.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">1. Create a new React project</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npx create-react-app my-app --template typescript</code>
                </pre>

                <h3 className="text-lg font-medium">2. Install React Router</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm install react-router-dom</code>
                </pre>

                <h3 className="text-lg font-medium">3. Install Tailwind CSS</h3>
                <pre className="rounded-md bg-muted p-4">
                  <code>npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
