import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer class=" blue-grey page-footer scrollspy" id="contact">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Contact Me</h5>
              <p class="grey-text text-lighten-4">
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
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2018 Copyright Austin Smith</div>
        </div>
      </footer>
    );
  }
}
