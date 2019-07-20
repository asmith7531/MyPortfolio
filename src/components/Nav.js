import React, { Component } from "react";
import M from "materialize-css";
export default class Nav extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem);
  }
  render() {
    return (
      <div>
        <nav>Austins Portfolio</nav>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src="images/office.jpg" />
              </div>
              <a href="#user">
                <img class="circle" src="images/yuna.jpg" />
              </a>
            </div>
          </li>
          <li>
            <div class="divider" />
          </li>
          <li>
            <a class="waves-effect" href="#!">
              Home
            </a>
          </li>
          <li>
            <a class="waves-effect" href="#!">
              My Projects
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
