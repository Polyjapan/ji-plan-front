import LayerActionTypes, {
  ADD_ELEMENT,
  SET_SELECTED_LAYER,
  TRANSFORM_ELEMENT,
  MOVE_ELEMENT,
  SET_SELECTED_ELEMENT,
  MoveElementPayloadType,
  TransformElementPayloadType,
} from "../types/LayerActionTypes";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { SHAPES } from "../config/constants";
import { RectangleProps, CircleProps, TextProps } from "../classes/Element";
import { generateRandomId } from "../utils/utils";

// export const getElements = () => (dispatch: Dispatch<LayerActionTypes>) => {
//   dispatch({ type: GET_ELEMENTS });
// };

type LayerAction = ThunkAction<void, RootState, null, LayerActionTypes>;

export const addElement = ({ shape }: { shape: string }): LayerAction => (
  dispatch
): void => {
  const id = generateRandomId();

  let element;
  switch (shape) {
    case SHAPES.RECTANGLE:
      element = new RectangleProps({ id });
      break;
    case SHAPES.CIRCLE:
      element = new CircleProps({ id, fill: "blue" });
      break;
    case SHAPES.TEXT:
      element = new TextProps({ id });
      break;
    default:
      break;
  }

  if (!element) {
    console.log("ELEMENT NOT DEFINED");
    return;
  }

  dispatch({ type: ADD_ELEMENT, payload: { element } });
};

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
