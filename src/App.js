import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import OrdersFormPage from "./pages/orders-form-page";
import OrdersListPage from "./pages/orders-list-page";
import Terms from "./pages/terms";
/**
 * App class react router in change of routes for all pages.
 *
 *
 */
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={OrdersListPage} />
        <Route exact path="/past" component={Home} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/about" component={About} />
        <Route path="/orders/new" component={OrdersFormPage} />
        <Route path="/orders/edit/:_id" component={OrdersFormPage} />
        <footer className="footer">
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
        </footer>
      </>
    );
  }
}

export default App;
