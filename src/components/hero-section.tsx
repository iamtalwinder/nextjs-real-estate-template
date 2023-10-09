import { HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 w-full">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between p-4 md:p-16 lg:p-24 gap-y-6">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 flex flex-col gap-y-4">
          <div className="flex items-center mb-2 mt-2 md:mt-0">
            <HomeIcon className="lg:h-8 lg:w-8 h-6 w-6 text-pink mr-2" />
            <span className="text-sm text-center font-bold text-gray-800">
              Real Estate Agency
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Property With Ease
          </h2>

          <p className="text-gray-700 mb-4 border-l border-solid border-gray-500 text-md pl-4 -mt-4">
            Explore our range of services designed to make your real estate
            journey seamless and stress-free.
          </p>

          <button className="bg-pink-darker text-white py-2 px-4  hover:bg-white hover:text-pink-darker border border-pink-darker transition max-w-fit m-auto md:m-0">
            Make An Enquiry
          </button>
        </div>

        <figure className="w-full lg:w-1/2">
          <Image
            src="/hero-banner.png"
            alt="Modern house model"
            className="w-full"
            height={300}
            width={300}
          />
        </figure>
      </div>
    </section>
  );
}
