import React, { Component } from "react";
import About from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ContactMe from "../ContactMe/ContactMe";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
class DesktopContainer extends Component {
  state = {
    calculations: {
      topVisible: false,
      bottomVisible: false
    },
    aboutPage: false,
    projectsPage: false,
    contactPage: false
  };
  handleUpdate = (e, { calculations }) => this.setState({ calculations });

  handleWireframe = (e, { checked }) =>
    this.setState({ showWireframe: checked });

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handleAbout() {
    if (this.setState === false) {
      this.setState({ about: true });
    } else {
      // this.setState({ about: false });
    }
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item onClick={this.handleAbout} name="About" as="a">
                  About Me
                </Menu.Item>
                <Menu.Item name="Projects" as="a">
                  My Projects So Far
                </Menu.Item>

                <Menu.Item onClick={this.handleNavClick} name="Contact" as="a">
                  Contact Me
                </Menu.Item>
              </Container>
            </Menu>
            <Hero />
          </Segment>
        </Visibility>
        {children}
        <About />
        <Projects />
        <ContactMe />
      </Responsive>
    );
  }
}
export default DesktopContainer;
