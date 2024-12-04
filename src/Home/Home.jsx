import React from 'react';

import 'swiper/css'; // Ensure you import the default Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import order

import img1 from '../Image/img1.jpg';
import img4 from '../Image/img4.jpg';
import img5 from '../Image/img5.jpg';
import img2 from '../Image/imt2.jpg';

const Home = () => {
  return (
    <div className="mx-auto mt-10 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
        className="h-96"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img1}
              alt="Adventure 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img2}
              alt="Adventure 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img4}
              alt="Adventure 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={img5}
              alt="Adventure 3"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
