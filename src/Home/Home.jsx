import BestDeals from "../Layout/BestDeals/BestDeals";
import Brands from "../Layout/Brands/Brands";
import Hero from "../Layout/Hero/Hero";
import NoPlastic from "../Layout/NoPlastic/NoPlastic";
import Sale from "../Layout/Sale/Sale";
import Shipping from "../Layout/Shipping/Shipping";
import Testinomials from "../Layout/Testinomials/Testinomials";
import FeaturedProducts from "../Layout/FeaturedProducts/FeaturedProducts";
import { motion } from "framer-motion";
import PageTransition from "../utils/Helpers/Animation/PageTransition";

const Home = () => {
  return (
    <>
      <PageTransition>
        <Hero />
        <Shipping />
        <NoPlastic />
        <BestDeals />
        <FeaturedProducts />
        <Sale />
        <Testinomials />
      </PageTransition>
      <Brands />
    </>
  );
};

export default Home;
