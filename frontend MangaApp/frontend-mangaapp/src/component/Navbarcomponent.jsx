import {Navbar, Nav} from 'react-bootstrap';
import React, {Component} from 'react';
import "./Navbarcomponent.css";

class Navbarcomponent extends Component{

  render(){

    return(
        <div className="navigation-bar">
          <Navbar className = "nav-bar" bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/newmanga">Add Manga</Nav.Link>
            <Nav.Link href="/discover">Discover</Nav.Link>
          </Nav>
          <Nav className="mr-right">
              <Nav.Link href="/about">About this App</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navbarcomponent
