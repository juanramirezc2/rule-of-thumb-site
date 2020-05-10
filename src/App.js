import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import OrdersListPage from "./pages/orders-list-page";
import OrdersFormPage from "./pages/orders-form-page";
import Home from "./pages/home";
import About from "./pages/about";
import Terms from "./pages/terms";

const Header = () => (
  <header>
    <div>
    Rule of Thumb.
    </div>
    <nav>
      <ul>
        <li>Past Trials</li>
        <li>How it Works</li>
        <li>Log In/Sign Up</li>
      </ul>
    </nav>
  </header>
);
/**
 * App class react router in change of routes for all pages.
 *
 *
 */
class App extends Component {
  render() {
    return (
        <Container>
          <Header />
          <Route exact path="/" component={OrdersListPage} />
          <Route exact path="/past" component={Home} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route path="/orders/new" component={OrdersFormPage} />
          <Route path="/orders/edit/:_id" component={OrdersFormPage} />
          <div className="footer">
            <div className="footer-links">
              <NavLink to="/terms">Terminos y condiciones</NavLink>
              <span className="divider" />
              <NavLink to="/about">Acerca</NavLink>
            </div>
            <div className="copyright">
              imagen de logo tomada desde{" "}
              <a href="https://clipartxtras.com/">clipartxtras.com</a> todos los
              derechos reservados ©
            </div>
          </div>
        </Container>
    );
  }
}

export default App;
