import React from "react";
import PropTypes from "prop-types";
import styles from "./hero.css";
import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function hero({ celebrity, vote }) {
  const featuredCelebrity = celebrity.length ? celebrity[0] : {};
  const gradient = `linear-gradient(180deg, rgba(57,57,57,0.8911939775910365) 0%, rgba(70,70,70,1) 14%, rgba(186,186,186,0) 32%)`;
  return (
    <div
      style={{
        backgroundImage: `${gradient} ,url(${featuredCelebrity.image})`,
      }}
      className="hero"
    >
      <Container>
        <div className="hero__content">
          <div className="hero__content-inner">
            <div>What's your opinion on</div>
            <div className="hero__name">{featuredCelebrity.name}?</div>
            <div className="hero__copy">{featuredCelebrity.copy}</div>
            <div>
              <FontAwesomeIcon icon={['fab', 'wikipedia-w']} />
              <a target="_blank" href={featuredCelebrity.more}>
                More information
              </a>
            </div>
            <div>What's our Veredict?</div>
          </div>
          <Button
            className="hero__thumbs-up thumbs-up"
            basic
            color="red"
            onClick={() => vote(featuredCelebrity, `up`)}
          >
            <FontAwesomeIcon icon="thumbs-up" />
          </Button>
          <Button
            className="hero__thumbs-down thumbs-down"
            basic
            color="red"
            onClick={() => vote(featuredCelebrity, `down`)}
          >
            <FontAwesomeIcon icon="thumbs-down" />
          </Button>
        </div>
      </Container>
      <div className="hero__closing">
        <span className="hero__closing-left">CLOSING</span>
        <span className="hero__closing-right">22 days</span>
      </div>
    </div>
  );
}

hero.defaultProps = {};

hero.propTypes = {
  hero: PropTypes.any,
};

export default hero;
