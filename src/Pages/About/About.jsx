import Brands from "../../Layout/Brands/Brands";
import OurTeam from "./OurTeam";
import Hero from "./Hero";
import PageTransition from "../../utils/Helpers/Animation/PageTransition";

const About = () => {
  return (
    <>
      <PageTransition>
        <Hero />
        <OurTeam />
      </PageTransition>

      <Brands />
    </>
  );
};

export default About;
