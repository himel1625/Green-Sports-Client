import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Card from '../Components/Card';

const Equipment = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => {
        toast.error(`${error}`);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Sports | Equipment</title>
      </Helmet>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20'>
        {products.map(item => (
          <Card products={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default Equipment;
