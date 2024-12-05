import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastBar } from 'react-hot-toast';
import Card from '../Components/Card';

const MyEquipmentList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/AllProducts')
      .then(res => res.json())
      .then(data => {
        // Filter products that have a userEmail
        const filteredData = data.filter(product => product.userEmail);
        setProducts(filteredData);
      })
      .catch(error => {
        ToastBar.error(`${error}`);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Green Sports | My-Equipment-List</title>
      </Helmet>

      <div className='mt-10'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto lg:mx-auto md:mx-auto">
          {products.map(item => (
            <Card products={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyEquipmentList;
