import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class My_navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        
          }
          this.toggleNav = this.toggleNav.bind(this);
          
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render() {
        return (
          <React.Fragment>
              <Navbar dark expand="md">
                <NavbarToggler onClick={this.toggleNav} />
                <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                      </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>About Us
                      </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Menu
                      </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                      </NavLink>
                </NavItem>
             
              </Nav>
            </Collapse> 
                </div>
              </Navbar>
              
          </React.Fragment>  
        )
    }
}

export default My_navbar