import React from 'react';
import { Carousel as CustomCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Image/img1.webp';
import img2 from '../Image/img2.webp';
import img3 from '../Image/img3.webp';
import img4 from '../Image/img4.webp';
import img5 from '../Image/img5.webp';
import img6 from '../Image/img6.webp';

const Banner = () => {
  return (
    <div className='relative w-full h-full'>
      <CustomCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        className='w-full h-full'
      >
        <div>
          <img
            src={img1}
            alt='Slide 1'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={img2}
            alt='Slide 2'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={img3}
            alt='Slide 3'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={img4}
            alt='Slide 4'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={img5}
            alt='Slide 5'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={img6}
            alt='Slide 6'
            className='w-full h-[600px] object-cover'
          />
        </div>
      </CustomCarousel>
    </div>
  );
};

export default Banner;
