import Helmet from "../../Components/Helmet/Helmet"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import Products from "../../Data/Product"
const FeaturedProducts = () => {
    return (
        <Helmet>


            <HeadingBtn title="100% Natural" />
            <div className="flex justify-between">
                <h1 className="text-5xl sm:text-3xl md:text-4xl xsm:text-2xl  my-8 ">Featured Products</h1>
                <div className="flex gap-x-4 items-center ">

                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl swiper-button-prev">
                        <HiArrowSmLeft />
                    </button>
                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl swiper-button-next">
                        <HiArrowSmRight />
                    </button>
                </div>
            </div>
            <div className="">
                <div className="flex justify-evenly h-[550px] py-3 ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        // centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false
                        }}
                        autoplay={true}
                        allowSlideNext={true}
                        allowSlidePrev={true}
                        loop={true}
                        effect="coverflow"
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            // 710: {
                            //     slidesPerView: 1
                            // },
                            550: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        modules={[Navigation, EffectCoverflow, Autoplay]}
                        className="mySwiper w-full h-full mx-auto"
                    >
                        {Products.slice(0, 7).map((item) => {
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

        </Helmet >
    )
}

export default FeaturedProducts