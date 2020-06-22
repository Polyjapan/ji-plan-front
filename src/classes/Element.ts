import { Record, Map } from "immutable";
import { SHAPES } from "../config/constants";

interface IElement {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  id: string;
  category: string;
  shape: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customData?: Map<string, any>;
  rotation?: number;
  isVisible: boolean;
}

const ElementRecord = Record({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "red",
  id: "defaultid",
  category: "shape",
  shape: SHAPES.RECTANGLE,
  name: "defaultname",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customData: Map<string, any>(),
  rotation: 0,
  isVisible: true,
});

class Element extends ElementRecord implements IElement {}

export default Element;
