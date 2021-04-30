import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import Homes from './pages/Homes';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Rooms from './pages/Rooms';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Homes} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
