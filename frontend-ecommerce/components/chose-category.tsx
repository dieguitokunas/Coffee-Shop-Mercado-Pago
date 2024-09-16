"use client"
import { useGetCategories } from "@/api/useGetCategories"
import { CategoriesType } from "@/types/categories"
import { ResponseType } from "@/types/response"
import Link from "next/link"
import { Skeleton } from "./ui/skeleton"

export const ChoseCategory = () => {
    const { loading, result }: ResponseType = useGetCategories()
    return (

        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl text-center sm:pb-8">Elige tu tipo de café favorito</h3>

            <div className="grid max-sm:px-4 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 gap-2">
                {loading && (
                    Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="h-[440px] roundedx-xl bg-gray-400 dark:bg-white" />
                    ))
                )}
                {!loading && result !== null && (
                    result.map((category: CategoriesType) => (
                        <Link key={category.id} href={`/category/${category.attributes.slug}`}
                            className="relative max-w-xs overflow-hidden rounded-lg">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.attributes.mainImage.data.attributes.url}`} alt={category.attributes.categoryName}
                                className="sm:h-[400px] w-[300px] object-cover transition duration-300 ease-in-out rounded-lg hover:scale-110" loading="lazy" />
                            <p className="absolute w-full py-2 font-bold text-center text-white backdrop-blur-xl text-lg bottom-5">
                                {category.attributes.categoryName}
                            </p>
                        </Link>
                    ))
                )}

            </div>

        </div>
    )
}