import { Skeleton } from "./ui/skeleton"

type SkeletonProps={
    grid:number,
}

export const SkeletonSchema =(props:SkeletonProps)=>{
    const {grid}=props
    return(
     Array.from({length:grid}).map((_,index)=>(
        <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
            <Skeleton className="h-[125px] w-[250px] roundedx-xl bg-gray-400 dark:bg-white"/>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-gray-400 dark:bg-white"/>
                <Skeleton className="h-4 w-[250px] bg-gray-400 dark:bg-white"/>
            </div>
        </div>
     ))
    )
}