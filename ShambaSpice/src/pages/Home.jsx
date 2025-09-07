import AboutInfo from "../components/AboutInfo";
import { HeroCard } from "../components/Card";
import HeroCardnfo from "../components/HeroCardInfo";
import ProductInfo from "../components/ProductInfo";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen" data-aos="fade-down">
        <HeroCard
          img="/home2.jpg"
          title="Welcome To ShambaSpice"
          subtitle="Smart Tools for Smarter Farming"
        />
      </div>

      {/* Info Cards */}
      <div data-aos="fade-up" data-aos-delay="100">
        <HeroCardnfo />
      </div>

      <div data-aos="zoom-in-up" data-aos-delay="200">
        <AboutInfo />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <ProductInfo />
      </div>
    </>
  );
}
