import React from "react";
import M from "materialize-css";
import dgIMG from "../img/dgd.png";
import gifIMG from "../img/giftastic.png";
import eventIMG from "../img/eventualities.png";
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
              href="https://rocky-badlands-45326.herokuapp.com"
              target="_blank"
              src={eventIMG}
              alt="Dangerous Goods Document Utility"
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
              href="https://asmith7531.github.io/GifTastic/"
              target="_blank"
              src={gifIMG}
              alt="Dangerous Goods Document Utility"
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
  </>
);

export default ProjectPage;
