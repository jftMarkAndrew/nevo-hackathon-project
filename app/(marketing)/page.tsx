import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Rebuild } from "./_components/rebuild";

const MarketingPage = () => {
  return (

    <div className="flex items-center justify-center flex-col w-full">
      

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Rebuild />
          </CarouselItem>
          <CarouselItem>
            <Rebuild />
            </CarouselItem>
          <CarouselItem>
            <Rebuild />
            </CarouselItem>
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>


      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Let&apos;s get started!
        </Link>
      </Button>

    </div>
  );
};

export default MarketingPage;
