import React from "react";
import logo from "../../../assets/assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";



const Header = () => {
  
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism without Fear and Favor.</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-info" style={{}} pauseOnHover={true} speed={70}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
     
    </Container>
  );
};

export default Header;
