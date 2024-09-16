import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ProductsType } from '@/types/products'
import { toast } from '@/components/ui/use-toast'
interface CartStore {
    items: ProductsType[],
    addItem: (data: ProductsType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void
}
export const UseCart = create(persist<CartStore>((set, get) => (
    {
        items: [],
        addItem: (data: ProductsType) => {
            
        const currentItem = get().items
        const existingItem = currentItem.find(item => item.id === data.id)
        if (existingItem) {
            return toast({
                description: "El producto ya se encuentra en el carrito",
                variant: "destructive"
            })
        }

        set({
            items: [...get().items, data]
        })
        toast({
            description: "Producto agregado al carrito",
        })
    },
    removeItem: (id: number) => {
        set({
            items: [...get().items.filter(item => item.id !== id)]
        })
        toast({
              description: "Producto Eliminado del carrito",
              variant:"destructive"
          })
    },
    removeAll: () => {
        set({ items: [] })
        toast({
            description:"Carrito vaciado",
            variant:"destructive"
        })
    }
}), {
name:"CartStorage",
 storage:createJSONStorage(()=>localStorage)
}))