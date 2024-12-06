import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://a10-b10-sports-equipment-store-server.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        toast.error(`${error}`);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Sports | Product-Section</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-6">
        <h1 className="text-4xl font-bold text-center mb-8">Product Section</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto lg:mx-auto md:mx-auto">
          {products.map(item => (
            <Card products={item} key={item._id} />
          ))}
        </div>
        <div>
          <button
            onClick={() => Navigate('/Equipment')}
            className=" mt-10 px-4 py-2 rounded-lg text-gray-600 font-bold bg-green-300 hover:bg-green-600"
          >
            All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
