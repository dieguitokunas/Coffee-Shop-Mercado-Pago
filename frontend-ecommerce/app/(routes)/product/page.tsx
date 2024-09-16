"use client"

import { useGetAllProducts } from "@/api/useGetAllProducts"
import { buttonVariants } from "@/components/ui/button"
import { UseCart } from "@/hooks/use-cart"
import { UseLovedProduct } from "@/hooks/use-loved-products"
import formatPrice from "@/lib/formatPrice"
import { ProductsType } from "@/types/products"
import { ResponseType } from "@/types/response"
import { Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { SkeletonProductHomePage } from "./components/skeleton-product-home-page"

export default function ProductsPage() {
    const {result, loading}:ResponseType=useGetAllProducts()
    const {addItem}=UseCart()
    const {addLovedItem}=UseLovedProduct()
    const router=useRouter()
    return(
        <div className="my-10 mx-4">
            <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {
            loading&&result===null&&(
                <SkeletonProductHomePage grid={5}/>     
            )
        }
        
        
        {!loading&&result&&result.map((p:ProductsType)=>(
            <li key={p.id} className="mb-2 border-b rounded-lg relative shadow-lg dark:shadow-gray-900">

                <div className="flex justify-center">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${p.attributes.images.data[0].attributes.url}`} alt={p.attributes.productName}
            className="size-[200px]  object-cover rounded-lg"/>
                </div>
                <div className="flex flex-col justify-between gap-5 py-5 items-center">

                <p className="font-semibold">{p.attributes.productName}</p>
                <div className="text-center flex flex-col gap-4">
                <p className="font-bold">{formatPrice(p.attributes.price)}</p>
                <button className={buttonVariants()}
                onClick={()=>{
                    addItem(p)
                    router.push("/cart")
                }}
                >Comprar</button>
                </div>
                </div>
                    <Heart 
                    onClick={()=>addLovedItem(p)}
                    className="cursor-pointer absolute top-0 right-0"/>
            </li>
        ))}
        </ul>
        </div>
    )
}