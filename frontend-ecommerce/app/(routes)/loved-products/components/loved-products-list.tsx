import { UseLovedProduct } from "@/hooks/use-loved-products";
import { ProductsType } from "@/types/products";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { X } from "lucide-react";
import Link from "next/link"
interface LovedProductsListProps{
    lovedProduct:ProductsType
}

export const LovedProductsList  =(props:LovedProductsListProps)=>{
    const {lovedProduct}=props
    const {removeLovedItem}=UseLovedProduct()
    return(
       
       <li className="max-sm:flex-col relative border rounded-lg flex mb-2">
                    <Link href={`/product/${lovedProduct.attributes.slug}`}>
                        <img 
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${lovedProduct.attributes.images.data[0].attributes.url}`} alt={lovedProduct.attributes.productName}
                            className=" w-[300px] h-[200px] object-cover" />
                    </Link>
                    <div className="h-full w-full">
                        <div>
                           <span className="flex max-sm:flex-col h-full max-sm:justify-center lovedProducts-center gap-4 sm:justify-between p-6">
                            <Link className="font-semibold cursor-pointer hover:underline" href={`/product/${lovedProduct.attributes.slug}`}>
                                {lovedProduct.attributes.productName}
                            </Link>
                            <div className="flex justify-center items-center gap-4">
                                <Link href={"/category"} className="text-xs rounded-full bg-black dark:bg-white text-white dark:text-black px-2">
                                    {lovedProduct.attributes.taste}
                                </Link>
                                <Link href="/category" className="text-xs rounded-full bg-yellow-900 text-white px-2">
                                    {lovedProduct.attributes.origin}
                                </Link>
                            </div>
                           </span>
                        </div>
                        <TooltipProvider >

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <X onClick={()=>removeLovedItem(lovedProduct.id)} className="text-red-800  cursor-pointer absolute top-0 right-0" />
                                </TooltipTrigger>
                                <TooltipContent className="bg-red-400">
                                    <p>
                                        Eliminar producto del carrito.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </li>
    )
}