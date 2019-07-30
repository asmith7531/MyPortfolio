import React, { Component } from "react";
import M from "materialize-css";
export default class Carousel extends Component {
  // componentDidMount() {
  //   var elem = document.querySelector(".carousel");
  //   var instance = M.Carousel.init(elem, { indicators: true });
  // }
  render() {
    return (
      <div className="container">
        <div id="carouselFirst" class="carousel carousel-slider">
          <div
            class="carousel-item blue-grey lighten-2 white-text"
            href="#one!"
          >
            <div className="container">
              <h2>The main technologies I use are:</h2>
              <li>React</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Amazon Web Services</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <p>
                and a plethora of other libraries, to create websites that look
                good with fantastic functionality.
              </p>
            </div>
          </div>
          <div />
          {/* <div
            id="carouselSecond"
            class="carousel-item amber white-text"
            href="#two!"
          >
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
          </div> */}
        </div>
      </div>
    );
  }
}
