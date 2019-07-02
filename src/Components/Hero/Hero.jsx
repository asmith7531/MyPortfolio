import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Header, Icon, Responsive } from "semantic-ui-react";
import SVG from "./LandingSVG";
const HomepageHeading = ({ mobile }) => (
  <>
    <Responsive>
      <Container text>
        <Header
          as="h1"
          content="I'm Austin,"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em"
          }}
        />
        <Header
          as="h2"
          content="and I hack together code."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
      </Container>
      <SVG />
    </Responsive>
  </>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;