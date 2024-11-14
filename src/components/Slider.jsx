import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import proto_1 from '../assets/proto_1.jpeg'
import proto_2 from '../assets/proto_2.jpeg'
import proto_3 from '../assets/proto_3.jpeg'
import proto_4 from '../assets/proto_4.jpeg'



export default function Slider() {
    return (
        <div className='max-w-[90vw] m-auto'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper flex transition-transform duration-500 ease-in-out"
            >
                <SwiperSlide><img src={proto_1} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_3} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_4} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_1} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_2} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_3} alt="image1" /></SwiperSlide>
                <SwiperSlide><img src={proto_4} alt="image1" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
