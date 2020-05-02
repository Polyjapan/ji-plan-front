import { combineReducers } from "redux";
import undoable, { StateWithHistory } from "redux-undo";
import layers from "./layerReducers";

const reducers = combineReducers({
  layers: undoable(layers),
});

export type RootState = {
  layers: StateWithHistory<Map<string, any>>;
};

export default reducers;
