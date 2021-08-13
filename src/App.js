import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Admin from "./Pages/Admin/Admin";
import AdminAuth from "./Pages/AdminLogin/AdminLogin";
import NavBar from './Components/Nav/Nav';
import Bbn from "./Pages/BBN/Bbn";
function App() {
  
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
        <NavBar />
          <Home />
        </Route>

        <Route key={'/admin'} exact path={'/admin'}>
            <Admin />
        </Route>

        <Route key={'/auth/admin'} exact path={'/auth/admin'}>
            <AdminAuth />
        </Route>

        <Route path='/bbnlive' exact key={"bbnlive"}>
          <Bbn />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
