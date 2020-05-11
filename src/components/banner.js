import React from 'react';
import './banner.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function banner() {
  return (
    <div className="banner">
      <div className="banner__left-side">
        <div>
          Speak out. Be heard.
        </div>
        <b>
          Be counted
        </b>
      </div>
      <div className="banner__right-side">
        Rule of Thumb is crowd sourced court of public opinion where anyone and everyone can speak
        freely.It's easy: You share your opinion, we nalize and put the data in a public report.
      </div>
      <div className="banner__close">
        <FontAwesomeIcon icon="times" />
      </div>
    </div>
  );
}

export default banner;
