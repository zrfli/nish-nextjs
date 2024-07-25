import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BaseCarousel() {
  return (
    <Carousel className="w-full max-w-screen">
      <CarouselContent>
        <CarouselPrevious />
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
              <div className="flex h-96 w-full object-cover">
                <Image src='/0ce3cfb8-dcca-47f1-afd7-db00dab10be0.webp' width={1536} height={384} alt="" />
            </div>
          </CarouselItem>
        ))}
        <CarouselNext />
      </CarouselContent>
    </Carousel>
  )
}