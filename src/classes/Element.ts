import { Record } from "immutable";

interface IElement {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  id: string;
}

const ElementRecord = Record({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fill: "red",
  id: "defaultid",
});

class Element extends ElementRecord implements IElement {
  constructor(props: IElement) {
    super(props);
  }
}

export default Element;
