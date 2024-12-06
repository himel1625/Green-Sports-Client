import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ products }) => {
  const { _id, image, itemName, category, price, rating, stockStatus } =
    products || {};
  const { pathname } = useLocation();

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://a10-b10-sports-equipment-store-server.vercel.app/AllProducts/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          })
          .catch(error => {
            Swal.fire({
              title: 'Error!',
              text: 'There was an issue deleting your file.',
              icon: 'error',
            });
            console.error('Error:', error);
          });
      }
    });
  };
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

            {pathname === '/MyEquipmentList' ? (
              <div className="flex items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="w-1/2">
                  <NavLink to={`/UpgradedProducts/${_id}`}>
                    <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
                      Update
                    </button>
                  </NavLink>
                </div>
                <div className="w-1/2">
                  <button
                    onClick={() => handleDelete(_id)}
                    className="w-full py-2 bg-red-300 text-white font-semibold rounded-lg hover:bg-red-500 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <NavLink to={`/Details/${_id}`}>
                <button className="mt-4 w-full py-2 bg-green-400 text-white rounded hover:bg-green-700">
                  More Details
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
