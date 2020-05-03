import React from "react";
import { List } from "immutable";
import Collapse from "react-bootstrap/Collapse";
import clsx from "clsx";
import { connect, ConnectedProps } from "react-redux";
import { PRESENT } from "../../config/constants";
import Element from "../../classes/Element";
import "./LayerManager.css";
import { setSelectedLayer } from "../../actions/layers";
import LayerElement from "./LayerElement";
import HideShowButton from "./HideShowButton";
import { RootState } from "../../reducers";

const mapDispatchToProps = {
  dispatchSetSelectedLayer: setSelectedLayer,
};

const mapStateToProps = ({ layers }: RootState) => ({
  selected: layers[PRESENT].getIn(["selected", "layer"]),
  selectedElement: layers[PRESENT].getIn(["selected", "element"]),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  layer: any;
  id: number;
};

type State = {
  open: boolean;
};

class LayerGroup extends React.Component<Props, State> {
  layerOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { dispatchSetSelectedLayer } = this.props;
    dispatchSetSelectedLayer(Number(e.currentTarget.dataset.id));
  };

  state = {
    open: true,
  };

  handleShowHideOnClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { layer, selected, id, selectedElement } = this.props;
    const { open } = this.state;

    const elementsId = `layer-elements-${id}`;

    const elements: List<Element> = layer.get("elements");
    return (
      <div
        data-id={id}
        onClick={this.layerOnClick}
        className={clsx("layerManagerElement", {
          selected: selected === id,
        })}
      >
        <div style={{ display: "flex" }}>
          <HideShowButton
            handleOnClick={this.handleShowHideOnClick}
            open={open}
            id={elementsId}
          />
          <h4>{layer.get("name")}</h4>
        </div>

        <Collapse in={open}>
          <div id={elementsId}>
            {elements.map((el) => (
              <LayerElement
                key={el.get("id")}
                layerId={id}
                element={el}
                isSelected={selectedElement === el.get("id")}
              />
            ))}
          </div>
        </Collapse>
      </div>
    );
  }
}

const ConnectedComponent = connector(LayerGroup);

export default ConnectedComponent;
