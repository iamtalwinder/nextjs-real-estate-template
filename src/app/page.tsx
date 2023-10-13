import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSerction from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <HeroSection />
          <AboutSection />
          <ServicesSerction />
        </article>
      </main>
    </>
  );
}
