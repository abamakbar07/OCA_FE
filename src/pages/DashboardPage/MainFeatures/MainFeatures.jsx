import React from 'react'
import NavBar from '../NavBar'
import SMSBroadcast from './SMS/SMSBroadcast/SMSBroadcast'
import SMSScheduler from './SMS/SMSScheduler/SMSScheduler'

const MainFeatures = () => {
   return (
      <div className="MainFeatures">
         <NavBar />
         {/* <SMSBroadcast /> */}
         <SMSScheduler />
      </div>
   )
}

export default MainFeatures
