"use client"
 
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
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

// Tariffs for residential use in CFE
const tarifasCFE = [
  {
    value: "1",
    label: "Tarifa 1",
    description: "Baja demanda hasta 25 kWh"
  },
  {
    value: "1A",
    label: "Tarifa 1A",
    description: "Baja demanda 25-50 kWh"
  },
  {
    value: "1B",
    label: "Tarifa 1B",
    description: "Baja demanda 50-100 kWh"
  },
  {
    value: "1C",
    label: "Tarifa 1C",
    description: "Media demanda 100-200 kWh"
  },
  {
    value: "1D",
    label: "Tarifa 1D",
    description: "Alta demanda 200-500 kWh"
  },
  {
    value: "1E",
    label: "Tarifa 1E",
    description: "Muy alta demanda 500-1000 kWh"
  },
  {
    value: "1F",
    label: "Tarifa 1F",
    description: "Extremadamente alta demanda más de 1000 kWh"
  },
  {
    value: "DAC",
    label: "Tarifa DAC",
    description: "Doméstica de Alto Consumo"
  },
  {
    value: "PDBT",
    label: "Tarifa PDBT",
    description: "Para negocios en baja tensión con consumo hasta 25 kWh al mes"
  },
  {
    value: "GDBT",
    label: "Tarifa GDBT",
    description: "Para negocios en baja tensión que superan los 25 kWh al mes"
  }
]


interface ComboboxTarifasProps {
  className?: string;
  onSelectTarifa: (value: string) => void;
}

export default function ComboboxTarifas({ className, onSelectTarifa }: ComboboxTarifasProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
    onSelectTarifa(currentValue === value ? "" : currentValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[300px] justify-between", className)}
        >
          {value
            ? tarifasCFE.find((tarifa) => tarifa.value === value)?.label
            : "Selecciona tu tarifa..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Busca tu tarifa..." />
          <CommandList>
            <CommandEmpty>No se encontró ninguna tarifa.</CommandEmpty>
            <CommandGroup>
              {tarifasCFE.map((tarifa) => (
                <CommandItem
                  key={tarifa.value}
                  value={tarifa.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === tarifa.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col">
                    <span>{tarifa.label}</span>
                    <span className="text-sm text-muted-foreground">{tarifa.description}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
