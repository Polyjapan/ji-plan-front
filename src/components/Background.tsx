import React, { ReactElement } from "react";
import useImage from "use-image";
import { Image } from "react-konva";

// the first very simple and recommended way:
const Background = (): ReactElement<any> | null => {
  const [image] = useImage(
    "https://www.epfl.ch/schools/cdm/wp-content/uploads/2018/10/Campus-map-EPFL-2018.jpg"
  );
  return (
    <Image
      onMouseEnter={() => {
        document.body.style.cursor = "move";
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
      }}
      image={image}
      scaleX={0.7}
      scaleY={0.7}
    />
  );
};

export default Background;
