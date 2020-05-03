import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./LayerManager.css";
import { setCustomData } from "../../actions/layers";

const mapDispatchToProps = {
  dispatchSetCustomData: setCustomData,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux & {
  key?: string;
  layerId: number;
  elementId: string;
  keyName: string;
  value: string;
};

type State = {};

class PropertyInput extends React.Component<Props, State> {
  handeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { dispatchSetCustomData, layerId, elementId, keyName } = this.props;
    const { value } = e.target;
    dispatchSetCustomData({ value, layerId, id: elementId, key: keyName });
  };

  public render() {
    const { keyName, value } = this.props;

    return (
      <div className="addCustomData">
        {keyName}
        <input
          name="value"
          placeholder="Value"
          value={value}
          onChange={this.handeOnChange}
        />
      </div>
    );
  }
}

const ConnectedComponent = connector(PropertyInput);

export default ConnectedComponent;
