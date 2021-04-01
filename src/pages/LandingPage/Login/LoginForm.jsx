import React from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import logo from '../../../assets/mainLogo.svg'

const LoginForm = () => {
  return (
    <Form className="LoginForm text-left m-1">
      <div className="text-center">
        <img src={logo} />
      </div>
      <div className="LoginFormHeader mt-5">
        <p>Welcome Back, Please login into your account</p>
      </div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="LoginFormLabel">Username / Email</Form.Label>
        <Form.Control
          className="InputEmail"
          type="email"
          placeholder="Enter email"
          value="Adjie_g4ant3ng@banget.com"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="LoginFormLabel">Password</Form.Label>
        <InputGroup>
          <Form.Control className="InputPassword border-0" type="password" placeholder="Password" value="delapan8" />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2" className="bg-transparent">
              <div className="ForgotButton" style={{cursor: "pointer"}}>
                Forgot?
              </div>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      <Button className="SubmitButton border-0" type="submit">
        sign in
      </Button>
    </Form>
  );
}

export default LoginForm
