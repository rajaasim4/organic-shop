import NavBar from "../Components/NavBar/NavBar";
import BestDeals from "../Layout/BestDeals/BestDeals";
import Brands from "../Layout/Brands/Brands";
import Hero from "../Layout/Hero/Hero";
import NoPlastic from "../Layout/NoPlastic/NoPlastic";
import Sale from "../Layout/Sale/Sale";
import Shipping from "../Layout/Shipping/Shipping";
import Testinomials from "../Layout/Testinomials/Testinomials";
import Footer from "../Components/Footer/Footer"
const Home = () => {
  return (
    <>
      <div className="bg-[#FBFBFB]">

        <NavBar />
        <Hero />
        <Shipping />
        <NoPlastic />
        <BestDeals />
        <Sale />
        <Testinomials />
        <Brands />
        <Footer />
      </div>
    </>
  );
};

export default Home;
