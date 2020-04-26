export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const GET_ELEMENTS = "GET_ELEMENTS";
export const SET_SELECTED_LAYER = "SET_SELECTED_LAYER";
export const MOVE_ELEMENT = "MOVE_ELEMENT";
export const ADD_CUSTOM_DATA = "ADD_CUSTOM_DATA";
export const TRANSFORM_ELEMENT = "TRANSFORM_ELEMENT";

interface AddElementAction {
  type: typeof ADD_ELEMENT;
  payload: string;
}

interface RemoveElementAction {
  type: typeof REMOVE_ELEMENT;
  payload: any;
  // meta: {
  //   timestamp: number;
  // };
}

interface SelectLayerAction {
  type: typeof SET_SELECTED_LAYER;
  payload: number;
}

interface MoveElementAction {
  type: typeof MOVE_ELEMENT;
  payload: any;
}

interface TransformElementAction {
  type: typeof TRANSFORM_ELEMENT;
  payload: any;
}

interface AddCustomDataAction {
  type: typeof ADD_CUSTOM_DATA;
  payload: any;
}

type LayerActionTypes =
  | AddElementAction
  | RemoveElementAction
  | SelectLayerAction
  | MoveElementAction
  | TransformElementAction
  | AddCustomDataAction;

export default LayerActionTypes;
