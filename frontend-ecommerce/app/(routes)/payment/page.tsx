'use client'
import {MercadoPagoConfig, Preference} from 'mercadopago'
export default function Page() {
    const client=new MercadoPagoConfig({accessToken:'TEST-1771257910014546-090301-6f59f51efbe804c95760833e68603cc0-1303079348'})
    async function Buy(formData:FormData) {
        
        const preference=new Preference(client).create({
            body:{
                items:[{
                    id:"asd",
                    title:'2',
                    quantity:1,
                    unit_price:Number(formData.get('amount'))
                }]
            }
        })
    }
    return(

<form action={Buy}>
    <input type="text" name="amount" />
    <button type="submit">enviar</button>
</form>
    )
}