import { cn } from "@/lib/utils"
interface IconButtonProps{
    onClick:()=>void,
    icon:React.ReactElement,
    className?:string
}

export const IconButton= (props:IconButtonProps)=>{
    const {onClick,icon,className}=props
    return(
        <button onClick={onClick} className={cn('rounded-full p-[4px]  bg-gray-200 dark:bg-white border hover:scale-110 transition',className)}>
            {icon}
        </button>
    )
}