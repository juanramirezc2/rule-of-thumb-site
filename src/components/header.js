import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";
import {Container} from "semantic-ui-react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header__wrapper">
        <Container className="header__container">
          <div className="header__brand">
            <h1>Rule of Thumb.</h1>
          </div>
          <nav className="header__main-nav">
            <div className="header__close">
              <FontAwesomeIcon icon="times" />
            </div>
            <ul className="header__main-nav--inline">
              <li>Past Trials</li>
              <li>How it Works</li>
              <li>Log In/Sign Up</li>
            </ul>
          </nav>
          <div className="header__search">
            <FontAwesomeIcon icon="search" />
          </div>
          <div className="header__mobile-nav">
            <FontAwesomeIcon icon="bars" />
          </div>
        </Container>
      </div>
    </header>
  );
}
