export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const GET_ELEMENTS = "GET_ELEMENTS";
export const SET_SELECTED_LAYER = "SET_SELECTED_LAYER";
export const MOVE_ELEMENT = "MOVE_ELEMENT";
export const SET_SELECTED_ELEMENT = "SET_SELECTED_ELEMENT";
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

interface SelectElementAction {
  type: typeof SET_SELECTED_ELEMENT;
  payload: string | null;
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

type LayerActionTypes =
  | AddElementAction
  | RemoveElementAction
  | SelectLayerAction
  | SelectElementAction
  | MoveElementAction
  | TransformElementAction;

export default LayerActionTypes;