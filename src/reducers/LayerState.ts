import { Record, List } from "immutable";
import Layer from "../classes/Layer";

interface ILayerState {
  layers: List<Layer>;
  selected?: number;
}

const LayerStateRecord = Record({
  layers: List<Layer>([new Layer({ elements: List() })]),
  selected: 0,
});

class LayerState extends LayerStateRecord implements ILayerState {}

export default LayerState;
