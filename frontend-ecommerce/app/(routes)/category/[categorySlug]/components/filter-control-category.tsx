import { IconButton } from "@/components/icon-button"
import { FilterOrigin } from "./filter-origin"
import { FilterTaste } from "./filter-taste"

export type FilterControlCategoryProps={
    setFilterOrigin:(origin:string)=>void,
    setFilterTaste:(origin:string)=>void
}

export const FilterControlCategory  =(props:FilterControlCategoryProps)=>{
    const {setFilterOrigin,setFilterTaste}=props
    return(
        <div className="sm:w-fit sm:mt-5 px-3">
        <FilterOrigin setFilterOrigin={setFilterOrigin}/>
        <FilterTaste setFilterTaste={setFilterTaste}/>
        </div>
    )
}