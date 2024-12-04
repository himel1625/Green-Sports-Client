import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import Login from '../Page/Login';
import Register from '../Page/Register';

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
    ],
  },
]);
export default router;
