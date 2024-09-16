import { FilterTypes } from "@/types/filter"
import { useEffect, useState } from "react"

export const useGetProductField  =()=>{
 
    const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`
    const [result, setResult]=useState<FilterTypes|null>(null)
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState("")
   
    useEffect(()=>{
        (async () => {
            try {
                const res=await fetch(url)
                const json=await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error:any) {
                setError(error)
                console.log("Error in useGetOriginField",error)
                setLoading(true)
            }
        })()
    },[loading])
    return{loading, result, error}
}