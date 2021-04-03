import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Home from './Home/Home'
import MainFeatures from './MainFeatures/MainFeatures'
import Sidebar from './Sidebar'

const DashboardPage = () => {
   return (
     <div className="DashboardPage">
       <Row className="m-0">
         <Col className="p-0" sm={2}>
           <Sidebar />
         </Col>
         <Col className="p-0" sm={10}>
           <Home />
           {/* <MainFeatures /> */}
         </Col>
       </Row>
     </div>
   );
}

export default DashboardPage
