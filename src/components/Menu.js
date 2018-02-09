import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Menu extends React.Component {
  render() {
    return (

      <div className='menubar'>

        <Navbar>

          <Nav bsStyle="tabs" onSelect={this.handleSelect}>

            <NavItem eventKey="1">
              <Link to='/home'>
                Home
              </Link>
            </NavItem>

            <NavItem eventKey="2">
              <Link to='/about'>
                About
              </Link>
            </NavItem>

            <NavItem eventKey="3">
              <Link to='/services'>
                Services
              </Link>
            </NavItem>

          </Nav>

        </Navbar>
{/*

        <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle pull-right" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <a href="index.html" class="navbar-brand" target="_blank" rel="noopener noreferrer">
              <img src='img/logo/logo_smaller.png' className='icon-footer' alt="logo" title="logo" />
            </a>

            <a href="index.html" class="navbar-brand"><strong>Orange LLC</strong></a>

        </div>

        <div class="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="index.html">HOME</a></li>
                <li><a href="about-us.html">ABOUT US</a></li>
                <!-- <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">PAGES <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="services.html">Services</a></li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </div>
</div> */}

      </div>

    );

  }

}
