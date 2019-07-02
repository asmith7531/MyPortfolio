import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./Components/Landing/Landing";

import AboutMe from "./Components/AboutMe/AboutMe";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Home />
    // <Router>
    //   <>
    //     <Home />
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/about" component={AboutMe} />
    //   </>
    // </Router>
  );
}
export default App;
