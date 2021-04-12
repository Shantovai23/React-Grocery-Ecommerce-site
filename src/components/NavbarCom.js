import React, { useContext } from "react";
import logo from "../img/logo.jpg";
import { Button, Form, Nav, FormControl, Navbar } from "react-bootstrap";
import Badge from '../material/Badge'
import {Link} from 'react-router-dom'
import {CartContext} from '../Global/CartContext'

const NavbarCom = () => {
  const data=useContext(CartContext)
  
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>
        <Link id="brand" to='/React-Grocery-Ecommerce-site'>BazarShodai.com</Link>
        <img src={logo} alt="logo" style={{ width: "70px", height: "55px" }} />
      </Navbar.Brand>
     <div className='mx-3'><Link to='/cart'><Badge test={data.quantity} /></Link></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-5">
          <Nav.Link  >
          <Link id="items" to='grocery'> Grocery</Link>
          </Nav.Link>
          <Nav.Link  >
          <Link id="items" to='clothes'> Clothes</Link>
          </Nav.Link>
        </Nav>
        
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
