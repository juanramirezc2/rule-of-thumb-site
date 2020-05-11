import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./fonts";
import "./index.css";
// font awesome library instanciation
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookSquare,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
import {
  faThumbsUp,
  faThumbsDown,
  faBars,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faThumbsUp,
  faThumbsDown,
  faBars,
  faSearch,
  faTimes,
  faTwitter,
  faFacebookSquare,
  faWikipediaW
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
