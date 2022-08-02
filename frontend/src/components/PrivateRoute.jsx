import { Navigate, Outlet } from 'react-router';
import { useAuthStatus } from '../app/hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
