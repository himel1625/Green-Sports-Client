import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import Equipment from '../Page/Equipment';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Forgot from '../UI/Forgot';
import MyProfile from '../UI/MyProfile';

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
    ],
  },
]);
export default router;
