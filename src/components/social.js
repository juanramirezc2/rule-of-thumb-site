import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function social() {
  return (
    <div className="social">
      Follow Us
      <a style={{fontSize: "3rem", margin:"0 1.5rem"}} className="social__icon">
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      </a>
      <a style={{fontSize: "3rem", margin:"0 1.5rem"}} className="social__icon">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </div>
  );
}
export default social;
