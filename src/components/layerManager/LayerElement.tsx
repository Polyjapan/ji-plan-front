import React from "react";
import Element from "../../classes/Element";
import CustomDataForm from "./CustomDataForm";
import PropertyInput from "./PropertyInput";

const LayerElement = ({
  element,
  layerId,
}: {
  element: Element;
  layerId: number;
}) => {
  const customData = element.get("customData");
  console.log("customData", customData);

  return (
    <div data-id={element.get("id")} className="layerElement">
      <div className="category">{element.get("category")}</div>
      <div className="name">{element.get("name")}</div>

      {!customData.isEmpty() &&
        Object.entries(customData.toJS()).map(([key, value]) => (
          <PropertyInput key={key} keyName={key} value={value} />
        ))}
      <CustomDataForm elementId={element.get("id")} layerId={layerId} />
    </div>
  );
};

export default LayerElement;
