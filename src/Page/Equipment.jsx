import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { SiCcleaner } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Equipment = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/AllProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => {
        toast.error(`${error}`);
      });
  }, []);

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
        fetch(`http://localhost:4000/AllProducts/${_id}`, {
          method: 'DELETE',
        })
          .then(res => {
            return res.json();
          })
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your Products has been deleted.',
              icon: 'success',
            });
            setProducts(prev => prev.filter(product => product._id !== _id));
          })
          .catch(error => {
            Swal.fire({
              title: 'Error!',
              text: 'There was an issue deleting your Products.',
              icon: 'error',
            });
            console.error('Error:', error);
          });
      }
    });
  };

  const sortHighToLow = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  return (
    <>
      <Helmet>
        <title>Green Sports | Equipment</title>
      </Helmet>
      <div className="mt-6">
        <button
          onClick={sortHighToLow}
          className="ml-2 text-green-500 font-bold text-xl px-7"
          title="Sort by Price: High to Low"
        >
          sort by price
        </button>
        <div className="overflow-x-auto font-bold ">
          <table className="table">
            <thead>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>{product.itemName}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td>{product.stockStatus}</td>
                  <td className="flex gap-2 cursor-pointer text-green-400">
                    <NavLink to={`/Details/${product._id}`}>
                      <FaEye size={30} />
                    </NavLink>

                    <SiCcleaner
                      onClick={() => handleDelete(product._id)}
                      size={30}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Equipment;
