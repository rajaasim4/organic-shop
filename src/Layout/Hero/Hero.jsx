import Helmet from "../../Components/Helmet/Helmet"
import SideBar from "../../Components/SideBar/SideBar"

const Hero = () => {
    return (

        <Helmet>
            <div className="flex gap-x-8 justify-between ">

                <div className="w-[500px] py-4 bg-white px-2 rounded-2xl shadow-xl ">
                    <SideBar />
                </div>
                <div className="bg-[url('./assets/images/Hero_bg.jpg')] w-full  bg-cover bg-no-repeat h-[555px] rounded-2xl p-5 flex justify-end pr-20 pt-14">
                    <div className="flex flex-col gap-y-6 ">

                        <div className="rounded-full text-white grid place-items-center text-3xl w-20 h-20 bg-primary_red">
                            50%
                        </div>
                        <p className="text-white">Save Up to Flat</p>
                        <h2 className="font-semibold text-white text-5xl ">Mega Sale</h2>
                        <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
                <div className="w-[500px]  rounded-2xl shadow-xl flex items-end justify-center px-3 pb-10">
                    <div className="flex flex-col gap-y-6 ">

                        <button className="rounded-xl text-white w-16 h-8 bg-primary_red">
                            Sale
                        </button>
                        <p className="text-primary_dark_green">Save Up to Flat</p>
                        <h2 className="font-semibold text-primary_dark_green text-4xl">Mega Sale</h2>
                        <button className="hover:bg-slate-800 hover:shadow-[0px_9px_25px_0px_rgb(30_41_90)] shadow-[0px_9px_25px_0px_#ff4e2d] duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
            </div>
        </Helmet>


    )
}

export default Hero