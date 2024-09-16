import { IconButton } from "@/components/icon-button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import Link from "next/link"
import { useRouter } from "next/navigation"

import formatPrice from "@/lib/formatPrice"
import { ProductsType } from "@/types/products"
import { Expand, ShoppingCart } from "lucide-react"
import { UseCart } from "@/hooks/use-cart"

export type ProductCardProps = {
    product: ProductsType
}

export const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const {addItem}=UseCart()
    const router = useRouter()
    return (
        <div
            className="relative p-2 h-[200px] max-md:max-w-xs transition-all duration-100 rounded-lg dark:hover:shadow-gray-900 hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="text-xs rounded-full bg-black dark:bg-white text-white dark:text-black px-2">{product.attributes.taste}</p>
                <p className="text-xs rounded-full bg-yellow-900 text-white px-2">{product.attributes.origin}</p>
            </div>

            <Carousel
                opts={{ align: "center" }}
                className="w-full">
                <CarouselContent>
                    {product.attributes.images.data.map((image) => (
                        <CarouselItem key={image.id} className="h-[130px] group transition-transform ease-in-out  rounded-xl">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} alt={`${product.attributes.productName}`}
                                className="aspect-video cursor-pointer object-cover w-full h-[130px]" loading="lazy" 
                                onClick={()=>router.push(`/product/${product.attributes.slug}`)}
                                />
                            <div className="absolute flex justify-end gap-2 w-full opacity-0 group-hover:opacity-100 px-6 transition-all top-2">
                                <IconButton icon={<Expand size={20} className="z-10 text-gray-600" />}
                                onClick={() => router.push(`/product/${product.attributes.slug}`)}>
                                </IconButton>
                                <IconButton icon={<ShoppingCart size={20} className="text-gray-600" />} 
                                onClick={() => addItem(product) }>
                                </IconButton>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="text-center cursor-pointer px-4" onClick={() => router.push(`/product/${product.attributes.slug}`)}>
                <p className="font-medium text-lg">{product.attributes.productName}</p>
                <p className="font-bold">{formatPrice(product.attributes.price)}</p>
            </div>

        </div>
    )
}