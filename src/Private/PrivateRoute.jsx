import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
// import Loader from '../Components/Loader';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();


  // if (setLoading) {
  //   return <Loader></Loader>;
  // }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={pathname} to="/Login"></Navigate>;
};

export default PrivateRoute;
