import './App.scss';

import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './auth/protected-route';
import Loading from './components/loading';
import { ImageDetailsView } from './views/image-details';
import { MainView } from './views/main';
import Profile from './views/profile';

function App() {
  const { getAccessTokenSilently } = useAuth0();

  const token = getAccessTokenSilently();

  console.log(token);
  // const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  // console.log(isLoading, 'isAuth', isAuthenticated);
  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch('http://localhost:8080/album', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const responseData = await response.json();
  //     // console.log(responseData);

  //     // console.log(token);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };
  return (
    <>
      <Switch>
        <Route exact path='/' component={MainView} />
        <Route exact path='/image/:id/:secret' component={ImageDetailsView} />
        <ProtectedRoute exact path='/profile' component={Profile} />
      </Switch>
    </>
  );
}

export default App;
