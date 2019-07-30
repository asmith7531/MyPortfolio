import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class=" blue-grey page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Portfolio's are Weird</h5>
              <p class="grey-text text-lighten-4" />
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Other Links and Stuff</h5>
              <ul>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://github.com/asmith7531"
                  >
                    My GitHub
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/austin-smith-2a5584172/"
                  >
                    My LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="mailto:austinsmith7531@gmail.com"
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Flemington, NJ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2018 Copyright Text</div>
        </div>
      </footer>
    );
  }
}
