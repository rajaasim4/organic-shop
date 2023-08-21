import Helmet from "../../Components/Helmet/Helmet"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import { Autoplay, Navigation, } from "swiper/modules"

const Testinomials = () => {
    return (
        <Helmet>
            <button className="rounded-xl text-white w-32 h-10 bg-primary_green cursor-auto mx-auto block">
                Testimonial
            </button>
            <h1 className="text-5xl font-light text-center my-8">Our Client Say</h1>
            <div className="  ">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    rewind={true}
                    modules={[Autoplay, Navigation,]}
                    // breakpoints={{
                    //     0: { slidesPerView: 1 },
                    //     950: {
                    //         slidesPerView: 2,
                    //     },
                    //     1410: {
                    //         slidesPerView: 4,
                    //     },
                    // }}
                    className="w-full  min-h-[450px] "
                >
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard

                        />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard />            </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard />            </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">
                        <TestimonialCard />            </SwiperSlide>
                </Swiper>
                {/* <Swiper
                    spaceBetween={40}
                    slidesPerView={4}

                    pagination={{
                        clickable: true,
                    }}

                    // autoplay={{ delay: 2000 }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper min-h-[450px] w-full flex justify-center bg-fuchsia-300 "
                >
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center"><TestimonialCard />
                    </SwiperSlide>

                </Swiper> */}
            </div>
        </Helmet >
    )
}

export default Testinomials