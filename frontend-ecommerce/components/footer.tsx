import { Separator } from "./ui/separator"
import Link from "next/link"


    const dataFooter=[{
        name:"Sobre nosotros",
        link:"#"
    },{
        name:"Productos",
        link:"#"
    },{
        name:"Mi cuenta",
        link:"#"
    },{
        name:"Política de privacidad",
        link:"#"
    }
]

export const Footer  =()=>{

    return(
        <footer className="mt-4">

    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <p>
                <span className="font-bold">WKDRCK</span>
                Ecommerce
            </p>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0 font-medium text-gray-500  dark:text-gray-400">
        {dataFooter.map((data, index)=>(
            <li key={index}>
                <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
            </li>
        ))}
        </ul>
        </div>
        <Separator className="my-6 lg:my-8 border-gray-200 dark:border-gray-700 "/>
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            &copy;2024
            <Link href="#">WKDRCK.</Link> 
            Todos los derechos reservados.
        </span>
        
    </div>
        </footer>
    )
}