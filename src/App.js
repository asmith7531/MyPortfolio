import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import "./styles/sass/materialize.scss";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <div scrollspy id="contact">
          <Footer />
        </div>
      </>
    </Router>
  );
}
export default App;
