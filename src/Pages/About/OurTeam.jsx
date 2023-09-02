import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import Helmet from "../../Components/Helmet/Helmet"
import Img1 from "../../assets/Images/Team1.jpg"
import Img2 from "../../assets/Images/Team2.jpg"
import Img3 from "../../assets/Images/Team3.jpg"
import Img4 from "../../assets/Images/Team4.jpg"


import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const OurTeam = () => {
    return (

        <Helmet>
            <div className="flex justify-center flex-col items-center">
                <HeadingBtn title="Our Team" />
                <h1 className="text-5xl font-light text-center my-8">Meet Our Team</h1>

            </div>
            <div className="pb-24 mt-10 flex justify-evenly flex-wrap">
                <TeamCard teamImg={Img1} />
                <TeamCard teamImg={Img2} />
                <TeamCard teamImg={Img3} />
                <TeamCard teamImg={Img4} />


            </div>
        </Helmet>
    )
}

const TeamCard = ({ teamImg }) => {
    return (
        <div className="w-[337px] h-[371px] relative rounded-lg group">
            <img src={teamImg} alt="" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-28 bg-primary_dark_green rounded-lg group-hover:bg-gradient_bg duration-300 flex flex-col justify-center px-2">
                <h3 className="text-white text-2xl"> Simmons Grey</h3>
                <div className="flex justify-between items-center">
                    <h4 className="text-gray-300 text-lg ">CEO</h4>
                    <div className="flex  justify-evenly gap-2 opacity-0 group-hover:opacity-100 duration-300  ">
                        <span className="cursor-pointer text-white  text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                            <FaFacebookF />
                        </span>
                        <span className="cursor-pointer text-white text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                            <FaTwitter />
                        </span>
                        <span className="cursor-pointer text-white text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                            <FaYoutube />
                        </span>
                        <span className="cursor-pointer text-white text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                            <FaInstagram />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam