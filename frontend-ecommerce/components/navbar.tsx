"use client"
import { BaggageClaim, Heart, ShoppingCart, } from "lucide-react"
import { useRouter } from "next/navigation"
import { MenuList } from "./menu-list"
import { MenuListMobile } from "./menu-list-mobile"
import { ModeToggle } from "./toggle-theme"
import { UseCart } from "@/hooks/use-cart"

  
export const Navbar = () => {

    const router=useRouter()
    const cart=UseCart()
    
    
    return (
        <header className="flex items-center justify-between w-full mx-auto py-4 max-sm:px-10 md:px-20">
            <h1 className="text-2xl md:text-3xl cursor-pointer" onClick={()=>router.push("/")}>
                WKDRCK
                <span className="font-bold">Coffe </span>
            </h1>
           <MenuList />
         <MenuListMobile/>
            <div className="*:cursor-pointer flex items-center justify-between gap-2">
                {cart.items.length===0?(
                    <ShoppingCart strokeWidth="1" onClick={()=>router.push("/cart")}/>
                ):(
                    <div className="flex gap-1">
                        <BaggageClaim onClick={()=>router.push("/cart")}/>
                        <span>{cart.items.length}</span>
                    </div>
                )}
                <Heart strokeWidth="1" onClick={()=>router.push("/loved-products")}/>
                <ModeToggle /> 
            </div>
        </header>
    )
}