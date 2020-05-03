import React from "react";
import Element from "../../classes/Element";
import CustomDataForm from "./CustomDataForm";
import PropertyInput from "./PropertyInput";

type Props = {
  element: Element;
  layerId: number;
  isSelected: boolean;
};

const LayerElement = ({ element, layerId, isSelected }: Props) => {
  const customData = element.get("customData");

  return (
    <div
      data-id={element.get("id")}
      className="layerElement"
      style={{ background: isSelected ? "orange" : undefined }}
    >
      <div className="category">{element.get("category")}</div>
      <div className="name">{element.get("name")}</div>

      {!customData.isEmpty() &&
        Object.entries(customData.toJS()).map(([key, value]) => (
          <PropertyInput
            layerId={layerId}
            elementId={element.get("id")}
            key={key}
            keyName={key}
            value={value}
          />
        ))}
      <CustomDataForm elementId={element.get("id")} layerId={layerId} />
    </div>
  );
};

export default LayerElement;
