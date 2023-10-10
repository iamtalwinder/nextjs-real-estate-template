import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import {
  HomeIcon,
  PhotoIcon,
  GlobeEuropeAfricaIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <HeroSection />
          <section className="w-full p-block-24">
            <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between px-4">
              <figure className="w-full lg:w-2/5 flex-grow relative lg:pr-24">
                <Image
                  src="/about-banner-1.png"
                  alt="Modern house model"
                  className="w-full max-w-max-content"
                  height={700}
                  width={700}
                />

                <Image
                  src="/about-banner-2.jpg"
                  alt="Modern house model"
                  className="absolute bottom-24 left-4 w-1/2 rounded-md"
                  height={400}
                  width={400}
                />
              </figure>

              <div className="w-full lg:w-2/5 flex-grow mb-4 lg:mb-0 flex flex-col gap-y-4">
                <p className="text-primary text-lg font-semibold py-1 px-5 bg-orange-400 bg-opacity-10 rounded-full mx-auto mb-4">
                  About Us
                </p>

                <h2 className="max-w-[30ch] text-dark-jungle-green leading-1.3 font-bold text-3xl md:text-4xl">
                  The Leading Real Estate Rental Marketplace.
                </h2>

                <p className="text-cadet text-md mb-8 leading-1.7">
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>

                <ul className="grid md:grid-cols-2 mb-4">
                  <li className="flex justify-start items-center gap-4 mb-4 md:mb-8">
                    <div className="bg-misty-rose h-45 w-45 rounded-full grid place-items-center">
                      <HomeIcon className="lg:h-6 lg:w-6 h-5 w-5 text-primary m-3" />
                    </div>

                    <p className="text-cadet text-md">Smart Home Design</p>
                  </li>

                  <li className="flex justify-start items-center gap-4 mb-4 md:mb-8">
                    <div className="bg-misty-rose h-45 w-45 rounded-full grid place-items-center">
                      <PhotoIcon className="lg:h-6 lg:w-6 h-5 w-5 text-primary m-3" />
                    </div>

                    <p className="text-cadet text-md">Beautiful Scene Around</p>
                  </li>

                  <li className="flex justify-start items-center gap-4 mb-4 md:mb-8">
                    <div className="bg-misty-rose h-45 w-45 rounded-full grid place-items-center">
                      <GlobeEuropeAfricaIcon className="lg:h-6 lg:w-6 h-5 w-5 text-primary m-3" />
                    </div>

                    <p className="text-cadet text-md">Exceptional Lifestyle</p>
                  </li>

                  <li className="flex justify-start items-center gap-4 mb-4 md:mb-8">
                    <div className="bg-misty-rose h-45 w-45 rounded-full grid place-items-center">
                      <ShieldExclamationIcon className="lg:h-6 lg:w-6 h-5 w-5 text-primary m-3" />
                    </div>

                    <p className="text-cadet text-md">Complete 24/7 Security</p>
                  </li>
                </ul>

                <p className="bg-primary bg-opacity-5 text-cadet text-md font-medium leading-1.3 border-l-4 py-4 px-6 border-orange-soda mb-8">
                  "Enimad minim veniam quis nostrud exercitation llamco laboris.
                  Lorem ipsum dolor sit amet"
                </p>

                <button className="bg-primary text-white py-2 px-4  hover:bg-white hover:text-primary border border-primary transition max-w-fit m-auto md:m-0">
                  Our Services
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
