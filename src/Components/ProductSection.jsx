import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        toast.error(`${error}`);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Sports | Product-Section</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Product Section
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="border  border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl font-bold"
                key={product._id}
              >
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold truncate">
                    {product.itemName}
                  </h2>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Rating: {product.rating}
                  </p>
                  <p className="text-sm mt-1">
                    {product.stockStatus
                      ? `Stock:${product.stockStatus}`
                      : 'Out of Stock'}
                  </p>

                  <button className="mt-4 w-full py-2 bg-green-400 text-white rounded hover:bg-green-700">
                    More Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
