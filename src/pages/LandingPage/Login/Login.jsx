import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

import QLogo from '../../../assets/QLogo/QLogo2x.png'
import LoginForm from './LoginForm';

const Login = () => {
   return (
     <div className="LandingPageLogin">
       <Row className="m-0">
         <Col className="p-0" md={5} style={{ zIndex: 1000}}>
           <div className="LoginContainer">
             <LoginForm />
           </div>
         </Col>
         <Col className="p-0" md={7} style={{ backgroundColor: "#ED1260" }}>
            <img className="LandingPageLogo" src={QLogo} />
         </Col>
       </Row>
     </div>
   );
}

export default Login
