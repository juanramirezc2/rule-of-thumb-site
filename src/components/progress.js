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
        animate={{ width: progress + "%" }}
        transition={{ ease: "linear", duration: 2 }}
        background={"#FCB242B3"}
        left={0}
        style={{ textAlign: "left", lineHeight: "50px", padding: "0 1rem" }}
        bottom={0}
      >
        <FontAwesomeIcon icon="thumbs-up" />
        {Math.floor( progress )+"%"}
      </Frame>
      <Frame
        height={"50px"}
        initial={{ width: "100%" }}
        animate={{ width: (100-progress)+"%" }}
        transition={{ ease: "linear", duration: 2 }}
        background={"#33BAB3B3"}
        right={0}
        style={{ textAlign: "right", lineHeight: "50px", padding: "0 1rem" }}
        bottom={0}
      >
        <FontAwesomeIcon icon="thumbs-down" />
        {Math.floor(100-progress)+"%"}
      </Frame>
    </div>
  );
}
ProgressBar.defaultProps = {
  duration: 2,
};
