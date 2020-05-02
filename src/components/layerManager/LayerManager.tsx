import React from "react";
import { List } from "immutable";
import clsx from "clsx";
import { connect, ConnectedProps } from "react-redux";
import { PRESENT } from "../../config/constants";
import Element from "../../classes/Element";
import LayerClass from "../../classes/Layer";
import "./LayerManager.css";
import { setSelectedLayer } from "../../actions/layers";
import LayerElement from "./LayerElement";
import { RootState } from "../../reducers";
import Layer from "../../classes/Layer";

const mapDispatchToProps = {
  dispatchSetSelectedLayer: setSelectedLayer,
};

const mapStateToProps = ({ layers }: RootState) => ({
  layers: layers[PRESENT].get("layers"), //.toJS(),
  selected: layers[PRESENT].get("selected"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  layers: List<Layer>;
  selected: number;
};

class LayerManager extends React.Component<Props> {
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

const ConnectedComponent = connector(LayerManager);

export default ConnectedComponent;
