import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { user } from "./assets/dataDummy";
import { AppContext } from "./components/context/GlobalContext";
import PrivateRoute from "./components/routes/PrivateRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [state, dispatch] = useContext(AppContext)

  const checkUser = async () => {
    try {
      if (localStorage.login) {
        dispatch({
          type: "USER_LOADED",
          payload: {
            fullname: user.fullname,
            email: user.email,
          }
        })
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <PrivateRoute
            path="/dashboard"
            exact
            component={() => <DashboardPage page="Home" />}
          />
          <PrivateRoute
            path="/dashboard/SMS"
            exact
            component={() => <DashboardPage page="SMS" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
