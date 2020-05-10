import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from "./store"
//import 'semantic-ui-css/semantic.min.css';
import './fonts/Lato-Light.ttf'
import './fonts/Lato-Regular.ttf'
import './fonts/Lato-Italic.ttf'
import './fonts/Lato-BoldItalic.ttf'
import './fonts/Lato-LightItalic.ttf'
//import 'semantic-ui-css/semantic.min.css';
import './index.css';
// font awesome library instanciation
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faThumbsDown, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp, faThumbsDown, faBars, faSearch, faTimes)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
