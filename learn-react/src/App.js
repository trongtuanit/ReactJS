import React from "react";
import { Button } from "antd";
import ModalCounter from "./components/ModalCounter/ModalCounter";
import "antd/dist/antd.css";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      countValue: 0,
    };
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  openModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = (val) => {
    this.closeModal();
    this.setState({ countValue: val });
  };

  handleCancel = () => {
    this.closeModal();
    this.setState({ countValue: 0 });
  };

  render() {
    return (
      <div className="app">
        <Button onClick={() => this.openModal()} type="danger">
          Start counting
        </Button>
        <p>
          {this.state.countValue && <p>Count value: {this.state.countValue}</p>}
        </p>
        {this.state.isModalVisible ? (
          <ModalCounter
            isVisible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            defaultValue={this.state.countValue}
          ></ModalCounter>
        ) : null}
      </div>
    );
  }
}
