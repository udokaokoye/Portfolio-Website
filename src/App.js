import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Particles from 'react-particles-js';
import Home from './Pages/Home/Home';
import NavBar from './Components/Nav/Nav';
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route key={'/'} exact path={'/'}>
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
      </React.Fragment>
    </Router>
  );
}

export default App;
