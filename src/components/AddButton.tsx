import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import LayerActionTypes, { ADD_ELEMENT } from "../reducers/LayerActionTypes";

// ACTIONS
const addRect = () => (dispatch: Dispatch<LayerActionTypes>) => {
  dispatch({ type: ADD_ELEMENT, payload: "hey" });
};

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.

const mapDispatchToProps: any = {
  dispatchAddRect: addRect,
};

type MyProps =
  // ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };
type MyState = {
  // count: number; // like this
};
class AddButton extends React.Component<MyProps, MyState> {
  private addRect = () => {
    const { dispatchAddRect } = this.props;
    dispatchAddRect();
  };

  public render = () => {
    return (
      <button id="addElement" onClick={this.addRect}>
        Add
      </button>
    );
  };
}

const ConnectedComponent = connect(null, mapDispatchToProps)(AddButton);

export default ConnectedComponent;
