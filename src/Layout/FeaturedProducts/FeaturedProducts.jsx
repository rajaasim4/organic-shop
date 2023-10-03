import Helmet from "../../Components/Helmet/Helmet"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedProducts = () => {
    return (
        <Helmet>


            <HeadingBtn title="100% Natural" />
            <div className="flex justify-between">
                <h1 className="text-5xl font-light sm:text-3xl md:text-4xl xsm:text-2xl  my-8">Featured Products</h1>
                <div className="flex gap-x-4 items-center ">

                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl">
                        <HiArrowSmLeft />
                    </button>
                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl">
                        <HiArrowSmRight />
                    </button>
                </div>
            </div>
            <div className="">
                <div className="flex justify-evenly h-[550px] py-3 ">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            710: {
                                slidesPerView: 2
                            },
                            1110: {
                                slidesPerView: 3
                            },
                            1340: {
                                slidesPerView: 4
                            }


                        }}
                        modules={[]}
                        className="mySwiper w-full h-full mx-auto"
                    >
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className=" text-center flex justify-center items-center">
                            <div className="flex justify-center items-center">

                                <ProductCard />
                            </div>

                        </SwiperSlide>

                    </Swiper>

                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
            </div>

        </Helmet>
    )
}

export default FeaturedProducts