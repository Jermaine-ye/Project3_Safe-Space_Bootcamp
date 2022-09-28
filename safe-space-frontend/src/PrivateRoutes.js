import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();

  console.log(`Therapist Info`, user);
  let auth = user[`https://any-namespace/roles`].length === 1;
  console.log(auth, 'Admin User: Therapist');
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
