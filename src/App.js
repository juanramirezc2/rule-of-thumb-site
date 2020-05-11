import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Past from "./pages/past";
import Home from "./pages/home";
import Terms from "./pages/terms";
import Social from "./components/social";
import { Container } from "semantic-ui-react";
import classnames from "classnames";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { openMenu } = this.props;
    return (
      <div className={classnames({ openMenu: openMenu })}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/past" component={Past} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/about" component={About} />
        <footer className="footer">
          <Container>
            <div className="footer__content">
              <div className="footer-links">
                <NavLink to="/terms">Terminos y condiciones</NavLink>
                <span className="divider" />
                <NavLink to="/about">Acerca</NavLink>
              </div>
              <Social />
            </div>
          </Container>
        </footer>
      </div>
    );
  }
}

export default connect((state) => ({ openMenu: state.siteStore.openMenu }))(
  App
);
