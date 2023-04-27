import React from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button variant="outline-primary"> <FcGoogle /> Login with Google</Button>
      <Button  variant="outline-secondary">  <FaGithub />  Login With Github</Button>
    </div>
  );
};

export default RightNav;
