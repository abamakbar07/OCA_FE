import React, { useContext } from 'react'
import { Col, Form, FormControl, InputGroup, Navbar, Row } from "react-bootstrap";

import helpIcon from '../../assets/icon/help.svg'
import profileImageDefault from "../../assets/icon/profileImageDefault.svg";
import { AppContext } from '../../components/context/GlobalContext';

const NavBar = () => {
  const [state, dispatch] = useContext(AppContext)

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
  }

  return (
    <div className="NavBar pt-5 pb-5">
      <Navbar>
        <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
          <Form inline>
            <Form.Group className="bg-transparent">
              <InputGroup>
                <InputGroup.Append>
                  <InputGroup.Text
                    id="basic-addon2"
                    className="bg-transparent border-0"
                    style={{ borderColor: "#BBC1C8" }}
                  >
                    <div className="HelpButton" style={{ cursor: "pointer" }}>
                      <img src={helpIcon} />
                    </div>
                  </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control
                  className="Help border-0 bg-transparent"
                  type="text"
                  placeholder="Any help?"
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Navbar.Collapse>

        <Navbar.Brand style={{ cursor: "pointer" }}>
          <Row>
            <Col className="text-right p-0">
              <div className="ProfileImageButton main">Hi, {state.user.fullname}!</div>
              <div className="ProfileImageButton secondary">
                {state.user.email}
              </div>
            </Col>
            <Col>
              <img src={profileImageDefault} onClick={logout} />
            </Col>
          </Row>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      </Navbar>
    </div>
  );
}

export default NavBar
