import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Rebuild = () => {
  return (
    <>
      <div
        className={cn(
          "flex w-full items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <Link href="/sign-up">
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            Rebuild
          </div>
        </Link>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        After the 7th of October a lot of people were displaced from the South
        of Israel. They want to return home and they want to feel that they
        still have home. And YOU can help them.
      </div>
    </>
  );
};
