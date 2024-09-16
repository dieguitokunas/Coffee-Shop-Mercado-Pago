"use client"

import { useGetCategoryProduct } from "@/api/useGetCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import { FilterControlCategory } from "./components/filter-control-category"
import { SkeletonSchema } from "@/components/skeleton-schema"
import { ProductCard } from "./components/product-card"
import { ProductsType } from "@/types/products"
import { useState } from "react"


export default function CategoriesPage() {
    const params = useParams()
    const { categorySlug } = params
    const { loading, result }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState('')
    const [filterTaste, setFilterTaste] = useState('')
    const FilteredProduct = result === null && loading ?
        result
        : result.filter((product: ProductsType) =>
            (!filterTaste||product.attributes.taste === filterTaste) &&
            (!filterOrigin||product.attributes.origin === filterOrigin)
        )
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {!loading && result !== null && (
                <h2 className="font-medium text-center text-3xl">
                    Café {result.length!==0&&result[0].attributes.category.data.attributes.categoryName}
                </h2>
            )}
            <Separator />
            <div className="sm:flex gap-10">
                <FilterControlCategory setFilterTaste={setFilterTaste} setFilterOrigin={setFilterOrigin} />
                <div className="grid max-sm:justify-center gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {FilteredProduct !== null && !loading && (
                        FilteredProduct.map((product: ProductsType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
                    {FilteredProduct!==null&&FilteredProduct.length===0&&(
                        <p className="text-center flex items-center justify-center text-lg font-medium">Ningun resultado coincide con los filtros seleccionados.</p>
                    )}
            </div>
        </div>
    )
}