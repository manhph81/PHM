import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Distributor from './components/Distributor/Distributor';
import Manufacturer from './components/Manufacturer/Manufacturer';
import Supplier from './components/Supplier/Supplier';
import Retailer from './components/Retailer/Retailer';
import Auth from './components/Auth/Auth';

const App = () => {
  return(
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Switch>
          <Route path="/Retailer" exact component={Retailer}></Route>
          <Route path="/Manufacturer" exact component={Manufacturer}></Route>
          <Route path="/Distributor" exact component={Distributor}></Route>
          <Route path="/Supplier" exact component={Supplier}></Route>
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;
