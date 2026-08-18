import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Visual = () => {
    return (
        <section className="visual" aria-label="주요 상품 이미지">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                <SwiperSlide>
                    <img src="/images/visual1.webp" alt="주요 상품 이미지 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/visual2.webp" alt="주요 상품 이미지 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/visual3.webp" alt="주요 상품 이미지 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/visual4.webp" alt="주요 상품 이미지 4" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Visual;
