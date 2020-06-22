import LayerActionTypes, {
  SET_SELECTED_LAYER,
  TRANSFORM_ELEMENT,
  MOVE_ELEMENT,
  SET_SELECTED_ELEMENT,
  MoveElementPayloadType,
  TransformElementPayloadType,
} from "../types/LayerActionTypes";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

// export const getElements = () => (dispatch: Dispatch<LayerActionTypes>) => {
//   dispatch({ type: GET_ELEMENTS });
// };

type LayerAction = ThunkAction<void, RootState, null, LayerActionTypes>;

export const setSelectedLayer = (idx: number): LayerAction => (
  dispatch
): void => {
  dispatch({ type: SET_SELECTED_LAYER, payload: idx });
};

export const moveElement = (payload: MoveElementPayloadType): LayerAction => (
  dispatch
): void => {
  dispatch({ type: MOVE_ELEMENT, payload });
};

export const transformElement = (
  payload: TransformElementPayloadType
): LayerAction => (dispatch): void => {
  dispatch({ type: TRANSFORM_ELEMENT, payload });
};

export const selectElement = (rectId: string | null): LayerAction => (
  dispatch
): void => {
  dispatch({ type: SET_SELECTED_ELEMENT, payload: rectId });
};
