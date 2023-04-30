import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signUser} = useContext(AuthContext)
    const handleSignIn = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login!!!</h3>
            <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="Login">
        Submit
      </Button>
      <br />
      <Form.Text className="text-success">
     Don't have an Account?<Link to='/register'>Register</Link>
       </Form.Text>
      <Form.Text className="text-success">
       
       </Form.Text>
      <Form.Text className="text-danger">
       
       </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;