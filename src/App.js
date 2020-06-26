import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import Help from "./Pages/Help";
import About from "./Pages/About";

export const AppContext = React.createContext();

function App() {
  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          UserId: 124,
          UserName: "Atul Rastogi",
          EmployeeId: "PW01202",
        }}
      >
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            BMS 2.0
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/help/999">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/help/999">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="container">
          <br />
          <br />
          <br />

          {/* Extend with help https://reacttraining.com/react-router/web/example/basic */}
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              {/* <Route exact path="/OneLead/:LeadId">
                <OneLead />
              </Route> */}
              <Route path="/help/:lead">
                <Help />
              </Route>
            </Switch>
          </Router>
        </main>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
