import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {

    const {user} = useContext(AuthContext)
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           {user && <Link to='/'>Home</Link>}
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
           { user && 
              <BsPersonCircle style={{fontSize: '2rem'}}>
                </BsPersonCircle>
              }
            { user ?
              <Button variant="info">Log Out</Button> :
             <Link to='/login'><Button variant="info">Login</Button></Link>
              }
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;