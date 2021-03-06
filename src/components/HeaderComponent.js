import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
    <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/home">
               <h4>Shopping</h4>
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link active"  to='/home'><span className="fa fa-home fa-lg"></span> Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/cart'><span className="fa fa-shopping-cart fa-lg"></span> Cart</NavLink>
                    </NavItem>
                </Nav>
              </Collapse>
          </div>
        </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;