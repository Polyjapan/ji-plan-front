import React from "react";
import { List } from "immutable";
import clsx from "clsx";
import { connect } from "react-redux";
import { PRESENT } from "../../config/constants";
import Element from "../../classes/Element";
import LayerClass from "../../classes/Layer";
import "./LayerManager.css";
import { setSelectedLayer } from "../../actions/layers";
import LayerElement from "./LayerElement";

const mapDispatchToProps: any = {
  dispatchSetSelectedLayer: setSelectedLayer,
};
const mapStateToProps = ({ layers }: any) => ({
  layers: layers[PRESENT].get("layers"), //.toJS(),
  selected: layers[PRESENT].get("selected"),
});

class LayerManager extends React.Component<any, any> {
  layerOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { dispatchSetSelectedLayer } = this.props;
    dispatchSetSelectedLayer(Number(e.currentTarget.dataset.id));
  };

  public render() {
    const { layers, selected } = this.props;

    if (!layers || layers.size === 0) {
      return null;
    }

    return (
      <div id="layerManager">
        {layers.map((layer: LayerClass, i: number) => {
          const elements: List<Element> = layer.get("elements");
          return (
            <div
              key={i}
              data-id={i}
              onClick={this.layerOnClick}
              className={clsx("layerManagerElement", {
                selected: selected === i,
              })}
            >
              <h4>{layer.get("name")}</h4>
              {elements.map((el) => (
                <LayerElement key={el.get("id")} layerId={i} element={el} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerManager);

export default ConnectedComponent;
