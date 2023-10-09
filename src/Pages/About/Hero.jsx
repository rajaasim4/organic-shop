import Helmet from "../../Components/Helmet/Helmet"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import Img1 from "../../assets/Images/about-img.jpg"
import Img2 from "../../assets/Images/about-img2.jpg"
const Hero = () => {
    return (
        <Helmet>
            <div className="flex pb-20 gap-x-9 slg:flex-col slg:gap-y-10">
                <div className="w-1/2 relative  min-h-[600px] overflow-hidden slg:w-full sm:min-h-[360px]">
                    <div className="bg-primary_green rounded-lg w-[454px] h-[250px] absolute top-16 right-10 z-10 sm:hidden"></div>
                    <img src={Img1} alt="" className="z-20 absolute top-0 left-0 rounded-lg " />
                    <img src={Img2} alt="" className="z-30 absolute bottom-0 right-0 rounded-lg sm:hidden" />
                </div>
                <div className="w-1/2 slg:w-full">
                    <HeadingBtn title="Our Story" />
                    <h2 className="text-4xl my-4">About Our Online</h2>
                    <p className="text-gray-400">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
                    <div className="columns-2 mt-10">
                        <h4 className="text-2xl">Trusted By Thousands</h4>
                        <p className="text-gray-400">Pellentesque habitant morbi tristique</p>
                        <h4 className="text-2xl">Best Service</h4>
                        <p className="text-gray-400">Pellentesque habitant morbi tristique</p>
                    </div>
                    <button className="mt-9 hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Read More</button>
                </div>
            </div>

        </Helmet>
    )
}

export default Hero