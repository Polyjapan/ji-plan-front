import { combineReducers } from "redux";
import { Map } from "immutable";
import undoable, { StateWithHistory } from "redux-undo";
import layers from "./layerReducers";

const reducers = combineReducers({
  layers: undoable(layers),
});

export type RootState = {
  layers: StateWithHistory<Map<string, any>>;
};

export default reducers;
