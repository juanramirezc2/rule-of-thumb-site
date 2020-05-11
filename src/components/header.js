import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Container } from "semantic-ui-react";
import "./header.css";
import { connect } from "react-redux";
import { toggleMenu } from "../actions/celebrities-actions";
import { NavLink } from "react-router-dom";

function Header({ toggleMenu }) {
  return (
    <header>
      <div className="header__wrapper">
        <Container className="header__container">
          <div className="header__brand">
            <h1>Rule of Thumb.</h1>
          </div>
          <nav className="header__main-nav">
            <div onClick={toggleMenu} className="header__close">
              <FontAwesomeIcon icon="times" />
            </div>
            <ul className="header__main-nav--inline">
              <li>
                <NavLink to="/about">Past Trials</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about">How it Works</NavLink>
              </li>
              <li>
                <NavLink to="/about"> How it Works</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__search">
            <FontAwesomeIcon icon="search" />
          </div>
          <div onClick={toggleMenu} className="header__mobile-nav">
            <FontAwesomeIcon icon="bars" />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default connect(false, { toggleMenu })(Header);
