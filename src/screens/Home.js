import React, { Component } from "react";
import M from "materialize-css";
import Coders from "../img/coders.jpg";
import Carousel from "../components/Carousel";
export default class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <>
        <div className="section container">
          <h5 className="center scrollspy" id="#top">
            Hello, I make web applications and websites.
          </h5>
        </div>
        <div>
          <div class="parallax-container">
            <div class="parallax">
              <img src={Coders} alt="coding" />
            </div>
          </div>
        </div>
        <div className="section">
          <Carousel />
        </div>
        <div className="container section scrollspy" id="about">
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">
                <i class="material-icons">about</i>A little about me.
              </div>
              <div class="collapsible-body">
                <span>
                  I was born in Kansas and have always had a passion for
                  technologies. I first started working with computers when I
                  went to a "build a pc" summer camp in elementary school. There
                  I built my first personal computer, stirring my interest in
                  computers and kickstarting a passion that is continuing today
                  through web development.
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">color_lens</i>Why do I like to code?
              </div>
              <div class="collapsible-body">
                <span>
                  I love to code because it allows me to be creative in my own
                  way. I like creating cool stuff and web development has
                  allowed my to do that. Also the feeling of finally solving
                  that tough problem that was giving me hell drives me to grind
                  it out.
                </span>
              </div>
            </li>

            <li>
              <div class="collapsible-header">
                <i class="material-icons">code</i>What is your favorite code
                editor?
              </div>
              <div class="collapsible-body">
                <span>
                  VS Studio Code for right now, but I want to start moving
                  towards Vim because it is what the cool kids use.
                </span>
              </div>
            </li>
            <li>
              <div class="collapsible-header">
                <i class="material-icons">whatshot</i>What is your favorite
                videogame?
              </div>
              <div class="collapsible-body">
                <ul>
                  <li>
                    Singleplayer: "The Last of Us" because the story had my
                    crying. at the end.
                  </li>
                  <li>Multiplayer: "PUBG" bring on the chicken dinner.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
