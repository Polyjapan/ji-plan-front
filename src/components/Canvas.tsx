import React from "react";
import { List, Map } from "immutable";
import { Stage, Layer, KonvaNodeEvents } from "react-konva";
import { connect, ConnectedProps } from "react-redux";
import Background from "./Background";
import AddButton from "./AddButton";
import UndoButton from "./layerManager/UndoButton";
import Rectangle from "./elements/Rectangle";
import { PRESENT } from "../config/constants";
import Element from "../classes/Element";
import LayerClass from "../classes/Layer";
import LayerManager from "./layerManager/LayerManager";
import { moveElement, transformElement } from "../actions/layers";
import {
  MoveElementPayloadType,
  TransformElementPayloadType,
} from "../reducers/LayerActionTypes";
import { RootState } from "../reducers";

const mapDispatchToProps = {
  // dispatchGetElements: getElements,
  dispatchMoveElement: moveElement,
  dispatchTransformElement: transformElement,
};

const mapStateToProps = ({ layers }: RootState) => ({
  layers: layers[PRESENT].get("layers"), //.toJS(),
  selectedLayer: layers[PRESENT].get("selected"),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

type State = {
  selectedId: string | null;
};

class Canvas extends React.Component<Props, State> {
  private scaleBy = 1.01;

  state = {
    selectedId: null,
  };

  public componentDidMount() {
    // const { dispatchGetElements } = this.props;
    // dispatchGetElements();
  }

  public render() {
    const {
      layers,
      dispatchMoveElement,
      dispatchTransformElement,
      selectedLayer,
    } = this.props;

    if (!layers || layers.size === 0) {
      return null;
    }

    const checkDeselect = (e: any) => {
      // deselect when clicked on empty area
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        this.setState({ selectedId: null });
      }
    };

    const onWheelHandler = (e: any) => {
      const target = e.target;
      const stage = target.getStage();
      e.evt.preventDefault();
      const oldScale = stage.scaleX();

      const mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
      };

      const newScale =
        e.evt.deltaY > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;
      stage.scale({ x: newScale, y: newScale });

      const newPos = {
        x:
          -(mousePointTo.x - stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - stage.getPointerPosition().y / newScale) *
          newScale,
      };
      stage.position(newPos);
      stage.batchDraw();
    };

    const { selectedId } = this.state;

    return (
      <>
        <UndoButton />
        <AddButton />

        <LayerManager />

        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          onWheel={onWheelHandler}
          draggable
        >
          <Layer>
            <Background />
          </Layer>
          {layers.map((layer: LayerClass, i: number) => {
            const elements: List<Element> = layer.get("elements");
            return (
              <Layer key={i} name={layer.get("name")}>
                {elements.map((rect: Element, k: number) => {
                  const rectId = rect.get("id");
                  return (
                    <Rectangle
                      key={k}
                      shapeProps={rect}
                      isSelected={rectId === selectedId}
                      isLayerSelected={i === selectedLayer}
                      onSelect={() => {
                        this.setState({ selectedId: rectId });
                      }}
                      onMove={(payload: MoveElementPayloadType) => {
                        dispatchMoveElement(payload);
                      }}
                      onTransform={(payload: TransformElementPayloadType) => {
                        dispatchTransformElement(payload);
                      }}
                    />
                  );
                })}
              </Layer>
            );
          })}
        </Stage>
      </>
    );
  }
}

const ConnectedComponent = connector(Canvas);

export default ConnectedComponent;
