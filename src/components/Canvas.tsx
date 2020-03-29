import React from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";
import Background from "./Background";
import AddButton from "./AddButton";
import UndoButton from "./UndoButton";
import Rectangle from "./elements/Rectangle";
import { PRESENT } from "../config/constants";

const mapDispatchToProps: any = {
  // dispatchGetElements: getElements,
};
const mapStateToProps = ({ layers }: any) => ({
  elements: layers[PRESENT].get("elements"),
});

class Canvas extends React.Component<any, any> {
  private scaleBy: number = 1.01;

  state = {
    selectedId: null,
  };

  public componentDidMount() {
    console.log("fjkmcd");
    // const { dispatchGetElements } = this.props;
    // dispatchGetElements();
  }

  public render() {
    const { elements } = this.props;

    if (!elements || elements.size === 0) {
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
      const stage = e.target.getStage();
      e.evt.preventDefault();
      var oldScale = stage.scaleX();

      var mousePointTo = {
        x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
      };

      var newScale =
        e.evt.deltaY > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;
      stage.scale({ x: newScale, y: newScale });

      var newPos = {
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
          <Layer>
            {elements.map((rect: any, i: number) => {
              return (
                <Rectangle
                  key={i}
                  shapeProps={rect.toJS()}
                  isSelected={rect.get("id") === selectedId}
                  onSelect={() => {
                    this.setState({ selectedId: rect.get("id") });
                  }}
                  onChange={(newAttrs: any) => {
                    const rects = elements.slice();
                    rects[i] = newAttrs;
                    // this.setState({elements: rects});
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </>
    );
  }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default ConnectedComponent;
