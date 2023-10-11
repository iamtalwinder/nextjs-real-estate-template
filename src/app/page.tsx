import AboutSection from "@/components/about-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <HeroSection />
          <AboutSection />
        </article>
      </main>
    </>
  );
}
