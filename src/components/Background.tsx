import React, { ReactElement } from "react";
import useImage from "use-image";
import EPFL_CE_0 from "../images/Plan_CE_0_blank.svg";
import { Image } from "react-konva";

// the first very simple and recommended way:
const Background = (): ReactElement<any> | null => {
  const [image] = useImage(EPFL_CE_0);
  return (
    <Image
      onMouseEnter={() => {
        document.body.style.cursor = "move";
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
      }}
      image={image}
      scaleX={1}
      scaleY={1}
    />
  );
};

export default Background;
