import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase/firebase.config'

const auth = getAuth(app)

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    setError('');
    setSuccess('');
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Please add at least 2 uppercase')
        return
    } else if(!/(?=.*[!@#$&*])/.test(password)) {
        setError('Please use special characters')
    } else if(password.length < 6) {
        setError('Password must contain 6 characters')
    }

    createUserWithEmailAndPassword(auth , email , password)
        .then(result => {
            const loggedUser = result.user;
            setError('')
            event.target.reset()
            setSuccess('User has been created')
            sendEmailVerification(loggedUser.email)
        })

  };

  const sendEmailVerification = email => {
    console.error(error.message)
    setError(error.message)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p> 
    </div>
  );
};

export default Login;
