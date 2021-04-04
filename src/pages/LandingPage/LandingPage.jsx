import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../components/context/GlobalContext'
import Login from './Login/Login'

const LandingPage = () => {
   const history = useHistory()
   const [state] = useContext(AppContext)

   if (state.isLogin) history.push("/dashboard")

   return (
      <div className="LandingPage">
         <Login />
      </div>
   )
}

export default LandingPage
