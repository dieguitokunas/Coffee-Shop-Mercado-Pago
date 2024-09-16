import { toast } from "@/components/ui/use-toast";
import { ProductsType } from "@/types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LovedProducts {
    lovedItems:ProductsType[],
    addLovedItem:(data:ProductsType)=>void,
    removeLovedItem:(id:number)=>void,
    removeAllLovedItems:()=>void
}

export const UseLovedProduct =create(persist<LovedProducts>((set,get)=>(
    {
        lovedItems:[],
        addLovedItem:(data:ProductsType)=>{
            const currentItem=get().lovedItems
            const existingItem=currentItem.find(item=>item.id===data.id)

            if(existingItem){
                return toast({
                    title:"El producto ya esta en la lista de favoritos",
                    variant:"destructive"
                })
            }
            set({
                lovedItems:[...get().lovedItems,data]
            })
            toast({
                title:"Producto agregado a favoritos"
            })
        },
        removeLovedItem:(id:number)=>{
            set({
                lovedItems: [...get().lovedItems.filter(item=>item.id!==id)]
            })
            toast({
                title:"Producto eliminado de favoritos",
                variant:"destructive"
            })
        },
        removeAllLovedItems:()=>{
            set({
                lovedItems:[]
            })
        }
    }
),{
    name:"LovedProducts",
    storage:createJSONStorage(()=>localStorage)
}))