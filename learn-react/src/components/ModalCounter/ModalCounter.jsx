import { Modal, Row } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";

export default class ModalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.defaultValue,
    };
  }

  componentDidMount() {
    console.log(this.state.counter);
    this.count = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.count);
  }

  render() {
    return (
      <Modal
        style={{ top: 20 }}
        title="Counter Modal"
        visible={this.props.isVisible}
        onOk={() => this.props.onOk(this.state.counter)}
        onCancel={this.props.onCancel}
      >
        <Row justify="center">Value: {this.state.counter}</Row>
      </Modal>
    );
  }
}
