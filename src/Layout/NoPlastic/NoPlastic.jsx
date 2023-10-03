
import no_plastic from "../../assets/Images/no_plastic.png"
const NoPlastic = () => {
    return (
        <div className="py-20  mt-5 relative ">
            <img src={no_plastic} alt="Platic Bag Image" className="absolute top-0 -translate-y-12 sm:translate-y-0 left-1/4 sm:w-40 sm:h-40" />
            <div className="w-95 grid grid-cols-7 grid-rows-[410px] mx-auto gap-x-8 md:grid-cols-1">

                <div className="col-span-5 bg-noplastic_main rounded-2xl bg-cover flex items-center pl-8 lg:bg-center md:col-span-1 sm:pl-4 ">
                    <div className="flex flex-col gap-y-3  box-border">
                        <button className="rounded-xl text-white w-16 h-8 bg-btn_bg cursor-auto">
                            15%
                        </button>
                        <h2 className="font-semibold  text-4xl sm:text-3xl">
                            Join To
                            <span className="text-[#fb7645] mx-2 inline-block">

                                #No_Plastic
                            </span>
                            Campaign
                            <br />
                            And Get a Discount
                        </h2>
                        <p className="text-[#aaa]">Save Up to Flat</p>
                        <button className=" hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>

                </div>

                <div className="col-span-2 bg-noplastic_main_right rounded-2xl flex items-end py-9 px-10 lg:bg-center md:col-span-1 md:mt-5 md:bg-no-repeat md:bg-cover">
                    <div className="flex flex-col gap-y-4 ">

                        <button className="rounded-xl text-white w-16 h-8 bg-primary_green cursor-auto">
                            30%
                        </button>
                        <p className="text-[#aaa]">Save Up to Flat</p>
                        <h2 className="font-semibold text-white text-4xl">Mega Sale</h2>
                        <button className=" hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NoPlastic