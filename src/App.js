import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import OrdersFormPage from "./pages/orders-form-page";
import ListPage from "./pages/list-page";
import Terms from "./pages/terms";
import Social from "./components/social";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={ListPage} />
        <Route exact path="/past" component={Home} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/about" component={About} />
        <Route path="/orders/new" component={OrdersFormPage} />
        <Route path="/orders/edit/:_id" component={OrdersFormPage} />
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
      </>
    );
  }
}

export default App;
