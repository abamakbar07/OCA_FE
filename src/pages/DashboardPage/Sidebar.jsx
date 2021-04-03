import React, { useState } from 'react'
import { Button, Collapse, Container, ListGroup } from 'react-bootstrap';
import logo from "../../assets/secondaryLogo.svg";
import home from "../../assets/icon/home.svg";
import sms from "../../assets/icon/sms.svg";
import arrow from "../../assets/icon/arrow.svg";
import dropdownItem from "../../assets/icon/dropdown.svg";

const Sidebar = () => {
   const [open, setOpen] = useState(false);

   return (
     <div className="Sidebar shadow p-3 mb-5">
       <div className="Header pt-5 pb-5">
         <img src={logo} alt="" />
       </div>
       <div className="Features pt-5">
         <ListGroup className="text-white">
           <ListGroup.Item className="bg-transparent border-0 pl-1 pr-1">
             <Container className="HomeButton">
               <div className="d-block text-left">
                 <img src={home} />
                 <span className="align-baseline pl-2">Home</span>
               </div>
               <div className="activePage mt-2"></div>
               {/* activepage */}
             </Container>
           </ListGroup.Item>

           <ListGroup.Item className="bg-transparent border-0 pl-1 pr-1">
             <Container className="FeatureButton">
               <div className="d-block text-left">
                 <div
                   className="d-flex"
                   style={{ width: "100%" }}
                   onClick={() => setOpen(!open)}
                   aria-controls="featureList"
                   aria-expanded={open}
                 >
                   <div className="mr-auto">
                     <img src={sms} />
                     <span className="align-baseline pl-2">SMS</span>
                   </div>
                   <div>
                     <img
                       src={arrow}
                       className="arrowDropdown"
                       style={{
                         transform: open ? "rotate(180deg)" : "rotate(360deg)",
                       }}
                     />
                     {/* dropdown */}
                   </div>
                 </div>
               </div>
               <div className="d-none mt-2"></div>
               {/* activepage */}
             </Container>
           </ListGroup.Item>

           <Collapse in={open}>
             <div className="sidebarFeatureList" id="featureList">
               <ListGroup.Item className="bg-transparent border-0 pt-0 pb-0 pl-1 pr-1">
                 <Container className="FeatureList ml-2">
                   <div className="d-block text-left">
                     <div className="d-flex" style={{ width: "100%" }}>
                       <img src={dropdownItem} />
                       <div className="d-block pl-2 pt-3">
                         <span className="">Broadcast</span>
                         <div className="d-none pl-2 mt-1"></div>
                         {/* activepage */}
                       </div>
                     </div>
                   </div>
                 </Container>
               </ListGroup.Item>
               <ListGroup.Item className="bg-transparent border-0 pt-0 pb-0 pl-1 pr-1">
                 <Container className="FeatureList ml-2">
                   <div className="d-block text-left">
                     <div className="d-flex" style={{ width: "100%" }}>
                       <img src={dropdownItem} />
                       <div className="d-block pl-2 pt-3">
                         <span className="">SMS Scheduller</span>
                         <div className="activePage pl-2 mt-1"></div>
                         {/* activepage */}
                       </div>
                     </div>
                   </div>
                 </Container>
               </ListGroup.Item>
             </div>
           </Collapse>
         </ListGroup>
       </div>
     </div>
   );
}

export default Sidebar
