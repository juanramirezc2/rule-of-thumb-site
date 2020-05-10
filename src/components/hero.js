import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero.css';

function hero({ celebrity, vote }) {
  return (
    <div className={styles.base}>
      <img src={celebrity.image} />
      here goes a hero that let's you vote
    </div>
  );
}

hero.defaultProps = {};

hero.propTypes = {
hero: PropTypes.any,
};

export default hero;
