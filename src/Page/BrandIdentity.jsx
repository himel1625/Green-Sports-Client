import React from 'react';
import { Helmet } from 'react-helmet-async';

const BrandIdentity = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | BrandIdentity</title>
      </Helmet>
      <div className=' py-16'>
        <div className='max-w-6xl mx-auto text-center px-4'>
          {/* Section Title */}
          <h2 className='text-4xl font-bold  mb-6'>Our Brand Identity</h2>

          {/* Brand Story */}
          <p className='text-lg text-gray-700 mb-8'>
            At Green Sports, we believe in empowering athletes of all levels by
            providing top-quality sports equipment designed to enhance
            performance and foster a passion for the game. Our mission is to
            make sports accessible to everyone by offering a wide range of
            equipment for various sports, from beginners to professionals.
          </p>

          {/* Values List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-2xl font-semibold mb-4'>Quality</h3>
              <p className='text-gray-600'>
                We provide only the highest quality sports equipment to ensure
                that you perform at your best.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-2xl font-semibold  mb-4'>Innovation</h3>
              <p className='text-gray-600'>
                We are committed to bringing the latest and most innovative
                products to enhance your sports experience.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-2xl font-semibold  mb-4'>Customer-Centric</h3>
              <p className='text-gray-600'>
                Your satisfaction is our top priority, and we’re always here to
                support you on your sports journey.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='mt-8'>
            <p className='text-lg text-gray-700 mb-4'>
              Ready to explore our range of sports equipment? Join us and
              elevate your game with Green Sports.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandIdentity;
