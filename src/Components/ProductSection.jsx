import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const ProductSection = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        toast.error(`${error}`);
      });
  }, []);

  const displayedProducts = products.slice(0, 12);

  return (
    <>
      <Helmet>
        <title>Green Sports | Product-Section</title>
      </Helmet>
      <div className='container mx-auto px-4 py-8 mt-6'>
        <h1 className='text-4xl font-bold text-center mb-8'>Product Section</h1>

        {/* Updated grid styling */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto'>
          {displayedProducts.map(item => (
            <Card products={item} key={item._id} />
          ))}
        </div>

        <div className='text-center mt-8'>
          <button
            onClick={() => Navigate('/Equipment')}
            className='px-6 py-3 rounded-lg text-white font-bold bg-Color'
          >
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
