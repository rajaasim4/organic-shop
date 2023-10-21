import Hero from "./Hero"
import Brands from "../../Layout/Brands/Brands"
import Map from "./Map"

const Contact = () => {
    return (
        <>
            <div className="max-w-[1700px] mx-auto">
                <Map />
                <Hero />
            </div>
            <Brands />
        </>
    )
}

export default Contact