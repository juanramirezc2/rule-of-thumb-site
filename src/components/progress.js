import * as React from "react";
import { Frame } from "framer";

export default function ProgressBar(props) {
  const { progress, duration } = props;
  return (
    <Frame
      height={44}
      width="100%"
      borderRadius={22}
      background="#dedede"
      overflow="hidden"
      border="4px solid #dedede"
    >
      <Frame>
        height={"100%"}
        initial=
        {{
          width: "0%"
        }}
        animate = {{ width: progress + "%" }}
        transition=
        {{
          ease: "linear",
          duration: duration
        }}
        background="#0099FF"
      </Frame>
    </Frame>
  );
}
ProgressBar.defaultProps = {
  progress: 100,
  duration: 2
};
