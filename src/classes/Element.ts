import { Record, Map } from "immutable";

interface IElement {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  id: string;
  category: string;
  name: string;
  customData?: Map<string, any>;
  rotation?: number;
}

const ElementRecord = Record({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "red",
  id: "defaultid",
  category: "rect",
  name: "defaultname",
  customData: Map<string, any>(),
  rotation: 0,
});

class Element extends ElementRecord implements IElement {}

export default Element;
