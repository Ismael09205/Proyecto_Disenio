import user1 from '../../assets/user-1.jpg';
import user2 from '../../assets/user-2.jpg';
import user3 from '../../assets/user-3.jpg';
import user4 from '../../assets/user-4.jpg';
import user5 from '../../assets/user-5.jpg';
import user6 from '../../assets/user-6.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import './Directive.css';

const Directive = () => {
    return (
        <section className="directiva__container">

            <div className="directiva__slider">

                <div className="directiva__left">
                    <i className="fa-solid fa-circle-left"></i>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: ".directiva__left",
                        nextEl: ".directiva__right",
                    }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={20}
                    className="directiva__box"
                >
                    <SwiperSlide>
                        <img src={user1} className="directiva" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={user2} className="directiva" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={user3} className="directiva" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={user4} className="directiva" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={user5} className="directiva" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={user6} className="directiva" />
                    </SwiperSlide>
                </Swiper>

                <div className="directiva__right">
                    <i className="fa-solid fa-circle-right"></i>
                </div>

            </div>
        </section>
    );
};

export default Directive;
