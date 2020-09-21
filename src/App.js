import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Title from './components/Title'

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
      <div className="w-screen h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 px-4">
        <div className="container flex flex-col justify-center py-5">
          <Title/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Nosotros" component={Nosotros} />
            <Route exact path="/Nosotros/Contacto" component={Contacto} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
