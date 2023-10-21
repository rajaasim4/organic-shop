import Brands from "../../Layout/Brands/Brands"
import OurTeam from "./OurTeam"
import Hero from "./Hero"

const About = () => {
    return (
        <>
            <div className="max-w-[1700px] mx-auto">

                <Hero />
                <OurTeam />
            </div>
            <Brands />
        </>
    )
}

export default About