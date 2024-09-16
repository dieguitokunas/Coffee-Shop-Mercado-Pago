import { NextApiRequest, NextApiResponse } from "next";
import MercadoPagoConfig, { Preference } from "mercadopago";

export default async function Purchase() {
    const client = new MercadoPagoConfig({ accessToken: process.env.MP_API_KEY! })
    const preference = new Preference(client)

    preference.create({
        body: {
            items: [
                {
                    title:"Product",
                    id:"asd",
                    quantity:1,
                    unit_price:2000,
                }]
        }
    }).then(console.log).catch(console.log)

}