import { List, Map } from "immutable";
import Element from "../classes/Element";
import LayerState from "./LayerState";
import Layer from "../classes/Layer";
import LayerActionTypes, {
  ADD_ELEMENT,
  SET_SELECTED_LAYER,
  MOVE_ELEMENT,
  TRANSFORM_ELEMENT,
  SET_SELECTED_ELEMENT,
} from "../types/LayerActionTypes";
import ElementActionTypes, {
  ADD_CUSTOM_DATA,
  SET_CUSTOM_DATA,
  SET_VISIBILITY,
} from "../types/ElementActionTypes";
import { generateRandomId } from "../utils/utils";

const findElementById = (
  state: LayerState,
  layerId: number,
  elementId: string
) => {
  return state
    .getIn(["layers", layerId, "elements"])
    .findIndex((el: Element) => {
      return el.get("id") === elementId;
    });
};

// REDUCER

const initialElements = List([
  new Element({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1id",
    category: "rect",
    name: "rect1",
    customData: Map({
      key: "value",
      prop: "ddd",
    }),
  }),
  new Element({
    x: 250,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2id",
    category: "rect",
    name: "rect2",
    customData: Map(),
    rotation: 10,
  }),
]);

const initialLayers = List([
  new Layer({ name: "Pro", elements: initialElements }),
  new Layer({ name: "Déco" }),
]);

const initialState = new LayerState({
  layers: initialLayers,
  selected: Map({
    element: null,
    layer: 0,
  }),
});

export function layerReducer(
  state = initialState,
  action: LayerActionTypes | ElementActionTypes
): LayerState {
  const { type, payload } = action;
  switch (type) {
    case ADD_ELEMENT: {
      const selectedLayer = state.getIn(["selected", "layer"]).valueOf();
      const id = generateRandomId();
      const el = new Element({
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        fill: selectedLayer ? "orange" : "blue",
        id,
        name: id,
        customData: Map(),
      });

      return state.updateIn(
        ["layers", selectedLayer, "elements"],
        (elements: List<Element>) => elements.push(el)
      );
    }
    case SET_SELECTED_LAYER: {
      return state.setIn(["selected", "layer"], payload);
    }
    case SET_SELECTED_ELEMENT: {
      return state.setIn(["selected", "element"], payload);
    }
    case MOVE_ELEMENT: {
      const selectedLayer = state.getIn(["selected", "layer"]).valueOf();
      const { id: elementId, x, y } = payload;
      const index = findElementById(state, selectedLayer, elementId);
      return state
        .setIn(["layers", selectedLayer, "elements", index, "x"], x)
        .setIn(["layers", selectedLayer, "elements", index, "y"], y);
    }
    case TRANSFORM_ELEMENT: {
      const selectedLayer = state.getIn(["selected", "layer"]).valueOf();
      const { rotation, x, y, height, width, id } = payload;
      const index = findElementById(state, selectedLayer, id);
      return state
        .setIn(["layers", selectedLayer, "elements", index, "width"], width)
        .setIn(["layers", selectedLayer, "elements", index, "height"], height)
        .setIn(["layers", selectedLayer, "elements", index, "x"], x)
        .setIn(["layers", selectedLayer, "elements", index, "y"], y)
        .setIn(
          ["layers", selectedLayer, "elements", index, "rotation"],
          rotation
        );
    }
    case ADD_CUSTOM_DATA: {
      const { key, value, id: elementId, layerId } = payload;
      const index = findElementById(state, layerId, elementId);
      console.log("index", index);
      return state.setIn(
        ["layers", layerId, "elements", index, "customData", key],
        value
      );
    }
    case SET_CUSTOM_DATA: {
      const { key, value, id: elementId, layerId } = payload;
      const index = findElementById(state, layerId, elementId);
      console.log("index", index);
      return state.setIn(
        ["layers", layerId, "elements", index, "customData", key],
        value
      );
    }
    case SET_VISIBILITY: {
      const { visibility, id: elementId, layerId } = payload;
      const index = findElementById(state, layerId, elementId);
      return state.setIn(
        ["layers", layerId, "elements", index, "isVisible"],
        visibility
      );
    }
    default:
      console.log("action.type", type);
      return state;
  }
}

export default layerReducer;
