import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({ options, value, onChange, disabled, placeholder }) => {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value || o.label === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "w-full h-14 px-4 bg-gray-100 border-0 rounded-lg text-left text-gray-700 font-medium text-base flex items-center justify-between focus:ring-4 focus:ring-emerald-100 focus:bg-white transition-all duration-200 hover:bg-white hover:shadow-sm disabled:opacity-50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {selected ? (
            <span>{selected.label}</span>
          ) : (
            <span className="text-muted-foreground font-normal">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] min-w-0 max-w-none p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-12" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value || option.label}
                  value={option.label}
                  onSelect={() => {
                    onChange(option.value || option.label);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between px-4 py-3 cursor-pointer"
                >
                  <span>{option.label}</span>
                  {value === option.value && <Check className="h-4 w-4 text-emerald-500" />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
