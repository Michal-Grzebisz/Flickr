import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import { MainView } from './views/main';
import { ImageDetailsView } from './views/image-details';


function App() {


  return (
      <>
        <BrowserRouter>
          <Route exact path='/'>
            <MainView />
          </Route>
          <Route exact path='/image/:id/:secret'>
            <ImageDetailsView />
          </Route>
        </BrowserRouter>
      </>
  );
}

export default App;