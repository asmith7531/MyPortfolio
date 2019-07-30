import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import "./styles/sass/materialize.scss";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </>
    </Router>
  );
}
export default App;
