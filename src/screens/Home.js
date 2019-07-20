import React, { Component } from "react";
import M from "materialize-css";
import Coders from "../img/coders.jpg";
export default class Home extends Component {
  componentDidMount() {
    var elem = document.querySelector(".parallax");
    var instance = M.Parallax.init(elem);
  }
  render() {
    return (
      <>
        <div className="section container">
          <h4 className="center">My name is Austin and I like to code.</h4>
          <p>
            The main technologies I use are: HTML, CSS, Javascript, React, and a
            plethora of libraries, to create websites that look good and
            function even better.
          </p>
        </div>
        <div>
          <div class="parallax-container">
            <div class="parallax">
              <img src={Coders} alt="coding" />
            </div>
          </div>
        </div>
        <div className="container section">
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">filter_drama</i>First
              </div>
              <div class="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">place</i>Second
              </div>
              <div class="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">whatshot</i>Third
              </div>
              <div class="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
