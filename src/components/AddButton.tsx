import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addElement } from "../actions/layers";
import { SHAPES } from "../config/constants";

const mapDispatchToProps = {
  dispatchAddElement: addElement,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {};
type State = {
  // count: number; // like this
};
class AddButton extends React.Component<Props, State> {
  private addRect = (): void => {
    const { dispatchAddElement } = this.props;
    dispatchAddElement({ shape: SHAPES.RECTANGLE });
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
