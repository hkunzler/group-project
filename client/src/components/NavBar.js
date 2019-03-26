import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm'
import { withProduct } from "../context/ProductProvider";



class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const totalItems = this.props.cart.length
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto" className='logo'></NavbarBrand>
          <NavLink to="/cart" className="fa-stack fa-2x shopping-cart" data-count={totalItems}>
            <i className="fa fa-shopping-cart fa-stack-2x"></i>
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          {/* <SearchForm />            */}
            <Nav onClick={this.toggleNavbar} navbar>
              <NavItem  >
                <NavLink exact to="/">Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withProduct(NavBar)

