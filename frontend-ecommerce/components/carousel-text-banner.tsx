"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
 
const dataCarouselTop=[
    {
    title:"Envío en 24/48 horas",
    description:"Como cliente VIP, tus envíos siempre tendrán prioridad.",
    link:""
},
    {
    title:"Consigue hasta un 20% de descuento en compras superiores a 40$",
    description:"-20% al gastar 100$ y -25% al gastar 150$. Utiliza el cupón de descuento.",
    link:""
},
    {
    title:"Devoluciones y entregas gratuitas",
    description:"Como cliente, tienes envíos y devoluciones gratuitas durante un plazo de 30 días.",
    link:""
},
    {
    title:"Comprar novedades",
    description:"Todas las novedades al 50% de descuento.",
    link:""
},
]


export const CarouselTextBanner  =()=>{
    const router=useRouter()

    return(
       <div className="bg-gray-200 dark:bg-primary  flex items-center justify-center">
         <Carousel className="w-full max-w-4xl mx-auto" 
         opts={{loop:true}}
         plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
         >
      <CarouselContent>
      {dataCarouselTop.map((data,index)=>(
        <CarouselItem  key={index} onClick={()=>router.push(data.link)}>
            <div>
                <Card className=" shadow-none border-none bg-transparent">
                    <CardContent className="flex flex-col text-center text-sm items-center p-2 justify-center ">
                        <span className="font-bold sm:text-lg text-wrap dark:text-secondary">{data.title}</span>
                        <span className="text-xs sm:text-sm text-wrap dark:text-secondary">{data.description}</span>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
      ))}
      </CarouselContent>
    </Carousel>
       </div>
    )
}