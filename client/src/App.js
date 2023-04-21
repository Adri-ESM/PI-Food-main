import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import LandingPage from './components/views/landingpage/LandingPage';
import Home from './components/views/home-page/Home';


export default function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
   
  );
}


