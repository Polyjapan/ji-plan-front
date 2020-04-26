import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./LayerManager.css";
import { addCustomData } from "../../actions/layers";

const mapDispatchToProps: any = {
  dispatchAddCustomData: addCustomData,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {
  layerId: number;
  elementId: string;
  keyName: string;
  value: string;
};

class PropertyInput extends React.Component<Props, any> {
  state = {
    updatedValue: this.props.value,
  };

  handeOnChange = (e: any) => {
    console.log("wesjdk");
  };

  public render() {
    const { keyName } = this.props;
    console.log("PropertyInput -> render -> key", keyName);

    return (
      <div className="addCustomData">
        {keyName}
        <input
          name="value"
          placeholder="Value"
          value={this.state.updatedValue}
          onChange={this.handeOnChange}
        />
      </div>
    );
  }
}

const ConnectedComponent: any = connector(PropertyInput);

export default ConnectedComponent;
