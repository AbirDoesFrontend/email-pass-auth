import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import app from '../../firebase/firebase.config'

const BootstrapLogIn = () => {

  const auth = getAuth(app)

  const submitHandler = event => {

    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth , email , password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => {
        console.error(error)
      })
    console.log(email , password)
  }

  const handleEmail = event => {
    console.log(event.target.value)
  }

  return (
    <div>
      <Form onSubmit={ submitHandler }>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={ handleEmail }/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BootstrapLogIn;
