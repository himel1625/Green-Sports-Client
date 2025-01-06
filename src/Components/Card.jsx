import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ products }) => {
  const { _id, image, itemName, price, discountPercentage } = products || {};

  const discount =
    discountPercentage || Math.floor(Math.random() * (50 - 5 + 1)) + 5;

  const discountPrice = price
    ? (price - price * (discount / 100)).toFixed(2)
    : 0;

  return (
    <NavLink to={`/Details/${_id}`} className='block relative mx-auto '>
      <div className='border border-gray-100 bg-[#FFFFFF] rounded-sm shadow-sm overflow-hidden hover:shadow-sm w-80 h-96'>
        <img src={image} alt={itemName} className='w-full h-64 object-cover' />

        <div className='p-4'>
          <h2 className='text-sm font-semibold truncate hover:text-[#d51e0b] hover:underline'>
            {itemName}
          </h2>
          <div className='mt-2 flex flex-col'>
            <div className='flex items-center gap-4'>
              <p className='text-lg font-bold text-[#d51e0b]'>
                ${discountPrice}
              </p>

              <p className='text-sm  line-through text-gray-500 '>${price}</p>
            </div>
          </div>

          <div className='absolute top-2 left-2 bg-[#6e2594] text-[#FFFFFF] text-xs font-light px-6 py-1 rounded-tr-lg rounded-br-lg '>
            Save: {Math.round(price - discountPrice)}$ ({-discount})% OFF
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
