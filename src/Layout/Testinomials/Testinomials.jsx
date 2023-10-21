import Helmet from "../../Components/Helmet/Helmet"

//Swiper Component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import { Autoplay, Navigation, } from "swiper/modules"

//Images
import Tesetimonial_img1 from "../../assets/Images/Testimonial_img1.png"
import Tesetimonial_img2 from "../../assets/Images/Testimonial_img2.png"
import Tesetimonial_img3 from "../../assets/Images/Testimonial_img3.png"
import Tesetimonial_img4 from "../../assets/Images/Testimonial_img4.png"

const Testinomials = () => {
    return (
        <Helmet>
            <button className="rounded-xl text-white w-32 h-10 bg-primary_green cursor-auto mx-auto block">
                Testimonial
            </button>
            <h1 className="text-5xl font-light text-center my-8">Our Client Say</h1>
            <div className="">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    rewind={true}
                    modules={[Autoplay, Navigation,]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3
                        },
                        1410: {
                            slidesPerView: 4,
                        },
                    }}
                    className="w-full  min-h-[450px] "
                >
                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img1} />

                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img2} />

                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img3} />

                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img4} />

                    </SwiperSlide>
                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img1} />
                    </SwiperSlide>

                    <SwiperSlide className="text-center flex justify-center items-center">

                        <TestimonialCard img={Tesetimonial_img2} />

                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="h-28 sm:hidden"></div>
        </Helmet >
    )
}

export default Testinomials