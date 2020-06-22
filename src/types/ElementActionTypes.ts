export const ADD_CUSTOM_DATA = "ADD_CUSTOM_DATA";
export const SET_CUSTOM_DATA = "SET_CUSTOM_DATA";
export const SET_VISIBILITY = "SET_VISIBILITY";

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

export type SetVisibilityPayloadType = {
  visibility: boolean;
  id: string;
  layerId: number;
};
interface SetVisibilityAction {
  type: typeof SET_VISIBILITY;
  payload: SetVisibilityPayloadType;
}

type ElementActionTypes =
  | AddCustomDataAction
  | SetCustomDataAction
  | SetVisibilityAction;

export default ElementActionTypes;
