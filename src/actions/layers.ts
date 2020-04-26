import { Dispatch } from "redux";
import LayerActionTypes, {
  GET_ELEMENTS,
  SET_SELECTED_LAYER,
  TRANSFORM_ELEMENT,
  ADD_CUSTOM_DATA,
  MOVE_ELEMENT,
} from "../reducers/LayerActionTypes";

// export const getElements = () => (dispatch: Dispatch<LayerActionTypes>) => {
//   dispatch({ type: GET_ELEMENTS });
// };

export const setSelectedLayer = (idx: number) => (
  dispatch: Dispatch<LayerActionTypes>
) => {
  dispatch({ type: SET_SELECTED_LAYER, payload: idx });
};

export const moveElement = (payload: any) => (
  dispatch: Dispatch<LayerActionTypes>
) => {
  dispatch({ type: MOVE_ELEMENT, payload });
};

export const transformElement = (payload: any) => (
  dispatch: Dispatch<LayerActionTypes>
) => {
  dispatch({ type: TRANSFORM_ELEMENT, payload });
};

export const addCustomData = (payload: any) => (
  dispatch: Dispatch<LayerActionTypes>
) => {
  dispatch({ type: ADD_CUSTOM_DATA, payload });
};
