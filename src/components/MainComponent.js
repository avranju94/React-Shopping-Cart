import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  
  render() {

    const HomePage = () => {
      return(
        <Home />
        );
    }

    return (
      <div>
         <Header />
            <Switch>
               <Route path="/home" component={HomePage} />
            </Switch>
      </div>
    );
  }
}
export default Main;
