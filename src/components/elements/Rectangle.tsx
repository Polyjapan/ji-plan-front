import React from "react";
import { Rect, Transformer } from "react-konva";

export type Props = {
  key?: number;
  isLayerSelected: boolean;
  shapeProps: any;
  isSelected: boolean;
  onSelect: any;
  onMove: any;
  onTransform: any;
};

// <props, state>
const Rectangle = ({
  shapeProps,
  isSelected,
  onSelect,
  onMove,
  onTransform,
  isLayerSelected,
}: Props) => {
  const shapeRef: any = React.useRef();
  const trRef: any = React.useRef();

  React.useEffect(() => {
    if (isLayerSelected && isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected, isLayerSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable={isLayerSelected}
        onDragEnd={(e) => {
          onMove({
            x: e.target.x(),
            y: e.target.y(),
            id: shapeProps.id,
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onTransform({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            rotation: node.rotation(),
          });
        }}
      />
      {isLayerSelected && isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Rectangle;
