import React from "react";
import { Dispatch } from "redux";
import { ActionCreators } from "redux-undo";
import { connect } from "react-redux";

const mapDispatchToProps: any = {
  dispatchUndo: () => (dispatch: Dispatch<any>) =>
    dispatch(ActionCreators.undo()),
};

type MyProps =
  // ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };
type MyState = {
  // count: number; // like this
};
class UndoButton extends React.Component<MyProps, MyState> {
  private undo = () => {
    const { dispatchUndo } = this.props;
    dispatchUndo();
  };

  public render = () => {
    return (
      <button id="undo" onClick={this.undo}>
        Undo
      </button>
    );
  };
}

const ConnectedComponent = connect(null, mapDispatchToProps)(UndoButton);

export default ConnectedComponent;
