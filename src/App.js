import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function App() {
  library.add( faBars)
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Nosotros" component={Nosotros} />
        <Route exact path="/Nosotros/Contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
