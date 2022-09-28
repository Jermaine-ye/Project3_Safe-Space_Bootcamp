import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoutesClient = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();
  console.log(`Client Info`, user);
  let auth = user[`https://any-namespace/roles`].length === 0;
  console.log(auth, ' User: Client');
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutesClient;
