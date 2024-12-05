import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { _id } = useParams();

  useEffect(() => {
    const itemFind = [...data].find(item => item._id == _id);
    setProducts(itemFind);
  }, [data, _id]);

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

  if (!products) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!foundItemName) {
    return <div className="text-center py-10">Product Not Found</div>;
  }

  return (
    <div className="container mx-auto p-4 lg:p-8 ">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 border border-gray-300 shadow-lg rounded-lg">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg overflow-hidden bg-white border">
          <img
            src={image || '/path/to/placeholder-image.jpg'}
            alt={foundItemName}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover rounded-t-lg"
          />
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 lg:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {foundItemName}
          </h2>
          <p className="text-gray-600 text-sm">{categoryName}</p>
          <p className="text-gray-700 text-base mt-2">{description}</p>

          <div className="flex items-center justify-between mt-4">
            <p className="text-lg sm:text-xl font-bold text-green-600">
              ${price}
            </p>
            <p className="text-yellow-500 flex items-center">
              <i className="fas fa-star mr-1"></i> {rating} / 5
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-gray-600 text-sm font-bold">
              Processing Time: {processingTime}
            </p>
            <p className="text-gray-600 text-sm  font-bold">
              Stock Status: {stockStatus}
            </p>
            <p className="text-gray-600 text-sm  font-bold">
              Customization Available: {customization ? 'Yes' : 'No'}
            </p>
          </div>

          <button className="w-full bg-green-500 text-white py-3 mt-6 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-50 focus:ring-opacity-50 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
