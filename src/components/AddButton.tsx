import React, { ReactNode } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import LayerActionTypes, { ADD_ELEMENT } from "../reducers/LayerActionTypes";

// ACTIONS
const addRect = () => (dispatch: Dispatch<LayerActionTypes>): void => {
  dispatch({ type: ADD_ELEMENT, payload: "hey" });
};

const mapDispatchToProps = {
  dispatchAddRect: addRect,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {};
type State = {
  // count: number; // like this
};
class AddButton extends React.Component<Props, State> {
  private addRect = (): void => {
    const { dispatchAddRect } = this.props;
    dispatchAddRect();
  };

  public render = (): ReactNode => {
    return (
      <button id="addElement" onClick={this.addRect}>
        Add
      </button>
    );
  };
}

const ConnectedComponent = connector(AddButton);

export default ConnectedComponent;
