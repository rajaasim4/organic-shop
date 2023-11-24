import ProductCard from "../../Components/ProductCard/ProductCard"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
//Swiper

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import BestDealsProduct from "../../Data/BestDealsProduct"
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation";


const BestDeals = () => {
    return (
        <div className="py-20">
            <div className="w-95 mx-auto">
                <div className="flex justify-center">
                    <HeadingBtn title="100% Natural" />

                </div>
                <motion.h1
                    {...fadeInFromLeft()}
                    className="text-5xl font-light text-center my-8">Today’s Best Deals</motion.h1>
                <div className="flex mt-16 items-center md:flex-col">
                    <motion.div className="w-1/2 bg-best_deals_bg bg-cover bg-left p-10 h-[570px] rounded-2xl flex items-end md:w-full"

                        {...fadeInFromLeft(0.2)}
                    >
                        <div className="flex flex-col gap-y-6 ">

                            <div className="rounded-full text-white grid place-items-center text-3xl w-20 h-20 bg-primary_red">
                                50%
                            </div>
                            <p className="text-white">Save Up to Flat</p>
                            <h2 className="font-semibold text-white text-5xl ">Mega Sale</h2>
                            <button className="hover:bg-slate-800 duration-300 bg-btn_bg w-32 h-12 rounded-xl text-white text-xl">Shop Now</button>
                        </div>
                    </motion.div>
                    <div className="w-1/2 flex justify-evenly gap-x-3 md:w-full flex-wrap md:gap-y-8">

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            navigation={true}
                            modules={[Autoplay, Navigation,]}
                            className="mySwiper"
                        >
                            {BestDealsProduct.slice(0, 7).map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className=" text-center flex justify-center items-center">
                                        <div className="flex justify-center items-center">

                                            <ProductCard {...item} />
                                        </div>

                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>


                    </div>
                </div>
            </div>
        </div>
    )
}



export default BestDeals


