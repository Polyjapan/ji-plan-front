import { List } from "immutable";
import Element from "../classes/Element";
import LayerState from "./LayerState";
import LayerActionTypes, { ADD_ELEMENT } from "./LayerActionTypes";

// REDUCER

const initialElements = List([
  new Element({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1",
  }),
  new Element({
    x: 250,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2",
  }),
]);

const initialState = new LayerState({ elements: initialElements });

export function layerReducer(
  state = initialState,
  action: LayerActionTypes
): LayerState {
  switch (action.type) {
    case ADD_ELEMENT: {
      const el: Element = new Element({
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        fill: "orange",
        id: "rect3",
      });
      return state.updateIn(["elements"], (elements: Element[]) =>
        elements.push(el)
      );
    }
    default:
      console.log("action.type", action.type);
      return initialState;
  }
}

export default layerReducer;
