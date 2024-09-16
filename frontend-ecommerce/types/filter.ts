export type FilterResponse={
    result:FilterTypes|null,
    loading:boolean,
    error:string
}

export type FilterTypes={
    schema:{
        attributes:{
            origin:{
                enum:any
            },
            taste:{
                enum:any
            }
        }
    }
}