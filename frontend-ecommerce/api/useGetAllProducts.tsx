import { useEffect, useState } from "react"

export const useGetAllProducts  =()=>{
    const url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`
    const [result,setResult]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
       ( async () => {
            try {
                const res=await fetch(url)
                const json=await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error:any) {
                console.error(error)
                setError(error)
                setLoading(true)
            }
        })()
    },[url])
    return{loading,result,error}
}