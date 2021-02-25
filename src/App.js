import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import NavBar from './Components/Nav/Nav';
function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route key={'/'} exact path={'/'}>
          <Home />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
