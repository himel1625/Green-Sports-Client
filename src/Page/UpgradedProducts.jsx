import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const UpgradedProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id } = useParams();
  useEffect(() => {
    const itemFind = [...data].find(item => item._id == _id);
    setProducts(itemFind);
  }, [data, _id]);
  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const image = form.get('image');
    const itemName = form.get('itemName');
    const category = form.get('category');
    const description = form.get('description');
    const price = form.get('price');
    const rating = form.get('rating');
    const customization = form.get('customization');
    const processingTime = form.get('processingTime');
    const stockStatus = form.get('stockStatus');
    const userEmail = form.get('userEmail');
    const userName = form.get('userName');
    const allData = {
      image,
      itemName,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };

    fetch(`http://localhost:4000/AllProducts/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Updated Data',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };


  return (
    <>
      <Helmet>
        <title>Green Sports | Upgraded-Products</title>
      </Helmet>

      <div>
        <div className="max-w-4xl mx-auto p-6 mt-8  shadow-lg rounded-lg border mb-6 border-gray-300">
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center ">
            Upgraded Equipment
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                defaultValue={products && products.image}
                placeholder="https://example.com/image.jpg"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                defaultValue={products && products.itemName}
                placeholder="Enter item name"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                name="category"
                defaultValue={products && products.category}
                placeholder="Enter category name"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={products && products.description}
                placeholder="Provide a detailed description"
                className="w-full border p-2 rounded focus:outline-green-400"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={products && products.price}
                placeholder="Enter price"
                min="0"
                step="0.01"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={products && products.rating}
                placeholder="Rate from 1 to 5"
                min="1"
                max="5"
                step="0.1"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Customization
              </label>
              <input
                type="text"
                name="customization"
                defaultValue={products && products.customization}
                placeholder="e.g., Bat with extra grip"
                className="w-full border p-2 rounded focus:outline-green-400"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Processing Time (Days)
              </label>
              <input
                type="text"
                name="processingTime"
                defaultValue={products && products.processingTime}
                placeholder="Enter processing time in days"
                min="1"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Stock Status (Quantity)
              </label>
              <input
                type="number"
                name="stockStatus"
                defaultValue={products && products.stockStatus}
                placeholder="Enter available quantity"
                min="0"
                className="w-full border p-2 rounded focus:outline-green-400"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={user && user?.email}
                readOnly
                className="w-full border p-2 bg-gray-100 rounded"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={user && user?.displayName}
                readOnly
                className="w-full border p-2 bg-gray-100 rounded"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-400 text-white p-3 rounded hover:bg-green-500 transition-colors"
              >
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpgradedProducts;
