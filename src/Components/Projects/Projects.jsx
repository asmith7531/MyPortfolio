import React from "react";
import { Segment, Card, Icon } from "semantic-ui-react";
import dgIMG from "../../img/Screen Shot 2019-05-04 at 5.41.04 PM.png";
import eventIMG from "../../img/Screen Shot 2019-05-04 at 5.45.58 PM.png";
import gifIMG from "../../img/Screen Shot 2019-05-04 at 7.24.06 PM.png";
const ProjectPage = () => (
  <Segment raised>
    <Card.Group itemsPerRow="three">
      <Card
        href="https://asmith7531.github.io/DGD_utility/DGD%20Generator/"
        target="_blank"
        image={dgIMG}
        header="Dangerous Goods Document Utility"
        meta="DG Calculation Helper"
        description=" The first solo project I can say I am proud of. It is a web app
    I made to help me with my current job, creating documents for
    shipping hazardous materials overseas. The goal was to perform
    all the calculations for me and then display the data all in one
    place. It was presented to my companies IT department, and
    integrated into their website."
      />

      <Card
        href="https://rocky-badlands-45326.herokuapp.com/"
        target="_blank"
        header="Eventualities"
        image={gifIMG}
        meta="Event Planner"
        description=" My first group project while in the Rutgers Coding Bootcamp,
        Eventualities is an app for finding things to do near you.
        It exposed me to Firebase Authentication, CryptoJS, and the
        Google Maps API."
      />

      <Card
        href="https://asmith7531.github.io/GifTastic/"
        target="_blank"
        image={eventIMG}
        header="Giftastic"
        meta="RESTful API Calls"
        description="Created as homework in Rutgers Coding Bootcamp, Giftastic
      was a fun app that searched giphy's API. It exposed me to
      creating dynamic html elements, making AJAX requests, and
      new CSS techniques."
      />
    </Card.Group>
  </Segment>
);

export default ProjectPage;
