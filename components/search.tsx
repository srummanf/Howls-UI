"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { components, type ComponentItem } from "@/lib/components"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

export function Search() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filteredComponents, setFilteredComponents] = React.useState<ComponentItem[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Filter components based on search query
  const filterComponents = React.useCallback((query: string) => {
    if (!query) {
      setFilteredComponents([])
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const filtered = components.filter((component) => {
      return (
        component.name.toLowerCase().includes(lowerCaseQuery) ||
        component.description.toLowerCase().includes(lowerCaseQuery) ||
        component.keywords.some((keyword) => keyword.toLowerCase().includes(lowerCaseQuery))
      )
    })

    setFilteredComponents(filtered)
  }, [])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    filterComponents(query)
  }

  // Handle component selection
  const handleSelectComponent = (component: ComponentItem) => {
    router.push(component.path)
    setSearchQuery("")
    setFilteredComponents([])
    setOpen(false)
  }

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("")
    setFilteredComponents([])
    inputRef.current?.focus()
  }

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <div className="relative w-full">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search documentation... (⌘K)"
          className="w-full bg-background pl-8 md:w-[200px] lg:w-[280px]"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setOpen(true)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full rounded-l-none"
            onClick={handleClearSearch}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search components..."
          value={searchQuery}
          onValueChange={(value) => {
            setSearchQuery(value)
            filterComponents(value)
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {filteredComponents.length > 0 && (
            <CommandGroup heading="Components">
              {filteredComponents.map((component) => (
                <CommandItem
                  key={component.path}
                  onSelect={() => handleSelectComponent(component)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span>{component.name}</span>
                    <span className="text-xs text-muted-foreground">{component.description}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
