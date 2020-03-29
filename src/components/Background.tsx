import React from "react";
import useImage from "use-image";
import { Image } from "react-konva";

// the first very simple and recommended way:
const Background = () => {
  const [image] = useImage(
    "https://www.epfl.ch/schools/cdm/wp-content/uploads/2018/10/Campus-map-EPFL-2018.jpg"
  );
  return <Image image={image} scaleX={0.7} scaleY={0.7} />;
};

export default Background;
