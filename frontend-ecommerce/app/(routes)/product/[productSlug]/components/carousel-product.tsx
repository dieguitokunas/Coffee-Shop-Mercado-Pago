import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export type CarouselProductProps = {
    images: {
        data: {
            id: number,
            attributes: {
                name: string,
                url: string
            }
        }[]
    }
}
export const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props
    return (
        <Carousel opts={{ align: "center" }} className=" flex flex-col gap-4 items-center max-w-[250px]">
            <CarouselContent>
                {images.data.map((img) => (
                    <CarouselItem className="group " key={img.id}>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.attributes.url}`} alt={img.attributes.name}
                            className="aspect-video h-[250px] rounded-md w-[300px]" loading="lazy" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}