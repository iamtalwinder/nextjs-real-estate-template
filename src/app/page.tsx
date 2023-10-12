import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    iconSrc: "/service-1.png",
    title: "Buy a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "#",
  },
  {
    id: 2,
    iconSrc: "/service-2.png",
    title: "Rent a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "#",
  },
  {
    id: 3,
    iconSrc: "/service-3.png",
    title: "Sell a home",
    description:
      "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <HeroSection />
          <AboutSection />
          <section className="bg-gray-100 w-full p-block-24">
            <div className="mx-auto max-w-7xl px-4">
              <p className="text-primary w-max text-lg font-semibold py-1 px-5 bg-orange-400 bg-opacity-10 rounded-full mx-auto mb-4">
                Our Services
              </p>
              <h2 className="max-w-[30ch] text-dark-jungle-green leading-1.3 font-bold text-3xl md:text-4xl mb-12 m-auto w-max">
                Our Main Focus
              </h2>

              <ul className="flex flex-wrap justify-center gap-8 w-full">
                {servicesData.map((service) => (
                  <li className="md:w-[31%]" key={service.id}>
                    <div className=" bg-white text-center py-12 px-8 shadow-lg flex flex-col gap-y-8 relative service-card">
                      <div className="text-primary h-24 grid place-items-center text-xl rounded-3xl">
                        <Image
                          src={service.iconSrc}
                          alt={`Service icon for ${service.title}`}
                          width={200}
                          height={200}
                          className="overflow-auto"
                        />
                      </div>
                      <h3 className="text-dark-jungle-green leading-1.3 text-2xl md:text-3xl font-semibold text-center transition-all duration-300 ease-in-out">
                        <a
                          className="hover:text-orange-soda focus:text-orange-soda"
                          href={service.link}
                        >
                          {service.title}
                        </a>
                      </h3>
                      <p className="text-cadet text-sm leading-1.8">
                        {service.description}
                      </p>
                      <a
                        href={service.link}
                        className="text-opal text-sm font-semibold flex justify-center gap-1 items-cente focus:text-orange-soda relative card-link"
                      >
                        <span>
                          Find A Home <span className="text-3xl">&rarr;</span>
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
