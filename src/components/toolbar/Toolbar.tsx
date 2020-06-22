import React from "react";
import { List } from "immutable";
import { connect, ConnectedProps } from "react-redux";
import { PRESENT, SHAPES } from "../../config/constants";
import "./Toolbar.css";
import { RootState } from "../../reducers";
import { addElement } from "../../actions/layers";

const mapDispatchToProps = {
  dispatchAddElement: addElement,
};

const mapStateToProps = ({ layers }: RootState) => ({
  layers: layers[PRESENT].get("layers"), //.toJS(),
  selected: layers[PRESENT].getIn(["selected", "layer"]),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

class Toolbar extends React.Component<Props> {
  addElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const shape = target.dataset.shape as string;
    const { dispatchAddElement } = this.props;
    dispatchAddElement({ shape });
  };

  public render() {
    return (
      <div id="toolbar">
        <div
          className="shape"
          data-shape={SHAPES.RECTANGLE}
          onClick={this.addElement}
        >
          ■
        </div>
        <div
          className="shape"
          data-shape={SHAPES.CIRCLE}
          onClick={this.addElement}
        >
          ⬤
        </div>
      </div>
    );
  }
}

const ConnectedComponent = connector(Toolbar);

export default ConnectedComponent;
