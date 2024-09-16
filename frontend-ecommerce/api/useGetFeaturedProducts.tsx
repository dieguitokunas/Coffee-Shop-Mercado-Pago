import { useEffect, useState } from "react"
export const useGetFeaturedProducts =()=>{
    
    const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const [result, setResult]=useState(null)
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
                console.log("Error in GetFeaturedProducts",error)
                setLoading(true)
            }
        })()
    },[loading])
    return{loading, result, error}
}