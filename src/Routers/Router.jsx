import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import Details from '../Page/Details';
import Equipment from '../Page/Equipment';
import Login from '../Page/Login';
import MyEquipmentList from '../Page/MyEquipmentList';
import Register from '../Page/Register';
import Forgot from '../UI/Forgot';
import MyProfile from '../UI/MyProfile';
import UpdateProfile from '../UI/UpdateProfile';
import AddEquipment from '../Page/AddEquipment';
import PrivateRoute from '../Private/PrivateRoute';
import UpgradedProducts from '../Page/UpgradedProducts';
import BlogPage from '../Page/BlogPage';

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
        path: '/BlogPage',
        element: <BlogPage></BlogPage>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Register',
        element: <Register></Register>,
      },
      {
        path: '/Forgot',
        element: <Forgot></Forgot>,
      },
      {
        path: '/Equipment',
        element: <Equipment></Equipment>,
      },
      {
        path: '/MyProfile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/UpdateProfile',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/MyEquipmentList',
        element: <MyEquipmentList></MyEquipmentList>,
      },
      {
        path: '/Details/:_id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            'https://a10-b10-sports-equipment-store-server.vercel.app/Details'
          ),
      },
      {
        path: '/AddEquipment',
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: '/UpgradedProducts/:_id',
        element: <UpgradedProducts> </UpgradedProducts>,
        loader: () =>
          fetch(
            'https://a10-b10-sports-equipment-store-server.vercel.app/AllProducts'
          ),
      },
    ],
  },
]);
export default router;
