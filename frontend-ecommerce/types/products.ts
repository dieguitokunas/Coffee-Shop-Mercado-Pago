export type ProductsType = {
    id: number,
    attributes: {
        productName: string,
        slug: string,
        description: string,
        active: boolean,
        price: number,
        origin: string,
        taste: string,
        isFeatured: boolean,
        images: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }[]
        }
    }
}