import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/views/landingpage/LandingPage';
import Home from './components/views/home-page/Home';
import Form from './components/views/form/Form';
import Detail from './components/detail/Detail';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
