import MercadoPagoConfig, { Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const client = new MercadoPagoConfig({ accessToken: process.env.MP_API_KEY! })
    const preference=new Preference(client)
    try {
        const body=await request.json()

        const schema={
            items:body.items
        }
        
        const response=await preference.create({
            body:schema})

        return NextResponse.json(response.sandbox_init_point)
    } catch (error) {
        return NextResponse.json({error: error},{status:500})
    }
}