import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-[696px]">
      <div className="flex items-center justify-center flex-col gap-4 w-full h-full">
        <div
          className={cn(
            "text-sm md:text-xl text-blacks mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          After the 7th of October people were displaced. Many want to return
          home. You can help them.
        </div>
        <div className="flex items-center justify-center flex-col gap-4 w-full h-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div
                  className={cn(
                    "flex w-full items-center justify-center flex-col",
                    headingFont.className
                  )}
                >
                  <div className="text-12xl md:text-9xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    Restore
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div
                  className={cn(
                    "flex w-full items-center justify-center flex-col",
                    headingFont.className
                  )}
                >
                  <div className="text-12xl md:text-9xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    Rebuild
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div
                  className={cn(
                    "flex w-full items-center justify-center flex-col",
                    headingFont.className
                  )}
                >
                  <div className="text-12xl md:text-9xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    Revive
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          className="mt-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
          size="lg"
          asChild
        >
          <Link href="/board/404d6779-9e87-444b-bcc7-e13708d63b23">
            Volunteer
          </Link>
        </Button>
        <Button
          className="mt-6 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
          size="lg"
          asChild
        >
          <Link href="/sign-up">Donate</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
