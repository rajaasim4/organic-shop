import NavBar from "../Components/NavBar/NavBar";
import Brands from "../Layout/Brands/Brands";
import Hero from "../Layout/Hero/Hero";
import Shipping from "../Layout/Shipping/Shipping";
const Home = () => {
  return (
    <>
      <div className="bg-[#FBFBFB]">

        <NavBar />
        <Hero />
        <Shipping />
        <Brands />
      </div>
    </>
  );
};

export default Home;
