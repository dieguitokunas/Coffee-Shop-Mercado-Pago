"use client"

import { UseCart } from "@/hooks/use-cart"
import { CartList } from "./components/cart-list"
import { ShopResume } from "./components/shop-resume"

export default function Page() {
    const {items}=UseCart()
    const prices=items.map(prices=>prices.attributes.price)
    return(
        <div className="px-2 py-1 sm:mx-20">
            <h1 className="text-3xl font-bold text-center mt-4 mb-10">Carrito de Compras</h1>
                <div className="flex max-md:flex-col justify-between gap-4">

                <div>
                    {items.length===0?(
                        <p className="text-center">No hay productos en el carrito.</p>
                    ):(
                       <CartList items={items}/>
                    )}
                </div>
                <ShopResume prices={prices}/>
                </div>

            </div>
    )
}