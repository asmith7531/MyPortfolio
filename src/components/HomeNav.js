import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed blue-grey">
        <nav>
          <div class="nav-wrapper blue-grey">
            <Link to="/" class="brand-logo center">
              My Portfolio
            </Link>
            <ul class="left hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link to="/projects" href="#top">
                  Projects
                </Link>
              </li>
              <li class="">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
