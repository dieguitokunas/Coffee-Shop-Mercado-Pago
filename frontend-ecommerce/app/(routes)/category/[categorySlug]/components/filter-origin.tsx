
import { useGetProductField } from "@/api/useGetProductField"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterResponse } from "@/types/filter"
import { useState } from "react"

export type FilterOriginProps={
    setFilterOrigin:(origin:string)=>void,
}

export const FilterOrigin = (props:FilterOriginProps) => {
    const {setFilterOrigin}=props
    const { result, loading }: FilterResponse = useGetProductField()
    const [originValue,setOriginValue]=useState('')

    const handleOriginValue=(value:string)=>{
        setOriginValue(value)
        setFilterOrigin(value)
    }
    
     const resetFilter=()=>{
         setOriginValue('')
         setFilterOrigin('')
     }

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result === null && (
                <p>Cargando origen...</p>
            )}
            <RadioGroup value={originValue} onValueChange={handleOriginValue}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
                <Button variant={"secondary"} className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={()=>resetFilter()} disabled={originValue===''?true:false}>
                    Reiniciar filtro
                    </Button>
            </RadioGroup>
        </div>
    )
}