import * as React from "react";
import { Frame } from "framer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProgressBar(props) {
  const { progress, duration } = props;
  return (
    <div style={{ fontSize: "29px" }} className="percentages">
      <Frame
        height={"50px"}
        initial={{ width: "0%" }}
        animate={{ width: "64%" }}
        transition={{ ease: "linear", duration: 2 }}
        background={"#FCB242B3"}
        left={0}
        style={{ textAlign: "left", lineHeight: "50px", padding: "0 1rem" }}
        bottom={0}
      >
        <FontAwesomeIcon icon="thumbs-up" />
        64%
      </Frame>
      <Frame
        height={"50px"}
        initial={{ width: "100%" }}
        animate={{ width: "36%" }}
        transition={{ ease: "linear", duration: 2 }}
        background={"#33BAB3B3"}
        right={0}
        style={{ textAlign: "right", lineHeight: "50px", padding: "0 1rem" }}
        bottom={0}
      >
        <FontAwesomeIcon icon="thumbs-down" />
        36%
      </Frame>
    </div>
  );
}
ProgressBar.defaultProps = {
  progress: 100,
  duration: 2,
};
