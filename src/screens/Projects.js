import React from "react";
import M from "materialize-css";
import dgIMG from "../img/dgd.png";
import gifIMG from "../img/giftastic.png";
import eventIMG from "../img/eventualities.png";
import zigIMG from "../img/Screen Shot 2019-08-05 at 10.02.09 AM.png";
import gotIMG from "../img/Screen Shot 2019-08-05 at 10.56.23 AM.png";
import blitzIMG from "../img/blitz.png";
import Nav from "../components/ProjectNav";
const ProjectPage = () => (
  <>
    <Nav />
    <div class="row" id="top">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://asmith7531.github.io/DGD_utility/DGD%20Generator/"
              target="_blank"
              src={dgIMG}
              alt="Dangerous Goods Document Utility"
            />
            <span class="card-title">DGD-Utility</span>
          </div>
          <div class="card-content">
            <p>
              My first solo project I can say I am proud of. It is a web app I
              made to help me with my current job, creating documents for
              shipping hazardous materials overseas. The goal was to perform all
              the calculations for me and then display the data all in one
              place. It was presented to my companies IT department, and
              integrated into their website.
            </p>
          </div>
          <div class="card-action">
            <a
              href="https://asmith7531.github.io/DGD_utility/DGD%20Generator/"
              target="_blank"
            >
              DGD-Utility Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://radiant-wildwood-53087.herokuapp.com/"
              target="_blank"
              src={zigIMG}
              alt="memory-game"
            />
            <span class="card-title">ZigZag</span>
          </div>
          <div class="card-content">
            <p>
              "This react app was the first I worked on that did not use
              create-react-app as a starting place. Webpacks and getting hot
              reloading for development purposes to work correctly was a little
              tricky but we learned alot doing it. I did a lot of the front end
              work. I initially started using semantic-ui-react but then pivoted
              to use materialize-css because I wanted to try and use scss and
              precompile my css for this project. This app is geared towards
              helping high school and college age students explore career paths
              and colleges that line up with their interests."
            </p>
          </div>
          <div class="card-action">
            <a
              href="https://radiant-wildwood-53087.herokuapp.com"
              target="_blank"
            >
              ZigZag - Find yourself!
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://rocky-badlands-45326.herokuapp.com"
              target="_blank"
              src={eventIMG}
              alt="eventualities"
            />
            <span class="card-title">Eventualities</span>
          </div>
          <div class="card-content">
            <p>
              My first group project while in the Rutgers Coding Bootcamp,
              Eventualities is an app for finding things to do near you. It
              exposed me to Firebase Authentication, CryptoJS, and the Google
              Maps API.
            </p>
          </div>
          <div class="card-action">
            <a
              href="https://rocky-badlands-45326.herokuapp.com"
              target="_blank"
            >
              Eventualities Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://github.com/rachaelbelle/blitzkreig.git"
              target="_blank"
              src={blitzIMG}
              alt="blitzkrieg"
            />
            <span class="card-title">Blitzkrieg! Siege Your Day!</span>
          </div>
          <div class="card-content">
            <p>
              This NodeJS app was made to try and be a mobile friendly dashboard
              app. Something where the user could subscribe to get streams of
              diferent data per your individual tastes.
            </p>
          </div>
          <div class="card-action">
            <a href="https://blitzkreigg.herokuapp.com/" target="_blank">
              Eventualities Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://asmith7531.github.io/GifTastic/"
              target="_blank"
              src={gifIMG}
              alt="giftastic"
            />
            <span class="card-title">Giftastic</span>
          </div>
          <div class="card-content">
            <p>
              "Created as homework in Rutgers Coding Bootcamp, Giftastic was a
              fun app that searched giphy's API. It exposed me to creating
              dynamic html elements, making AJAX requests to RESTful APIs, and
              new CSS techniques."
            </p>
          </div>
          <div class="card-action">
            <a href="https://asmith7531.github.io/GifTastic/" target="_blank">
              GifTastic Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img
              href="https://asmith7531.github.io/memory-game/"
              target="_blank"
              src={gotIMG}
              alt="memory-game"
            />
            <span class="card-title">Game of Thrones Memory Game</span>
          </div>
          <div class="card-content">
            <p>
              "This NodeJS app was a homework assignment for Rutgers coding
              bootcamp, this project taught me a lot about manipulating state
              using React and is deployed onto an Amazon Web Services EC2
              instance using nginx and pm2 to keep the server constantly
              running."
            </p>
          </div>
          <div class="card-action">
            <a
              href="ec2-13-59-179-12.us-east-2.compute.amazonaws.com"
              target="_blank"
            >
              Game of Thrones Memory Game
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProjectPage;
