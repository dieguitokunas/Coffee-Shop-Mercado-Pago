"use client"

import { UseLovedProduct } from "@/hooks/use-loved-products"
import { LovedProductsList } from "./components/loved-products-list"
import { buttonVariants } from "@/components/ui/button"

export default function LovedProducts() {
    const { lovedItems,removeAllLovedItems } = UseLovedProduct()

    return (
        <div className="text-center sm:py-32 max-sm:px-10 px-4">
            <h1 className="mb-10 sm:text-2xl">
                Productos que te gustan
            </h1>
            <div>
                <div>
                    {lovedItems.length === 0? (
                        <p>No hay productos que te gusten.</p>
                    ):(  
                        <ul className="flex flex-col items-center">
                        {lovedItems.map((products) => (
                            <LovedProductsList key={products.id} lovedProduct={products} />
                        ))}
                        <div className="flex justify-center">
                        <button 
                        onClick={()=>removeAllLovedItems()}
                        className={buttonVariants({variant:"destructive"})}>Eliminar todos los favoritos</button>
                        </div>
                    </ul>
                    )}
                </div>
            </div>
        </div>
    )


}