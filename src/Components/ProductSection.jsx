import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Card from './Card';

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
        <h1 className="text-4xl font-bold text-center mb-8">Product Section</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto lg:mx-auto md:mx-auto">
          {products.map((item) => (
            <Card products={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
