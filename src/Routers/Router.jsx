import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import AddEquipment from '../Page/AddEquipment';

import Details from '../Page/Details';
import Equipment from '../Page/Equipment';
import Login from '../Page/Login';

import BrandIdentity from '../Page/BrandIdentity';
import Dashboard from '../Page/Dashboard';
import Register from '../Page/Register';
import UpgradedProducts from '../Page/UpgradedProducts';
import PrivateRoute from '../Private/PrivateRoute';
import Forgot from '../UI/Forgot';
import MyProfile from '../UI/MyProfile';
import UpdateProfile from '../UI/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/forgot',
        element: <Forgot></Forgot>,
      },
      {
        path: '/equipment',
        element: <Equipment></Equipment>,
      },
      {
        path: '/myProfile',
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: '/details/:_id',
        element: <Details></Details>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/Details`),
      },
      {
        path: '/addEquipment',
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: '/upgradedProducts/:_id',
        element: <UpgradedProducts> </UpgradedProducts>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/AllProducts`),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/brandIdentity',
        element: (
          <PrivateRoute>
            <BrandIdentity />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
