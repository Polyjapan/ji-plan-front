import { combineReducers } from "redux";
import undoable from "redux-undo";
import layers from "./layerReducers";

const reducers = combineReducers({
  layers: undoable(layers),
});

export default reducers;
