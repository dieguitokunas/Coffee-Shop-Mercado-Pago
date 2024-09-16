import formatPrice from "@/lib/formatPrice"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { ProductsType } from "@/types/products"
import { Separator } from "@/components/ui/separator"
import { Heart, X } from "lucide-react"
import { UseCart } from "@/hooks/use-cart"
import { UseLovedProduct } from "@/hooks/use-loved-products"

export type InfoProductType={
    product:ProductsType
}

export const InfoProduct  =(props:InfoProductType)=>{
    const {product}=props
    const {addItem}=UseCart()
    const {addLovedItem}=UseLovedProduct()
    return(
        <div className="flex gap-5 max-w-md flex-col items-center justify-evenly relative text-center">
        <p className="font-bold text-xl">{product.attributes.productName}</p>
<Separator/>
        <p className="max-w-full font-medium break-words whitespace-nowrap text-wrap">{product.attributes.description}</p>
<Separator/>
        <p className="flex flex-col  gap-2 items-center">
            <span className="font-bold text-lg">
                {formatPrice(product.attributes.price)}
            </span>
            <span className="flex items-center gap-4">
        <Link href={"/cart"} className={buttonVariants()} onClick={()=>addItem(product)}>
                    Comprar
                </Link>
            </span>
        </p>


        <Heart onClick={()=>addLovedItem(product)}
    className="absolute right-0 top-0 hover:fill-red-600 cursor-pointer"/>
    </div>
    )
}