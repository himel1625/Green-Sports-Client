import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate function

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

    fetch(`${import.meta.env.VITE_SERVER_API}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allData),
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Data Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate('/'); // Redirect to home after success
      });
  };

  return (
    <>
      <Helmet>
        <title>Green Sports | Add-Equipment</title>
      </Helmet>
      <div className='max-w-4xl mx-auto p-6 mt-8 shadow-lg rounded-lg border mb-6 border-gray-300'>
        <h2 className='text-3xl font-bold text-Color mb-6 text-center'>
          Add New Equipment
        </h2>
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
        >
          <div>
            <label className='block font-medium text-gray-700'>Image URL</label>
            <input
              type='url'
              name='image'
              placeholder='https://example.com/image.jpg'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>Item Name</label>
            <input
              type='text'
              name='itemName'
              placeholder='Enter item name'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Category Name
            </label>
            <input
              type='text'
              name='category'
              placeholder='Enter category name'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div className='md:col-span-2'>
            <label className='block font-medium text-gray-700'>
              Description
            </label>
            <textarea
              name='description'
              placeholder='Provide a detailed description'
              className='w-full border p-2 rounded focus:outline-green-400'
              rows='3'
              required
            ></textarea>
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Price (USD)
            </label>
            <input
              type='number'
              name='price'
              placeholder='Enter price'
              min='0'
              step='0.01'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Rating (1-5)
            </label>
            <input
              type='number'
              name='rating'
              placeholder='Rate from 1 to 5'
              min='1'
              max='5'
              step='0.1'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Customization
            </label>
            <input
              type='text'
              name='customization'
              placeholder='e.g., Bat with extra grip'
              className='w-full border p-2 rounded focus:outline-green-400'
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Processing Time (Days)
            </label>
            <input
              type='text'
              name='processingTime'
              placeholder='Enter processing time in days'
              min='1'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              Stock Status (Quantity)
            </label>
            <input
              type='number'
              name='stockStatus'
              placeholder='Enter available quantity'
              min='0'
              className='w-full border p-2 rounded focus:outline-green-400'
              required
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>
              User Email
            </label>
            <input
              type='email'
              name='userEmail'
              value={user && user?.email}
              readOnly
              className='w-full border p-2 bg-gray-100 rounded'
            />
          </div>

          <div>
            <label className='block font-medium text-gray-700'>User Name</label>
            <input
              type='text'
              name='userName'
              value={user && user?.displayName}
              readOnly
              className='w-full border p-2 bg-gray-100 rounded'
            />
          </div>

          <div className='md:col-span-2'>
            <button type='submit' className='w-full bg-Color text-white p-3'>
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEquipment;
