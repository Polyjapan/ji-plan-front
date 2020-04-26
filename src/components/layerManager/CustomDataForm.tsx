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
};

class CustomDataForm extends React.Component<Props, any> {
  private _keyInput: HTMLInputElement | null = null;
  private _valueInput: HTMLInputElement | null = null;

  state = {
    key: undefined,
    value: undefined,
  };

  handeOnClick = (e: any) => {
    const { layerId, elementId, dispatchAddCustomData } = this.props;
    if (this._keyInput && this._valueInput) {
      if (!this._keyInput.value.length || !this._valueInput.value.length) {
        console.log("name and key cannot be empty");
      }
      // @TODO special char
      // @TODO duplicate
      else {
        console.log("---- add custom data");
        dispatchAddCustomData({
          layerId,
          id: elementId,
          key: this._keyInput.value,
          value: this._valueInput.value,
        });
      }
    }
  };

  public render() {
    return (
      <div className="addCustomData">
        <input
          name="key"
          placeholder="Key"
          ref={(input) => (this._keyInput = input)}
        />
        <input
          name="value"
          placeholder="Value"
          ref={(input) => (this._valueInput = input)}
        />
        <button type="submit" onClick={this.handeOnClick}>
          Add
        </button>
      </div>
    );
  }
}

const ConnectedComponent: any = connector(CustomDataForm);

export default ConnectedComponent;
