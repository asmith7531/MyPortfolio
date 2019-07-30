import React, { Component } from "react";
import M from "materialize-css";
export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo center">
              Hello
            </a>
            <ul class="left hide-on-med-and-down">
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li class="">
                <a href="collapsible.html">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
