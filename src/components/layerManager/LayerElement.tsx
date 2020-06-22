import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Element from "../../classes/Element";
import CustomDataForm from "./CustomDataForm";
import PropertyInput from "./PropertyInput";
import visibilityIcon from "../../images/visibilityIcon.png";
import { setVisibility } from "../../actions/layers";
import { RootState } from "../../reducers";

const mapDispatchToProps = {
  dispatchSetVisibility: setVisibility,
};

const mapStateToProps = ({ layers }: RootState) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  element: Element;
  layerId: number;
  isSelected: boolean;
};
type State = {};

class LayerElement extends React.Component<Props, State> {
  toggleVisibility = () => {
    const { layerId, dispatchSetVisibility, element } = this.props;
    const visibility = element.get("isVisible");
    dispatchSetVisibility({
      visibility: !visibility,
      id: element.get("id"),
      layerId,
    });
  };

  render() {
    const { element, layerId, isSelected } = this.props;
    const customData = element.get("customData");

    return (
      <div
        data-id={element.get("id")}
        className="layerElement"
        style={{ background: isSelected ? "orange" : undefined }}
      >
        <div
          className="visible"
          style={{ opacity: element.get("isVisible") ? 1 : 0.3 }}
        >
          <img
            width="20px"
            src={visibilityIcon}
            alt="visiblity icon"
            onClick={this.toggleVisibility}
          />
        </div>
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
  }
}

const ConnectedComponent = connector(LayerElement);

export default ConnectedComponent;
