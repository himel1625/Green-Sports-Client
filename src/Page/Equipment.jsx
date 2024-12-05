import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Equipment = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/AllProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        toast.error(`${error}`);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Sports | Equipment</title>
      </Helmet>
      <div className='mt-6'>
        <div className="overflow-x-auto font-bold">
          <table className="table ">
            <thead >
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
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
