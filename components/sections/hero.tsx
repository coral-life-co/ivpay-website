import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] lg:min-h-[750px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Aerial view of a forest with a road cutting through it"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 100%, rgba(21, 56, 53, 0.7), transparent 40%), radial-gradient(circle at 0% 100%, rgba(28, 5, 87, 0.7), transparent 40%)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-4xl text-left">
            <h1 className="font-bold text-white text-5xl md:text-6xl lg:text-[4rem] leading-[1.1]">
              Unlock the potential
              <br />
              of Earth Observation
            </h1>
            <div className="mt-10">
              <Button
                asChild
                className="bg-gradient-to-r from-[#2AEAB9] to-[#16D19A] text-primary-blue hover:opacity-90 transition-opacity duration-300 font-bold text-base h-12 px-8 rounded-lg"
              >
                <Link href="https://live-eo.com/contact">Get a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;