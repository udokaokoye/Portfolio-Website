import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import Particles from 'react-particles-js';
import Home from './Pages/Home/Home';
import Admin from "./Pages/Admin/Admin";
import AdminAuth from "./Pages/AdminLogin/AdminLogin";
import NavBar from './Components/Nav/Nav';
function App() {
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
        <NavBar />
        {/* <Particles width='100%' height='100%' /> */}
        {/* <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        // url: 'path/to/svg.svg'
                    }
                }} /> */}
          <Home />
        </Route>

        <Route key={'/admin'} exact path={'/admin'}>
            <Admin />
        </Route>

        <Route key={'/auth/admin'} exact path={'/auth/admin'}>
            <AdminAuth />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
