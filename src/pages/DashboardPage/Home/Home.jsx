import React, { useState } from 'react'
import NavBar from '../NavBar';
import ModalAlert from '../../ModalAlert'
import sort from '../../../assets/icon/sort.svg'
import filter from '../../../assets/icon/filter.svg'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { blastRecent } from '../../../assets/dummyBlast'

const Home = () => {
  const [alert, setAlert] = useState(true);

  const showAlert = () => setAlert(false);

   return (
     <div className="Home bg-light">
       <NavBar />

       <Container className={alert ? "d-block" : "d-none"}>
         <ModalAlert
           showAlert={showAlert}
           header="Hello, Welcome to OCA!"
           message={
             <div>
               Let’s start make some noise and make your campaign great again!
               <a href="#"> click here</a> to spread your messages.
             </div>
           }
         />
       </Container>

       <Container className="container pt-5">
         <div className="QuotaInfo">
           <h5 className="text-left">Remaining Quota</h5>
           <Row className="m-0 p-0">
             <Col className="p-1">
               <div className="border rounded container d-flex pt-3 pb-3">
                 <div className="Label mr-auto">Call</div>
                 <div className="Label Call ">4840 seconds</div>
               </div>
             </Col>
             <Col className="p-1">
               <div className="border rounded container d-flex pt-3 pb-3">
                 <div className="Label mr-auto">SMS</div>
                 <div className="Label SMS ">1245 messages</div>
               </div>
             </Col>
             <Col className="p-1">
               <div className="border rounded container d-flex pt-3 pb-3">
                 <div className="Label mr-auto">Email</div>
                 <div className="Label Email ">7710 mails</div>
               </div>
             </Col>
             <Col className="p-1">
               <div className="border rounded container d-flex pt-3 pb-3">
                 <div className="Label mr-auto">Whatsapp</div>
                 <div className="Label Whatsapp ">330 messages</div>
               </div>
             </Col>
           </Row>
         </div>
       </Container>

       <Container className="container pt-5 pb-5">
         <div className="RecentBlast">
           <Row className="m-0 p-0">
             <Col className="border rounded">
               <div className="d-flex pt-3 pb-1">
                 <h6 className="text-left mr-auto">Remaining Quota</h6>
                 <div className="SortFilter">
                   <img className="mr-1" src={sort} />
                   Sort
                 </div>
                 <div className="SortFilter ml-3 mr-5">
                   <img className="mr-1" src={filter} />
                   Filter
                 </div>
               </div>
               <Table hover responsive="md">
                 <thead>
                   <tr>
                     <th className="idName">Id Name</th>
                     <th className="type">Type</th>
                     <th className="campaign">Campaign</th>
                     <th className="totalBlast">Total Blast</th>
                     <th className="status">Status</th>
                     <th className="date">Date</th>
                   </tr>
                 </thead>
                 <tbody>
                   {blastRecent.map((data) => (
                     <tr>
                       <td>{data.idName}</td>
                       <td>{data.type}</td>
                       <td>{data.campaign}</td>
                       <td>{data.totalBlast}</td>
                       <td>{data.status}</td>
                       <td>{data.date}</td>
                     </tr>
                   ))}
                 </tbody>
               </Table>
             </Col>
           </Row>
         </div>
       </Container>
     </div>
   );
}

export default Home
