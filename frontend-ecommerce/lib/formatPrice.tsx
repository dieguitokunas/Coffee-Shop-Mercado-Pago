export default function formatPrice(price:number){
    const formatedPrice=new Intl.NumberFormat('es-ES',{
        style:"currency",
        currency:"EUR"
    })
    const finalPrice=formatedPrice.format(price)
    return finalPrice
}