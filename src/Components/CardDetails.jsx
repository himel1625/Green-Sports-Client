import React, { useState } from 'react';

const CardDetails = ({ products }) => {
  const {
    image,
    itemName: foundItemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = products || {};

  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState(''); // Discount code state
  const [appliedDiscount, setAppliedDiscount] = useState(0); // Store discount percentage

  // Discount calculation logic
  const discount =
    appliedDiscount || Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  const discountPrice = price
    ? (price - price * (discount / 100)).toFixed(2)
    : 0;

  // Increment Quantity function
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrement Quantity function
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  // Apply Discount Code
  const handleApplyDiscount = () => {
    if (discountCode === 'SAVE10') {
      setAppliedDiscount(10); // 10% discount
    } else if (discountCode === 'SAVE20') {
      setAppliedDiscount(20); // 20% discount
    } else {
      alert('Invalid Discount Code');
    }
  };

  if (!products) {
    return <div className='text-center py-10'>Loading...</div>;
  }

  if (!foundItemName) {
    return <div className='text-center py-10'>Product Not Found</div>;
  }

  return (
    <div className='w-full mx-auto '>
      {/* Header Section */}
      <div className='bg-gray-100 p-4 text-center'>
        <h2 className='text-2xl font-bold text-gray-800'>{foundItemName}</h2>
        <p className='text-gray-600 text-sm'>{categoryName}</p>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-col lg:flex-row items-start'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 bg-gray-50 p-4 flex justify-center'>
          <img
            src={image}
            alt={foundItemName}
            className='max-w-full h-auto object-contain rounded-lg'
          />
        </div>

        {/* Details Section */}
        <div className='w-full lg:w-1/2 p-6 space-y-4'>
          <p className='text-gray-700 text-base'>{description}</p>

          <ul className='text-gray-700 text-sm space-y-2'>
            <li className='flex justify-between border-b pb-2'>
              <span>Processing Time:</span>
              <span className='font-medium'>{processingTime}</span>
            </li>
            <li className='flex justify-between border-b pb-2'>
              <span>Stock Status:</span>
              <span
                className={`font-medium ${
                  stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stockStatus}
              </span>
            </li>
            <li className='flex justify-between border-b pb-2'>
              <span>Customization:</span>
              <span className='font-medium'>
                {customization ? 'Available' : 'Not Available'}
              </span>
            </li>
          </ul>

          <div className='mt-4 space-y-2'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-green-600 text-2xl font-bold'>
                  ${discountPrice}
                </p>
                {discount > 0 && (
                  <p className='line-through text-gray-500 text-sm'>
                    Regular: ${price}
                  </p>
                )}
              </div>
              <div className='text-yellow-500 font-bold flex items-center'>
                <i className='fas fa-star mr-1'></i> {rating} / 5
              </div>
            </div>
          </div>

          {/* Discount Code Section */}
          <div className='mt-4'>
            <input
              type='text'
              value={discountCode}
              onChange={e => setDiscountCode(e.target.value)}
              placeholder='Enter discount code'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            <button
              onClick={handleApplyDiscount}
              className='mt-2 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300'
            >
              Apply Discount
            </button>
          </div>

          {/* Quantity Selector */}
          <div className='flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6'>
            <div className='flex items-center space-x-4 bg-gray-50 border border-gray-300 rounded-lg p-2 shadow-md'>
              <button
                onClick={decrementQuantity}
                className='w-10 h-10 bg-gray-200 text-gray-800 text-lg font-semibold rounded-full hover:bg-gray-300 transition duration-300 ease-in-out flex items-center justify-center'
              >
                -
              </button>
              <input
                type='text'
                value={quantity}
                readOnly
                className='w-16 py-2 px-4 text-center border-none outline-none font-semibold text-lg text-gray-700 bg-gray-100'
              />
              <button
                onClick={incrementQuantity}
                className='w-10 h-10 bg-gray-200 text-gray-800 text-lg font-semibold rounded-full hover:bg-gray-300 transition duration-300 ease-in-out flex items-center justify-center'
              >
                +
              </button>
            </div>

            <button className='w-full sm:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
