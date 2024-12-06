import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';

const Details = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { _id } = useParams();
  useEffect(() => {
    const itemFind = [...data].find(item => item._id == _id);
    setProducts(itemFind);
  }, [data, _id]);

  return (
    <div className="container mx-auto p-4 lg:p-8 ">
      <CardDetails products={products} />
    </div>
  );
};

export default Details;
