import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2 p-3" variant="outline-primary">
        
        <FcGoogle /> Login with Google
      </Button>
      <Button className="p-3" variant="outline-secondary">
      
        <FaGithub /> Login With Github
      </Button>

      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="p-3"> <FaFacebookSquare /> Facebook </ListGroup.Item>
          <ListGroup.Item className="p-3"><FaTwitter className="text-primary"></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="p-3"><FaInstagram className="text-danger"></FaInstagram> Instagram</ListGroup.Item>
         
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
