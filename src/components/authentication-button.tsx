import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import LoginButton from './logInButton/login-button';
import LogoutButton from './logOutButton/logout-button';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
