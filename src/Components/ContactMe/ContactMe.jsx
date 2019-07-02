import React, { Component } from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

export default function() {
  return (
    <Segment inverted float="right">
      <Header>Contact Info</Header>
      <div class="ui list">
        <div class="item">
          <i class="users icon" />
          <div class="content">Austin Smith</div>
        </div>
        <div class="item">
          <i class="marker icon" />
          <div class="content">Flemington, NJ</div>
        </div>
        <div class="item">
          <i class="mail icon" />
          <div class="content">
            <a href="mailto:austinsmith7531@gmail.com" target="_blank">
              austinsmith7531@gmail.com
            </a>
          </div>
        </div>
        <div class="item">
          <i class="phone icon" />
          <div class="content">316-300-5183</div>
        </div>
        <div class="item">
          <div class="content">
            <i class="linkedin in icon" />
            <a href="https://www.linkedin.com/in/austin-smith-2a5584172/">
              LinkedIn{" "}
            </a>
          </div>
        </div>
      </div>
    </Segment>
  );
}
