import Helmet from "../../Components/Helmet/Helmet"
const Sale = () => {
    return (
        <Helmet>
            <div className="flex gap-x-8 lg:flex-col lg:gap-y-6">
                <div className="w-1/2 bg-sale_left_bg bg-cover flex items-end justify-end p-16 h-[400px] rounded-2xl lg:w-full  sm:justify-start sm:items-end">
                    <div className="flex flex-col  w-4/12  sm:w-max sm:items-start ">

                        <button className="rounded-xl text-white w-16 h-8 bg-primary_green cursor-auto">
                            30%
                        </button>
                        <p className="text-[#aaa] my-3  text-xl">Save Up to Flat</p>
                        <h2 className="font-semibold text-white text-4xl mb-4">Mega Sale</h2>
                        <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
                <div className="w-1/2 bg-sale_right_bg bg-cover flex items-end justify-start p-16 h-[400px] rounded-2xl lg:w-full">
                    <div className="flex flex-col items-start  w-4/12 sm:w-max">

                        <button className="rounded-xl text-primary_dark_green font-semibold cursor-auto text-4xl ">
                            50%
                        </button>
                        <p className="text-[#101010D4] my-3  text-xl">Save Up to Flat</p>
                        <h2 className="font-semibold  text-4xl mb-4 font-sans">Mega Sale</h2>
                        <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Sale