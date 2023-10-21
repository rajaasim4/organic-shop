import Helmet from "../../Components/Helmet/Helmet"
import SideBar from "../../Components/SideBar/SideBar"

const Hero = () => {
    return (

        <Helmet>
            <div className="grid grid-cols-[300px_minmax(300px,_1fr)_300px] lg:grid-cols-[300px_minmax(300px,_1fr)] gap-x-8 justify-between lg:justify-center md:grid-cols-[minmax(200px,_1fr)] gap-4 ">

                <div className=" py-4 bg-white px-2 rounded-2xl shadow-xl md:col-span-3 ">
                    <SideBar />
                </div>
                <div className="bg-[url('./assets/images/Hero_bg.jpg')] w-full  bg-cover bg-no-repeat h-[555px] rounded-2xl p-5 flex justify-end pr-20 pt-14 md:col-span-3">
                    <div className="flex flex-col gap-y-6 ">

                        <div className="rounded-full text-white grid place-items-center text-3xl w-20 h-20 bg-primary_red">
                            50%
                        </div>
                        <p className="text-white">Save Up to Flat</p>
                        <h2 className="font-semibold text-white text-5xl ">Mega Sale</h2>
                        <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
                <div className=" lg:col-span-3 lg:justify-end  lg:pt-4  flex flex-col gap-y-5 bg-transparent lg:h-[600px]">

                    <div className="md:h-[300px]  bg-hero_right_1_bg h-1/2 bg-cover bg-center w-full rounded-xl shadow-xl  flex items-center pl-4">
                        <h3 className="text-3xl">
                            Fresh
                            <span className="font-semibold  block">

                                Exotic Fruits
                            </span>
                        </h3>

                    </div>
                    <div className="md:h-[300px]  bg-hero_right_2_bg h-1/2 bg-cover bg-center w-full rounded-xl shadow-xl  flex items-center pl-4">
                        <h3 className="text-3xl">
                            Be Fitness
                            <span className="font-semibold  block">

                                Healthy Food
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </Helmet >


    )
}

export default Hero