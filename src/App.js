import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/rooms' component={Rooms}/>
        <Route exact path = '/rooms/:slug' component={SingleRoom}/>
        <Route exact path = '/error' component={Error}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
