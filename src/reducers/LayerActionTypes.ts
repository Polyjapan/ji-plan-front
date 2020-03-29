export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const GET_ELEMENTS = "GET_ELEMENTS";

interface AddElementAction {
  type: typeof ADD_ELEMENT;
  payload: string;
}

interface RemoveElementAction {
  type: typeof REMOVE_ELEMENT;
  meta: {
    timestamp: number;
  };
}

type LayerActionTypes = AddElementAction | RemoveElementAction;

export default LayerActionTypes;
