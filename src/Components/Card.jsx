import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ products }) => {
  const { _id, image, itemName, category, price, rating, stockStatus } =
    products || {};

  return (
    <>
      <div>
        <div
          className="border  border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl font-bold"
          key={_id}
        >
          <img
            src={image}
            alt={itemName}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold truncate">{itemName}</h2>
            <p className="text-gray-500 text-sm">{category}</p>
            <p className="text-lg font-bold mt-2">${price}</p>
            <p className="text-sm text-gray-600 mt-1">Rating: {rating}</p>
            <p className="text-sm mt-1">
              {stockStatus ? `Stock:${stockStatus}` : 'Out of Stock'}
            </p>

            <NavLink to={`${_id}`}>
              <button className="mt-4 w-full py-2 bg-green-400 text-white rounded hover:bg-green-700">
                More Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
