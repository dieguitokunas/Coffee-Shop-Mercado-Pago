import Link from "next/link"
import { buttonVariants } from "./ui/button"

export const Banner  =()=>{

    return(
        <>
        <div className="mt-4 text-center">
            <p className="">Sumérgete en una experiencia única</p>
            <h4 className="mt font-extrabold text-5xl">CaféExquisito</h4>
            <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>

        <div className="h-[350px] md:h-[900px] mt-5 object-scale-down bg-center bg-cover bg-[url('../public/banner.jpg')]"/>
        </>
    )
}