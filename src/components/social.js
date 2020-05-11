import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function social() {
  return (
    <div className="social">
      Follow Us
      <a
        href="https://www.facebook.com/"
        style={{ fontSize: "3rem", margin: "0 1.5rem" }}
        className="social__icon"
      >
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
      </a>
      <a
        href="https://twitter.com/"
        style={{ fontSize: "3rem", margin: "0 1.5rem" }}
        className="social__icon"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
    </div>
  );
}
export default social;
