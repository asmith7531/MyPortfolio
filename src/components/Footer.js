import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Other Links</h5>
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
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

//   <div>
//     <div class="ui list">
//       <div class="item">
//         <i class="users icon" />
//         <div class="content">Austin Smith</div>
//       </div>
//       <div class="item">
//         <i class="marker icon" />
//         <div class="content">Flemington, NJ</div>
//       </div>
//       <div class="item">
//         <i class="mail icon" />
//         <div class="content">
//           <a href="mailto:austinsmith7531@gmail.com" target="_blank">
//             austinsmith7531@gmail.com
//           </a>
//         </div>
//       </div>
//       <div class="item">
//         <i class="phone icon" />
//         <div class="content">316-300-5183</div>
//       </div>
//       <div class="item">
//         <div class="content">
//           <i class="linkedin in icon" />
//           <a href="https://www.linkedin.com/in/austin-smith-2a5584172/">
//             LinkedIn{" "}
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
