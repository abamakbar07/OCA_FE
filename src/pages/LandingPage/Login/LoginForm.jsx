import React, { useContext, useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { user } from '../../../assets/dummyBlast'
import logo from '../../../assets/mainLogo.svg'
import { AppContext } from '../../../components/context/GlobalContext'

const LoginForm = () => {
  const [state, dispatch] = useContext(AppContext)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  const getLogin = () => {
    if (loginForm.email == user.email && loginForm.password == user.password ) {
      dispatch({
        type: "USER_LOGIN",
        payload: {
          login: true,
          email: user.email,
          fullname: user.fullname,
        },
      });
    }

  }
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
          name="email"
          placeholder="Enter email"
          onChange={(e) => onChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="LoginFormLabel">Password</Form.Label>
        <InputGroup>
          <Form.Control
            className="InputPassword border-0"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => onChange(e)}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2" className="bg-transparent">
              <div className="ForgotButton" style={{ cursor: "pointer" }}>
                Forgot?
              </div>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      <Button
        className="SubmitButton border-0"
        type="submit"
        onClick={getLogin}
      >
        sign in
      </Button>
    </Form>
  );
}

export default LoginForm
