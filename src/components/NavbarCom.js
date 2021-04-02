import React from "react";
import logo from "../img/logo.jpg";
import { Button, Form, Nav, FormControl, Navbar } from "react-bootstrap";
import Badge from '../material/Badge'

const NavbarCom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" id="brand">
        BazarShodai.com
        <img src={logo} alt="logo" style={{ width: "70px", height: "55px" }} />
      </Navbar.Brand>
     <div className='mx-3'> <Badge/></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-5">
          <Nav.Link href="#home" id="items">
            Vegetables
          </Nav.Link>
          <Nav.Link href="#link" id="items">
            Fish
          </Nav.Link>
          <Nav.Link href="#link" id="items">
            Meat
          </Nav.Link>
          <Nav.Link href="#link" id="items">
            Grocery
          </Nav.Link>
        </Nav>
        
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
