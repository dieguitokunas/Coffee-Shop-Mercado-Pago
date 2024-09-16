import { UseCart } from "@/hooks/use-cart"
import { ProductsType } from "@/types/products"
import Link from "next/link"
import { X } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { buttonVariants } from "@/components/ui/button"

export type CartListProps = {
    items: ProductsType[]
}

export const CartList = (props: CartListProps) => {
    const { items } = props
    const { removeItem,removeAll } = UseCart()
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} className=" relative  h-[150px] border rounded-lg flex mb-2">
                    <Link href={`/product/${item.attributes.slug}`}>
                        <img 
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.attributes.images.data[0].attributes.url}`} alt={item.attributes.productName}
                            className="min-w-[150px] w-[200px] h-full object-cover" />
                    </Link>
                    <div className="h-full w-full">
                        <div>
                           <span className="flex max-sm:flex-col h-full max-sm:justify-center items-center gap-4 sm:justify-between p-6">
                            <Link className="font-semibold cursor-pointer hover:underline" href={`/product/${item.attributes.slug}`}>
                                {item.attributes.productName}
                            </Link>
                            <p className="flex gap-4">
                                <Link href={"/category"} className="text-xs rounded-full bg-black dark:bg-white text-white dark:text-black px-2">
                                    {item.attributes.taste}
                                </Link>
                                <Link href="/category" className="text-xs rounded-full bg-yellow-900 text-white px-2">
                                    {item.attributes.origin}
                                </Link>
                            </p>
                           </span>
                        </div>
                        <TooltipProvider >

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <X onClick={()=>removeItem(item.id)} className="text-red-800 cursor-pointer absolute top-0 right-0" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="bg-red-400 p-2 ">
                                        Eliminar producto del carrito.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </li>
            ))}
            <div className="flex justify-center items-center ">
            <button className={buttonVariants({variant:"destructive"})}
            onClick={()=>removeAll()}>Vaciar carrito</button>
            </div>
        </ul>
    )
}