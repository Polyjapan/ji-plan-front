import { Record, List } from "immutable";
import Element from "../classes/Element";

interface ILayerState {
  elements: List<Element>;
}

const LayerStateRecord = Record({
  elements: List(),
});

class LayerState extends LayerStateRecord implements ILayerState {
  constructor(props: ILayerState) {
    super(props);
  }
}

export default LayerState;
