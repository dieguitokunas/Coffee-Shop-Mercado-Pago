import { Button } from "@/components/ui/button"
import formatPrice from "@/lib/formatPrice"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export type ShopResumeItems = {
    prices: number[]
}

export const ShopResume = (props: ShopResumeItems) => {
    const { prices } = props
    const total=formatPrice(prices.reduce((acum, val) => {
         return acum + val
        }, 0)
)

    const createPref = async () => {
        try {
            const response = await fetch('/mercadopago', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [{
                        title: 'Purchase Summary',
                        id:"asd",
                        quantity: 1,
                        unit_price: parseFloat(total),
                    }]
                })
            })

            const data = await response.json()

            window.open(data)
            
        } catch (error) {
            console.log('request error:', error)
        }
    }


    return (
        <div className="max-w-xl">
            <div className=" p-6 rounded-lg dark:bg-slate-900 bg-slate-100">
                <div className="flex gap-10 items-center justify-between">

                    <p className=" text-2xl font-semibold">
                        Resumen de compra
                    </p>
                    <p className="font-bold text-2xl">
                        {total}
                    </p>
                </div>
                <Separator className="my-4 bg-slate-400" />
                <div className="flex justify-center">
                    <Button className="w-1/2" onClick={createPref}>Comprar</Button>
                </div>
            </div>

        </div>
    )
}