import Hero from "./Hero";
import Brands from "../../Layout/Brands/Brands";
import Map from "./Map";
import PageTransition from "../../utils/Helpers/Animation/PageTransition";

const Contact = () => {
  return (
    <>
      <PageTransition>
        <Map />
        <Hero />
      </PageTransition>
      <Brands />
    </>
  );
};

export default Contact;
