import React from 'react'
import SMSBroadcast from './SMS/SMSBroadcast/SMSBroadcast'
import SMSScheduler from './SMS/SMSScheduler/SMSScheduler'

const MainFeatures = () => {
   return (
      <div className="MainFeatures">
         <SMSBroadcast />
         <SMSScheduler />
      </div>
   )
}

export default MainFeatures
