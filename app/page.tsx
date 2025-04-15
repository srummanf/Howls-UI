import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Code,
  Feather,
  Heart,
  Moon,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Toggle } from "@/components/ui/toggle";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section with Ghibli-inspired background */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/70" />
          {/* We'll keep the image comment as a placeholder */}
        </div>

        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-12 md:py-20 lg:py-32">
            <div className="mb-4 flex items-center rounded-full border bg-background/60 px-4 py-1 text-sm backdrop-blur-md">
              <span className="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                New
              </span>
              <span className="mr-2">Howl's UI has arrived!</span>
              <Link
                href="/docs/changelog"
                className="underline-offset-4 hover:underline"
              >
                See what's magical
              </Link>
            </div>

            <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              Bring{" "}
              <span className="bg-gradient-to-r from-[#5E81AC] to-[#8FBCBB] bg-clip-text text-transparent">
                Ghibli magic
              </span>{" "}
              to your interfaces
            </h1>

            <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
              A whimsical UI kit inspired by Studio Ghibli's enchanting
              aesthetic. Beautiful components that capture the spirit of Hayao
              Miyazaki's worlds.
            </p>

            <div className="flex w-full flex-col items-center justify-center space-y-4 py-6 sm:flex-row sm:space-x-4 sm:space-y-0 md:py-10">
              <Link href="/docs">
                <Button size="lg" className="h-12 px-8">
                  Begin Your Journey
                  <Wind className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs/components">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  Explore Components
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <Star
                  className="mr-1 h-4 w-4 text-amber-400"
                  fill="currentColor"
                />
                <span>3.2k+ GitHub stars</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div>Used by 5k+ dreamers</div>
              <div className="h-4 w-px bg-border"></div>
              <div>Based on Matsu theme by Matt Wierzbicki</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t bg-muted/40">
        <div className="container py-20">
          <div className="mx-auto max-w-[980px]">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Crafted with the spirit of Ghibli animation
              </h2>
              <p className="text-lg text-muted-foreground">
                A collection of components that bring warmth, nostalgia and the
                whimsical charm of Studio Ghibli to your web projects.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <Feather className="h-6 w-6 text-[#8FBCBB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Whimsical Design</h3>
                <p className="text-muted-foreground">
                  Soft colors, organic shapes, and delicate details inspired by
                  the magical worlds of Studio Ghibli films.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <Code className="h-6 w-6 text-[#8FBCBB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Developer Friendly</h3>
                <p className="text-muted-foreground">
                  Seamless integration with shadcn/ui components. Simple to
                  implement with straightforward documentation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <Moon className="h-6 w-6 text-[#8FBCBB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Light & Dark Magic</h3>
                <p className="text-muted-foreground">
                  Beautiful in both day and night modes, with carefully selected
                  color palettes that honor the Ghibli aesthetic.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-[#8FBCBB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Crafted with Care</h3>
                <p className="text-muted-foreground">
                  Every component is designed with attention to detail, bringing
                  the warmth and charm of Ghibli worlds to your UI.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[#8FBCBB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Tailwind Powered</h3>
                <p className="text-muted-foreground">
                  Built with React, Next.js, and Tailwind CSS, making
                  customization intuitive and flexible.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 rounded-full bg-[#8FBCBB]/20 p-3 w-12 h-12 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-[#8FBCBB]"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Open Source Magic</h3>
                <p className="text-muted-foreground">
                  Free to use and modify, with all credit to Matt Wierzbicki's
                  original Matsu theme for shadcn/ui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components Preview Section */}
      <div className="container py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-1">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Components that bring <br />
                Ghibli's charm to life
              </h2>
              <p className="text-lg text-muted-foreground">
                Our library features components that embody the warmth, whimsy,
                and attention to detail found in Studio Ghibli's beloved films.
              </p>

              <ul className="space-y-2">
                {[
                  "Soft, nature-inspired colors and gentle gradients",
                  "Hand-drawn style buttons and interactive elements",
                  "Whimsical form elements with subtle animations",
                  "Thoughtful dark mode inspired by Ghibli night scenes",
                  "Responsive design for all your magical creations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-[#A3BE8C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/docs/components">
                  <Button variant="outline">
                    See the collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg border bg-background p-2 shadow-md">
              <div className="absolute -top-4 -left-4 rounded-full bg-[#8FBCBB] p-3 shadow-lg">
                <Feather className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Buttons Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Buttons</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm">Primary</Button>
                      <Button size="sm" variant="outline">
                        Outline
                      </Button>
                      <Button size="sm" variant="ghost">
                        Ghost
                      </Button>
                    </div>
                  </div>

                  {/* Card Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Card</h4>
                    <Card className="w-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Dusty's Travels
                        </CardTitle>
                        <CardDescription className="text-xs">
                          A journey through magical lands
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2 text-xs">
                        <p>Start your adventure in the floating gardens</p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-xs"
                        >
                          View Story
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Calendar Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Calendar</h4>
                    <div className="border rounded-md p-2 bg-card">
                      <div className="grid grid-cols-7 gap-1">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div
                            key={i}
                            className="h-6 w-6 text-[10px] flex items-center justify-center text-muted-foreground"
                          >
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 28 }, (_, i) => (
                          <div
                            key={i}
                            className={`h-6 w-6 text-[10px] flex items-center justify-center rounded-md ${
                              i === 14 ? "bg-[#8FBCBB] text-white" : ""
                            } hover:bg-accent`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dialog Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Dialog</h4>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure absolutely sure?
                          </DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mt-4">
                          <Button variant="outline">Cancel</Button>
                          <Button variant="destructive">Delete Account</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* Hover Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Hover</h4>
                    <HoverCard>
                      <HoverCardTrigger>Hover</HoverCardTrigger>
                      <HoverCardContent>
                        The React Framework created by Vercel
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  {/* Menu Component */}
                  <div className="rounded-md border p-4 shadow-sm">
                    <h4 className="mb-2 font-medium">Menubar</h4>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>New Window</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Share</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>
                            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>
                            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Cut</MenubarItem>
                          <MenubarItem>Copy</MenubarItem>
                          <MenubarItem>Paste</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger>View</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>
                            Toggle Fullscreen{" "}
                            <MenubarShortcut>F11</MenubarShortcut>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger>Help</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>Documentation</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>About</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - New addition */}
      <div className="border-y bg-muted/20">
        <div className="container py-20">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Inspired by Ghibli worlds
            </h2>
            <p className="mb-12 text-lg text-muted-foreground max-w-[800px] mx-auto">
              Our components draw inspiration from the magical landscapes,
              whimsical characters, and gentle aesthetics that define Studio
              Ghibli's timeless films.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-[#88C0D0] to-[#5E81AC]"></div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Sky Castle Palette</h3>
                  <p className="text-sm text-muted-foreground">
                    Inspired by Howl's Moving Castle
                  </p>
                </div>
              </div>

              <div className="rounded-lg border overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-[#A3BE8C] to-[#81A1C1]"></div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Forest Spirit Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Inspired by Princess Mononoke
                  </p>
                </div>
              </div>

              <div className="rounded-lg border overflow-hidden shadow-md transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-[#EBCB8B] to-[#D08770]"></div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Sunset Journey</h3>
                  <p className="text-sm text-muted-foreground">
                    Inspired by Spirited Away
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/themes">
                <Button variant="outline">
                  Explore theme variations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[url('/images/ghibli-pattern.png')] bg-opacity-10 bg-repeat">
        <div className="container py-20">
          <div className="mx-auto max-w-[800px] text-center bg-background/80 p-8 rounded-lg backdrop-blur-sm shadow-lg">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Ready to add Ghibli magic to your project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Transform your UI with the warmth and charm of Studio
              Ghibli-inspired design.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/docs">
                <Button size="lg" className="h-12 px-8">
                  Start Your Journey
                  <Wind className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://github.com/srummanf/Howls-UI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="h-12 px-8">
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  Star on GitHub
                </Button>
              </a>
            </div>

            <p className="mt-6 text-sm">
              Based on{" "}
              <a
                href="https://matsu-theme.vercel.app/"
                className="text-[#8FBCBB] underline-offset-4 hover:underline"
              >
                Matsu theme
              </a>{" "}
              by Matt Wierzbicki
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container py-20">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Join our magical newsletter
          </h2>
          <p className="mb-6 text-muted-foreground">
            Subscribe to receive updates on new components, Ghibli-inspired
            design tips, and theme variations.
          </p>

          <form className="flex w-full max-w-sm mx-auto flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            No spam, just Ghibli-inspired magic for your inbox.
          </p>
        </div>
      </div>

      {/* Footer with credits */}
      <footer className="border-t py-8 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="text-sm text-muted-foreground">
              Howl's UI — A Ghibli-inspired component library for shadcn/ui
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Based on{" "}
              <a
                href="https://matsu-theme.vercel.app/"
                className="text-[#8FBCBB] underline-offset-4 hover:underline"
              >
                Matsu theme
              </a>
              by Matt Wierzbicki. All credit for the original Ghibli-inspired
              theme goes to Matt.
            </p>
          </div>
        </div>
      </footer>

      {/* Add Toaster component for notifications */}
      <div id="toast-container"></div>
    </div>
  );
}
