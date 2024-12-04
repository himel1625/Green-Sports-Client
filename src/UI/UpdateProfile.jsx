import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateProfile = () => {
  const { user, ManageProfile, setUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const url = form.get('url');
    e.target.reset();

    ManageProfile(name, url, email)
      .then((res) => {
        const user = res.user;
        setUser(user);
        if (user) {
          toast.success('Successful Update');
        }
      })
      .catch((err) => {
        console.error('Error updating profile:', err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Green Sports | UpdateProfile</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <div className=" p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={user && user?.displayName}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user && user?.email}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="url"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:gap-6 lg:gap-8">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Update Profile
              </button>

              <button
                onClick={() => Navigate('/MyProfile')}
                className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
