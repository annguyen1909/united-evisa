"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { COUNTRIES } from "@/lib/countries"

interface CountrySearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function CountrySearch({
  value,
  onChange,
  placeholder = "Select a country...",
}: CountrySearchProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[470px] max-md:w-[270px] justify-between border-slate-300 hover:border-[#16610E] transition-colors bg-white text-slate-700 font-medium"
        >
          <div className="flex items-center gap-2 overflow-hidden">
            {value && COUNTRIES.find((c) => c.name === value) ? (
              <>
                <img
                  src={`https://flagcdn.com/${COUNTRIES.find((c) => c.name === value)?.code.toLowerCase()}.svg`}
                  alt={value}
                  className="h-4 w-6 object-cover rounded"
                />
                <span className="truncate">{value}</span>
              </>
            ) : (
              <div className="flex items-center gap-2 text-slate-500">
                <Search className="h-4 w-4" />
                <span>{placeholder}</span>
              </div>
            )}
          </div>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[470px] max-md:w-[270px] p-0 border-slate-200 shadow-lg">
        <Command className="rounded-lg border border-slate-200">
          <CommandInput
            placeholder="Search country..."
            value={query}
            onValueChange={setQuery}
            className="border-b border-slate-100"
          />
          <CommandList className="max-h-[300px] overflow-auto">
            <CommandEmpty className="py-4 text-center text-sm text-slate-500">
              No country found.
            </CommandEmpty>
            <CommandGroup>
              {filteredCountries.map((country) => {
                const matchIndex = country.name
                  .toLowerCase()
                  .indexOf(query.toLowerCase())

                const beforeMatch = country.name.slice(0, matchIndex)
                const matchText = country.name.slice(
                  matchIndex,
                  matchIndex + query.length
                )
                const afterMatch = country.name.slice(matchIndex + query.length)

                return (
                  <CommandItem
                    key={country.code}
                    value={country.name}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue)
                      setQuery("")
                      requestAnimationFrame(() => setOpen(false))
                    }}
                    className="flex items-center gap-2 py-2.5 px-3 cursor-pointer hover:bg-[#f0f8f0]"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <img
                        src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                        alt={country.name}
                        className="h-4 w-6 object-cover rounded"
                      />
                      <span>
                        {matchIndex >= 0 ? (
                          <>
                            {beforeMatch}
                            <span className="font-medium text-[#16610E]">{matchText}</span>
                            {afterMatch}
                          </>
                        ) : (
                          country.name
                        )}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "h-4 w-4 text-[#16610E]",
                        value === country.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}