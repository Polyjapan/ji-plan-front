export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const GET_ELEMENTS = "GET_ELEMENTS";
export const SET_SELECTED_LAYER = "SET_SELECTED_LAYER";
export const MOVE_ELEMENT = "MOVE_ELEMENT";
export const ADD_CUSTOM_DATA = "ADD_CUSTOM_DATA";
export const TRANSFORM_ELEMENT = "TRANSFORM_ELEMENT";
export const SET_CUSTOM_DATA = "SET_CUSTOM_DATA";

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

export type MoveElementPayloadType = {
  id: string;
  x: number;
  y: number;
};

interface MoveElementAction {
  type: typeof MOVE_ELEMENT;
  payload: MoveElementPayloadType;
}

export type TransformElementPayloadType = {
  id: string;
  width: string;
  height: string;
  rotation: string;
  x: number;
  y: number;
};
interface TransformElementAction {
  type: typeof TRANSFORM_ELEMENT;
  payload: TransformElementPayloadType;
}

export type AddCustomDataPayloadType = {
  key: string;
  value: string;
  id: string;
  layerId: number;
};
interface AddCustomDataAction {
  type: typeof ADD_CUSTOM_DATA;
  payload: AddCustomDataPayloadType;
}

export type SetCustomDataPayloadType = {
  key: string;
  value: string;
  id: string;
  layerId: number;
};
interface SetCustomDataAction {
  type: typeof SET_CUSTOM_DATA;
  payload: SetCustomDataPayloadType;
}

type LayerActionTypes =
  | AddElementAction
  | RemoveElementAction
  | SelectLayerAction
  | MoveElementAction
  | TransformElementAction
  | AddCustomDataAction
  | SetCustomDataAction;

export default LayerActionTypes;
