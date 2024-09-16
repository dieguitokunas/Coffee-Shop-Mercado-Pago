import { useGetProductField } from "@/api/useGetProductField"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterResponse } from "@/types/filter"
import { useState } from "react"

export type FilterTasteProps = {
    setFilterTaste: (taste: string) => void
}

export const FilterTaste = (props: FilterTasteProps) => {
    const { setFilterTaste } = props
    const { result }: FilterResponse = useGetProductField()
    const [tasteValue, setTasteValue] = useState('')

    const handleTasteValue = (value: string) => {
        setTasteValue(value)
        setFilterTaste(value)
    }

    const resetTaste = () => {
        setTasteValue('')
        setFilterTaste('')
    }
    return (
        <>
            <p className="mb-3 font-bold">Taste</p>
            <RadioGroup value={tasteValue} onValueChange={handleTasteValue}>
                {result !== null && result.schema.attributes.taste.enum.map((taste: string) => (
                    <div key={taste} className="flex items-center space-x-2">
                        <RadioGroupItem id={taste} value={taste} />
                        <Label htmlFor={taste}>{taste}</Label>
                    </div>
                ))}
                <Button variant={"secondary"} className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    onClick={() => resetTaste()}
                    disabled={tasteValue === '' ? true : false}>
                    Reiniciar filtro
                </Button>
            </RadioGroup>
        </>
    )
}