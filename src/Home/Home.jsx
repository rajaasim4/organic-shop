
import BestDeals from "../Layout/BestDeals/BestDeals";
import Brands from "../Layout/Brands/Brands";
import Hero from "../Layout/Hero/Hero";
import NoPlastic from "../Layout/NoPlastic/NoPlastic";
import Sale from "../Layout/Sale/Sale";
import Shipping from "../Layout/Shipping/Shipping";
import Testinomials from "../Layout/Testinomials/Testinomials";
import FeaturedProducts from "../Layout/FeaturedProducts/FeaturedProducts";

const Home = () => {

  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Hero />
        <Shipping />
        <NoPlastic />
        <BestDeals />
        <FeaturedProducts />
        <Sale />
        <Testinomials />
      </div>
      <Brands />
    </>
  );
};

export default Home;
