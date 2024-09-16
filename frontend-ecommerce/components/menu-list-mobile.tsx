import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Menu } from "lucide-react"
import Link from "next/link"

export const MenuListMobile  =()=>{

    return(
        <Popover>
            <PopoverTrigger className="sm:hidden">
                <Menu/>
            </PopoverTrigger>
           <PopoverContent className="w-fit">
            <Link className="block" href={"/category/granos"}>Café en granos</Link>
            <Link className="block" href={"/category/molido"}>Café molido</Link>
            <Link className="block" href={"/category/capsula"}>Café en cápsulas</Link>

           </PopoverContent>

        </Popover>
    )
}