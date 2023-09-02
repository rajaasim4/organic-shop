import ProductCard from "../../Components/ProductCard/ProductCard"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"

const BestDeals = () => {
    return (
        <div className="py-20">
            <div className="w-95 mx-auto">
                <div className="flex justify-center">
                    <HeadingBtn title="100% Natural" />

                </div>
                <h1 className="text-5xl font-light text-center my-8">Today’s Best Deals</h1>
                <div className="flex mt-16 items-center">
                    <div className="w-1/2 bg-best_deals_bg bg-cover bg-center p-10 h-[570px] rounded-2xl flex items-end">
                        <div className="flex flex-col gap-y-6 ">

                            <div className="rounded-full text-white grid place-items-center text-3xl w-20 h-20 bg-primary_red">
                                50%
                            </div>
                            <p className="text-white">Save Up to Flat</p>
                            <h2 className="font-semibold text-white text-5xl ">Mega Sale</h2>
                            <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-evenly flex-wrap">
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BestDeals