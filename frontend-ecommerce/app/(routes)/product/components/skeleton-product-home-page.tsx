import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonSchema{
    grid:number
}
export const SkeletonProductHomePage  =(props:SkeletonSchema)=>{
    const {grid}=props
    return(
        Array.from({length:grid}).map((_,index)=>(
                <Skeleton key={index} className="flex flex-col  items-center gap-4 p-10 mb-2 border-b rounded-lg relative shadow-lg dark:shadow-gray-900 bg-gray-700">
                <Skeleton className=" size-[200px] rounded-lg"/>
                <Skeleton className=" w-[100px] h-[20px]"/>
                <div className="flex flex-col items-center gap-4">
                    <Skeleton className="w-[50px] h-[20px]"/>
                    <Skeleton className="w-[100px] h-[30px]"/>
                </div>
                </Skeleton>
            ))
        )

}