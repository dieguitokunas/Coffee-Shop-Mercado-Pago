"use client"
import getProductBySlug from "@/api/getProductBySlug"
import { ProductsType } from "@/types/products"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import { SkeletonProduct } from "./components/skeleton-product"
import { CarouselProduct } from "./components/carousel-product"
import { InfoProduct } from "./components/info-product"
import Link from "next/link"


export default function ProductPage() {
    const params = useParams()
    const { productSlug } = params
    const { result, loading }: ResponseType = getProductBySlug(productSlug)

    return (
        <main className="flex justify-center">

            {result == null && loading && (
                <SkeletonProduct />
            )}

            {result !== null && !loading && result.map((product: ProductsType) => (
                <div key={product.id} className="p-4 m-6 md:m-20 flex max-md:flex-col max-md:items-center justify-center shadow-sm shadow-gray-600">
                    <div className="flex max-md:flex-col max-md:items-center md:justify-center md:gap-20">
                        <div>
                            <CarouselProduct images={result[0].attributes.images} />
                            <p className="flex justify-center gap-2 py-4 font-semibold">
                                <Link href={`/category`} className="rounded-full bg-black dark:bg-white text-white dark:text-black px-2">{product.attributes.taste}</Link>
                                <Link href={`/category`} className="rounded-full bg-yellow-900 text-white px-2">{product.attributes.origin}</Link>
                            </p>
                        </div>
                       
                       <InfoProduct product={product}/>

                    </div>


                </div>
            )
            )}
        </main>
    )
}