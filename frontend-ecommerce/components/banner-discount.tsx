import Link from "next/link"
import { buttonVariants } from "./ui/button"

export const BannerDiscount  =()=>{

    return(
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-primary text-2xl">consigue hasta un 25% de descuento</h2>
            <h3 className="mt-3 font-semibold">20% al gastar 100$ o 25% al gastar 150$. Usa el código WKDRCK</h3>
        <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
            <Link href="#" className={buttonVariants()}>Comprar</Link>
            <Link href="#" className={buttonVariants({variant:"outline"})}>Más información</Link>
        </div>
        </div>
    )
}