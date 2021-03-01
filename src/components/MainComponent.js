import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent';
import Cart from './CartComponent';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  
  render() {
    return (
      <div>
         <Header />
            <Switch>
               <Route path="/home" component={Home} />
               <Route path="/cart" component={Cart} />
            </Switch>
      </div>
    );
  }
}
export default Main;
