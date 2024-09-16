"use client"

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { SkeletonSchema } from "./skeleton-schema"
import { ResponseType } from "@/types/response"
import { ProductsType } from "@/types/products"
import { Card, CardContent } from "./ui/card"
import { Expand, ShoppingCart } from "lucide-react"
import Autoplay from 'embla-carousel-autoplay'
import { IconButton } from "./icon-button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { UseCart } from "@/hooks/use-cart"

export const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProducts()
    const {addItem}=UseCart()
    const router = useRouter()
    return (
        <div id="featured" className="max-w-6xl py-4 mx-auto light:bg-gray-100 sm:py-16 sm:px-24">
            <h3 className="px-6 text-center text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, }),]}>

                <CarouselContent >
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && (
                        result.map((product: ProductsType) => {
                            const { attributes, id } = product
                            const { slug, images, productName, taste, origin } = attributes
                            return (
                                <CarouselItem key={id} className="flex justify-center sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 max-sm:w-3/4 ">
                                        <Card className="py-10 border border-gray-400 dark:border-gray-600 h-[250px] flex flex-col items-center justify-center shadow-none gap-4">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2 group">
                                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`} alt="Image Featured"
                                                    className=" aspect-video object-contain" loading="lazy"/>
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 top-50 ">
                                                    <div className="flex flex-col w-fit items-center justify-center gap-y-6 ">
                                                        <IconButton onClick={() => router.push(`/product/${slug}`)} icon={<Expand size={20} className="flex items-center dark:text-gray-600" />} />
                                                        <IconButton onClick={() => addItem(product)} icon={<ShoppingCart size={20} className="flex items-center dark:text-gray-600" />} />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-4 px-8">
                                                <h3 className="font-bold text-lg">
                                                    {productName}
                                                </h3>
                                                <div className="flex justify-between items-center gap-3">
                                                    <p className="w-fit font-bold bg-black dark:bg-white rounded-full text-white dark:text-black px-2 py-1 cursor-pointer">{taste}</p>
                                                    <p className="w-fit font-bold bg-yellow-900 rounded-full text-white  px-2 py-1 cursor-pointer">{origin}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    )
}