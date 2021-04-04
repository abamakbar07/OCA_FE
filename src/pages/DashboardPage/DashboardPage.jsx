import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../components/context/GlobalContext'
import Home from './Home/Home'
import MainFeatures from './MainFeatures/MainFeatures'
import Sidebar from './Sidebar'

const DashboardPage = (props) => {
   // const history = useHistory();
   // const [state] = useContext(AppContext);
   console.log(props.page)
   // if (state.isLogin) history.push("/dashboard");

   return (
     <div className="DashboardPage">
       <Row className="m-0">
         <Col className="p-0" sm={2}>
           <Sidebar page={props.page} />
         </Col>
         <Col className="p-0" sm={10}>
           {props.page == "Home" ? <Home /> : <MainFeatures />}
         </Col>
       </Row>
     </div>
   );
}

export default DashboardPage
