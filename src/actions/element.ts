import ElementActionTypes, {
  ADD_CUSTOM_DATA,
  SET_CUSTOM_DATA,
  SET_VISIBILITY,
  AddCustomDataPayloadType,
  SetCustomDataPayloadType,
  SetVisibilityPayloadType,
} from "../types/ElementActionTypes";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

type ElementAction = ThunkAction<void, RootState, null, ElementActionTypes>;

export const addCustomData = (
  payload: AddCustomDataPayloadType
): ElementAction => (dispatch): void => {
  dispatch({ type: ADD_CUSTOM_DATA, payload });
};

export const setCustomData = (
  payload: SetCustomDataPayloadType
): ElementAction => (dispatch): void => {
  dispatch({ type: SET_CUSTOM_DATA, payload });
};

export const setVisibility = (
  payload: SetVisibilityPayloadType
): ElementAction => (dispatch): void => {
  dispatch({ type: SET_VISIBILITY, payload });
};
